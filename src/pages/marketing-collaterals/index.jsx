import { useState } from 'react'

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

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const MarketingCollaterals = () => {
  const [value, setValue] = useState('healthGuidance')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          // aria-label='account-settings tabs'
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
        </TabList>
        <TabPanel sx={{ paddingLeft: 8, overflow: 'auto', height: '408px' }} value='festival'>
          <Festivals />
        </TabPanel>
        <TabPanel sx={{ paddingLeft: 8, overflow: 'auto', height: '408px' }} value='insuranceConcept'>
          <InsuranceConcepts />
        </TabPanel>
        <TabPanel sx={{ paddingLeft: 8, overflow: 'auto', height: '408px' }} value='healthGuidance'>
          <HealthGuidance />
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default MarketingCollaterals
