// ** React Imports
import { useRef, useState } from 'react'
import * as htmlToImage from 'html-to-image'

import Draggable from 'react-draggable'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import ButtonGroup from '@mui/material/ButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import CustomPopover from './../../@core/components/CustomPopover'
import { styled, useTheme } from '@mui/material/styles'

// ** Icons Imports
import FormatBoldIcon from 'mdi-material-ui/FormatBold'
import FormatItalicIcon from 'mdi-material-ui/FormatItalic'
import { FormatColorText, Download, RectangleOutline, ShareVariant, AlphabeticalVariant } from 'mdi-material-ui'
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Select,
  Typography
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Edit, Save } from '@mui/icons-material'
import Paper from 'src/@core/theme/overrides/paper'
import CustomInputField from 'src/@core/components/CustomInputField'
import CustomButton from 'src/@core/components/CustomButton'
import * as posterActions from './../../state/reducers/poster/posterAction'
import { connect } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

// ** helper Imports
// import { pSBC } from './helper'

function CustomizationForm({ id, posterActions: { saveAsDraft } }) {
  // ** Hook
  const theme = useTheme()
  const imageDivRef = useRef(null)
  const [showEditIcon, setShowEditIcon] = useState(true)

  const [state, setState] = useState({
    labels: [
      {
        id: 0,
        shape: `Default`,
        position: 'top-left',
        greetings: `Greetings,`,
        label: `customer name`,
        value: '',
        formate: {
          bold: false,
          italic: false,
          fontColor: `black`,
          fontSize: `12`
        },
        editable: true
      },
      {
        id: 1,
        shape: `Text`,
        position: 'bottom-right',
        greetings: `hidden`,
        label: `agent name`,
        value: 'Agent XYZ',
        formate: {
          bold: false,
          italic: false,
          fontColor: `black`,
          fontSize: `12`
        },
        editable: false
      }
    ]
  })
  const [activeLabel, setActiveLabel] = useState(0)
  const [color, setColor] = useState('')

  const onChangeHandler = event => {
    if (!event) return
    let labels = state.labels
    let label = labels[activeLabel]
    if (event.target) {
      if (event.target.name !== undefined)
        switch (event.target.name) {
          case 'greetings':
            label.greetings = event.target.value
            break
          case 'fontSize':
            label.formate.fontSize = event.target.value
            break
          default:
            label.value = event.target.value
            break
        }
    } else {
      switch (event) {
        case 'bold':
          label.formate.bold = !label.formate.bold
          break
        case 'italic':
          label.formate.italic = !label.formate.italic
          break
        default:
          break
      }
    }
    labels[activeLabel] = label
    setState({ ...state, labels })
  }

  const handleListItemClick = event => {
    let labels = state.labels
    let label = labels[activeLabel]
    label.shape = event.target.innerText
    labels[activeLabel] = label
    setState({ ...state, labels })
  }

  const onColorChangeHandler = event => {
    setColor(event.target.getAttribute('value'))
    setAnchorEl(null)
  }
  const [anchorEl, setAnchorEl] = useState(null)

  const handleColorPicker = event => {
    setAnchorEl(event.currentTarget)
  }

  const open = Boolean(anchorEl)

  const DivStyled = styled('div')(({ theme }) => ({
    padding: '10px',
    fontWeight: state.labels[activeLabel].formate.bold ? 'bold' : 'none',
    fontStyle: state.labels[activeLabel].formate.italic ? 'italic' : 'none',
    color: color,
    fontSize: state.labels[activeLabel].formate.fontSize + 'px',
    whiteSpace: 'pre-line',
    textAlign: 'start'

    // Square
  }))
  const label = state.labels[activeLabel]
  let hiddenSm = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid container spacing={2} direction={hiddenSm ? 'column-reverse' : ''} style={{ height: 'inherit' }}>
      <Grid item xs={8} textAlign={'center'} alignItems={'center'} style={{ height: 'inherit' }}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
                <CustomButton
                  aria-label='download'
                  actionCallBack={async () => {
                    setShowEditIcon(false)
                    const dataUrl = await htmlToImage.toPng(imageDivRef.current)
                    const link = document.createElement('a')
                    link.download = `${id}.png`
                    link.href = dataUrl
                    link.click()
                    setShowEditIcon(true)
                  }}
                  startIcon={<Download />}
                >
                  <Typography ml={1} display={hiddenSm && 'none'}>
                    download
                  </Typography>
                </CustomButton>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CustomButton
                  aria-label='share'
                  startIcon={<Save />}
                  actionCallBack={e => {
                    e.preventDefault()

                    // const { id, formate, greetings, position, shape, value } = label
                    saveAsDraft({ id, labels: state.labels })
                  }}
                >
                  <Typography ml={1} display={hiddenSm && 'none'}>
                    save
                  </Typography>
                </CustomButton>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CustomButton aria-label='share' startIcon={<ShareVariant />}>
                  <Typography ml={1} display={hiddenSm && 'none'}>
                    share
                  </Typography>
                </CustomButton>
              </Box>
            </Box>
            <div className='container' ref={imageDivRef} onDrop={() => {}}>
              <img
                src={`/images/posters/${id}.jpg`}
                alt='Snow'
                style={{
                  maxWidth: '100%',
                  height: 'inherit'
                }}
              />
              {state.labels.map((label, index) => (
                <Draggable bounds='parent' key={index}>
                  <DivStyled
                    className={`${label.position} ${label.shape} label`}
                    onClick={e => label.editable && setActiveLabel(index)}
                    draggable={true}
                  >
                    {showEditIcon && label.editable && hiddenSm && (
                      <CustomPopover
                        content={
                          <div
                            style={{
                              width: `150px`,
                              display: `grid`,
                              padding: '10px',
                              gridTemplateColumns: `auto auto auto`
                            }}
                          >
                            <div>
                              <AlphabeticalVariant />
                            </div>
                            <div>
                              <RectangleOutline />
                            </div>
                            <div>
                              <svg
                                style={{ transform: ` rotate(90deg)` }}
                                fill='none'
                                height='24'
                                viewBox='0 0 24 24'
                                width='24'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <ellipse cx='12' cy='12' rx='8' ry='10' stroke='black' strokeWidth='2' />
                              </svg>
                            </div>
                          </div>
                        }
                      >
                        <div className='poster-edit-icon'>
                          <Edit />
                        </div>
                      </CustomPopover>
                    )}
                    {(label.greetings && label.greetings !== 'hidden' ? label.greetings : '') + ' ' + label.value}
                  </DivStyled>
                </Draggable>
              ))}
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Grid>
          <Card>
            <CardHeader title='Customize Poster' titleTypographyProps={{ variant: 'h6' }} />
            <CardContent>
              <form onSubmit={event => event.preventDefault()}>
                <Grid container spacing={5}>
                  <Grid item xs={12}>
                    <ButtonGroup
                      variant='outlined'
                      className='custom-button-group'
                      aria-label='outlined button group'
                      style={{ width: 'inherit' }}
                    >
                      <ToggleButton selected={label.formate.bold} onClick={e => onChangeHandler('bold')}>
                        <FormatBoldIcon />
                      </ToggleButton>
                      <ToggleButton selected={label.formate.italic} onClick={e => onChangeHandler('italic')}>
                        <FormatItalicIcon />
                      </ToggleButton>
                      <ToggleButton selected={true}>
                        <FormatColorText
                          aria-describedby={'id'}
                          variant='contained'
                          onClick={handleColorPicker}
                          style={{ fill: color || 'currentColor' }}
                        />
                        <Popover
                          id={'id'}
                          open={open}
                          anchorEl={anchorEl}
                          onClose={event => setAnchorEl(null)}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                          }}
                        >
                          <div
                            style={{
                              width: `150px`,
                              display: `grid`,
                              gridTemplateColumns: `auto auto auto auto auto`
                            }}
                          >
                            {[
                              '#61bd6d',
                              '#3a35411f',
                              '#54acd2',
                              '#9365b8',
                              '#cccccc',
                              '#3a35411f',
                              '#00a885',
                              '#2969b0',
                              '#28324e',
                              '#f7da64',
                              '#fba026',
                              '#eb6b56',
                              '#e25041',
                              '#a38f84',
                              '#efefef'
                            ].map((color, index) => (
                              <div
                                key={index}
                                id={color + index}
                                style={{
                                  margin: '5px',
                                  width: '20px',
                                  height: '20px',
                                  border: '1px solid',
                                  backgroundColor: `${color}`,
                                  cursor: 'pointer'
                                }}
                                name={'fontColor'}
                                value={color}
                                onClick={onColorChangeHandler}
                              />
                            ))}
                          </div>
                        </Popover>
                      </ToggleButton>
                      <TextField
                        type='number'
                        size='small'
                        label='font size'
                        inputProps={{ min: 10 }}
                        defaultValue={14}
                        value={label.formate.fontSize}
                        onChange={onChangeHandler}
                        name='fontSize'
                      />
                    </ButtonGroup>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={3}>
                      {/* {label.greetings !== 'hidden' && (
                        <Grid item xs={12}>
                          <FormControl fullWidth>
                            <InputLabel id='greetings'>Greetings</InputLabel>
                            {label[`greetings`] !== 'hidden' && (
                              <Select
                                labelId='greetings'
                                id='greetings-id'
                                value={label[`greetings`]}
                                label='Greetings'
                                onChange={onChangeHandler}
                                size='small'
                                name='greetings'
                                fullWidth
                              >
                                <MenuItem value='Dear,'>Dear, </MenuItem>
                                <MenuItem value='Greetings,'>Greetings, </MenuItem>
                                <MenuItem value='Hi,'>Hi, </MenuItem>
                                <MenuItem value='Hello,'>Hello, </MenuItem>
                              </Select>
                            )}
                          </FormControl>
                        </Grid>
                      )} */}
                      <Grid item xs={12}>
                        <CustomInputField
                          label={`${label.label}`}
                          name='customerName'
                          size='small'
                          fullWidth
                          startAdornment={
                            <select
                              name='salutation'
                              style={{
                                marginRight: 10,
                                background: '#fff',
                                border: 'none',
                                outline: 'none'
                              }}
                            >
                              <option value='Dear,'>Dear, </option>
                              <option value='Greetings,'>Greetings, </option>
                              <option value='Hi,'>Hi, </option>
                              <option value='Hello,'>Hello, </option>
                            </select>
                          }
                          onChange={onChangeHandler}
                        />
                      </Grid>
                      {/* <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label={`Enter ${label.label} `}
                          placeholder={`${label.label}`}
                          name='customerName'
                          value={label.value}
                          size='small'
                          onChange={onChangeHandler}
                          multiline
                        />
                      </Grid> */}
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
        {!hiddenSm && (
          <Grid>
            <Card variant='outlined' style={{ marginBlock: '10px' }}>
              <CardContent>
                <List component='nav' aria-label='main mailbox folders'>
                  <ListItemButton selected={label.shape === 'Default'} onClick={event => handleListItemClick(event, 0)}>
                    <ListItemIcon>
                      <AlphabeticalVariant />
                    </ListItemIcon>
                    <ListItemText primary='Default' />
                  </ListItemButton>
                  <ListItemButton selected={label.shape === 'Square'} onClick={event => handleListItemClick(event, 1)}>
                    <ListItemIcon>
                      <RectangleOutline />
                    </ListItemIcon>
                    <ListItemText primary='Square' />
                  </ListItemButton>
                  <ListItemButton selected={label.shape === 'Ellipse'} onClick={event => handleListItemClick(event, 2)}>
                    <ListItemIcon>
                      <svg
                        style={{ transform: ` rotate(90deg)` }}
                        fill='none'
                        height='24'
                        viewBox='0 0 24 24'
                        width='24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <ellipse cx='12' cy='12' rx='8' ry='10' stroke='black' strokeWidth='2' />
                      </svg>
                    </ListItemIcon>
                    <ListItemText primary='Ellipse' />
                  </ListItemButton>
                </List>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Grid>
  )
}
function mapStateToProps(state) {
  return { state }
}
function mapDispatchToProps(dispatch) {
  return {
    posterActions: bindActionCreators(posterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomizationForm)
