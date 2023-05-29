// ** React Imports
import { useEffect, useRef, useState } from 'react'
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
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Box from '@mui/material/Box'

import { styled, useTheme } from '@mui/material/styles'

// ** Icons Imports
import FormatBoldIcon from 'mdi-material-ui/FormatBold'
import FormatItalicIcon from 'mdi-material-ui/FormatItalic'
import { FormatColorText, Download, PrinterEye, Heart, RectangleOutline, ShareVariant, Inbox } from 'mdi-material-ui'
import {
  CardActionArea,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Select
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** helper Imports
// import { pSBC } from './helper'

export default function CustomizationForm({ id }) {
  // ** Hook
  const theme = useTheme()
  const imageDivRef = useRef(null)

  const [state, setState] = useState({
    formats: [],
    labels: [
      {
        shape: `Square`,
        position: 'top-left',
        greetings: `Greetings,`,
        label: `customerName`,
        value: '',
        formate: [
          {
            bold: false,
            italic: false,
            fontColor: `black`,
            fontSize: `12px`
          }
        ]
      },
      {
        shape: `Square`,
        position: 'bottom-right',
        greetings: `hidden`,
        label: `customerName`,
        value: 'Agent XYZ',
        formate: [
          {
            bold: false,
            italic: false,
            fontColor: `black`,
            fontSize: `12px`
          }
        ]
      }
    ]
  })
  const [activeLabel, setActiveLabel] = useState(0)
  const [color, setColor] = useState('')

  const onChangeHandler = event => {
    console.log(event)
    if (event.target.name !== undefined) {
      let labels = state.labels
      let label = labels[activeLabel]
      event.target.name === `greetings` ? (label.greetings = event.target.value) : (label.value = event.target.value)
      labels[activeLabel] = label
      setState({ ...state, labels })
    }
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

  const handleFormat = (event, newFormats) => {
    setState({ ...state, formats: newFormats })
  }
  const [anchorEl, setAnchorEl] = useState(null)

  const handleColorPicker = event => {
    setAnchorEl(event.currentTarget)
  }

  const open = Boolean(anchorEl)

  const DivStyled = styled('div')(({ theme }) => ({
    padding: '10px',
    fontWeight: state.formats.includes('bold') ? 'bold' : 'none',
    fontStyle: state.formats.includes('italic') ? 'italic' : 'none',
    color: color,
    fontSize: state.fontSize + 'px',
    whiteSpace: 'pre-line',
    textAlign: 'start'

    // Square
  }))
  const label = state.labels[activeLabel]
  return (
    <Grid
      container
      spacing={2}
      direction={useMediaQuery(theme.breakpoints.down('sm')) ? 'column-reverse' : ''}
      style={{ height: 'inherit' }}
    >
      <Grid item xs={8} textAlign={'center'} alignItems={'center'} style={{ height: 'inherit' }}>
        <Card>
          <CardContent>
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
                    onClick={e => setActiveLabel(index)}
                    draggable={true}
                  >
                    {(label.greetings && label.greetings !== 'hidden' ? label.greetings : '') + ' ' + label.value}
                  </DivStyled>
                </Draggable>
              ))}
            </div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
                <IconButton
                  aria-label='download'
                  onClick={async () => {
                    const dataUrl = await htmlToImage.toPng(imageDivRef.current)
                    const link = document.createElement('a')
                    link.download = `${id}.png`
                    link.href = dataUrl
                    link.click()
                  }}
                >
                  <Download />
                </IconButton>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label='share'>
                  <ShareVariant />
                </IconButton>
              </Box>
            </Box>
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
                    <ButtonGroup variant='outlined' aria-label='outlined button group' style={{ width: 'inherit' }}>
                      <ToggleButtonGroup
                        value={state.formats}
                        onChange={handleFormat}
                        aria-label='text formatting'
                        size='small'
                      >
                        <ToggleButton value='bold' aria-label='bold'>
                          <FormatBoldIcon />
                        </ToggleButton>
                        <ToggleButton value='italic' aria-label='italic'>
                          <FormatItalicIcon />
                        </ToggleButton>
                        <ToggleButton>
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
                      </ToggleButtonGroup>
                      <TextField
                        type='number'
                        size='small'
                        label='font size'
                        inputProps={{ min: 10 }}
                        defaultValue={state.fontSize}
                        value={state.fontSize}
                        onChange={onChangeHandler}
                        name='fontSize'
                      />
                    </ButtonGroup>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={3}>
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
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label='Enter Customer Name'
                          placeholder='Customer Name'
                          name='customerName'
                          value={label.value}
                          size='small'
                          onChange={onChangeHandler}
                          multiline
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid>
          <Card variant='outlined' style={{ marginBlock: '10px' }}>
            <CardContent>
              <List component='nav' aria-label='main mailbox folders'>
                <ListItemButton selected={label.shape === 'Square'} onClick={event => handleListItemClick(event, 0)}>
                  <ListItemIcon>
                    <RectangleOutline />
                  </ListItemIcon>
                  <ListItemText primary='Square' />
                </ListItemButton>
                <ListItemButton selected={label.shape === 'Ellipse'} onClick={event => handleListItemClick(event, 1)}>
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
      </Grid>
    </Grid>
  )
}
