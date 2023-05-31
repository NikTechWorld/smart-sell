import { useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

// ** Icons Imports
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined'
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'

// ** Demo Tabs Imports
import Festivals from 'src/views/Marketing-Collaterals/Festivals'
import InsuranceConcepts from 'src/views/Marketing-Collaterals/InsuranceConcepts'
import HealthGuidance from 'src/views/Marketing-Collaterals/HealthGuidance'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import { makeStyles } from '@mui/styles'
import { BorderRadius } from 'mdi-material-ui'
import { MenuItem, Select } from '@mui/material'

import * as posterActions from 'src/state/reducers/poster/posterAction'
import { bindActionCreators } from '@reduxjs/toolkit'
import { connect } from 'react-redux'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: '10%',
    fontSize: '10px'
    // display: "none"
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '10%'
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    width: 'maxWidth',
    fontSize: '0.7rem'
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '10%',
    fontSize: '0.6rem',
    display: 'flex'
  }
}))

const useStyles = makeStyles(theme => ({
  dropcard: {
    padding: '10px 20px',
    '& .collateralOptions': {
      display: 'none !important',
      [theme.breakpoints.down('md')]: {
        display: 'block !important'
      }
    },
    '& .MuiTabs-root': {
      [theme.breakpoints.down('md')]: {
        display: 'none !important'
      }
    },
    [theme.breakpoints.up('md')]: {
      padding: 0
    }
  }
}))

const MarketingCollaterals = props => {
  const [value, setValue] = useState('healthGuidance')
  const [state, setState] = useState([])
  const classes = useStyles()
  const { getPosterOfTheDay, setFavorite } = props.posterActions
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    setState(props.posterReducer.posters)
  }, [props])
  const setIsFavorite = id => {
    setFavorite(id)
  }
  return (
    <Card className={classes.dropcard}>
      <Select
        className='collateralOptions'
        defaultValue={'healthGuidance'}
        onChange={e => {
          setValue(e.target.value)
        }}
        fullWidth
      >
        <MenuItem value='festival'>Festival</MenuItem>
        <MenuItem value='healthGuidance'>Health Guidance</MenuItem>
        <MenuItem value='insuranceConcept'>Insurance Concepts</MenuItem>
      </Select>
      <TabContext value={value}>
        <TabList
          //  className={classess.MuiTabList-vertical}
          onChange={handleChange}
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}`, backgroundColor: '#E3F4F4' }}
        >
          <Tab
            value='festival'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AutoAwesomeOutlinedIcon />
                <TabName>Festivals</TabName>
              </Box>
            }
          />
          <Tab
            value='insuranceConcept'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <HealthAndSafetyOutlinedIcon />
                <TabName>Insurance Concepts</TabName>
              </Box>
            }
          />
          <Tab
            value='healthGuidance'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <MedicalInformationOutlinedIcon />
                <TabName>Health Guidance</TabName>
              </Box>
            }
          />
          {/* <div>
          <select >
            <option value='festival'>Festival</option>
            <option value='insuranceConcept'>Insurance Concepts
            </option>
            <option selected="true"  value='healthGuidance'>
              Health Guidance</option>
          </select>
          </div> */}
        </TabList>

        {/* <div className=''> */}
        <TabPanel sx={{ paddingLeft: 8, overflow: 'auto', height: 'max-content' }} value='festival'>
          <Festivals data={state} setIsFavorite={setIsFavorite} />
        </TabPanel>
        <TabPanel sx={{ paddingLeft: 8, overflow: 'auto', height: 'max-content' }} value='insuranceConcept'>
          <InsuranceConcepts data={state} setIsFavorite={setIsFavorite} />
        </TabPanel>
        <TabPanel sx={{ paddingLeft: 8, overflow: 'auto', height: 'max-content' }} value='healthGuidance'>
          <HealthGuidance data={state} setIsFavorite={setIsFavorite} />
        </TabPanel>
        {/* </div> */}
      </TabContext>
    </Card>
  )
}
const mapStateToProps = state => state
const mapDispatchToProps = dispatch => {
  return {
    posterActions: bindActionCreators(posterActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MarketingCollaterals)
