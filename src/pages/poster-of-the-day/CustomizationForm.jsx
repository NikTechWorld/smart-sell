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
import { FormatColorText, Download, PrinterEye, Heart, RectangleOutline, ShareVariant } from 'mdi-material-ui'
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
  Select,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  ThemeProvider,
  createTheme
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** helper Imports
// import { pSBC } from './helper'

export default function CustomizationForm({ id }) {
  // ** Hook
  const theme = useTheme()
  const imageDivRef = useRef(null)

  const [state, setState] = useState({
    customerName: '',
    greetings: 'Dear, ',
    formats: [],
    fontSize: 10,
    shape: ''
  })
  const [object, setObject] = useState({})
  const [objects, setObjects] = useState([])

  const [color, setColor] = useState('')

  const onChangeHandler = event => {
    if (event.target.name !== undefined) setState({ ...state, [event.target.name]: event.target.value })
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

  // const [speedDial, setSpeedDial] = useState(false)
  // const speedDialHandleOpen = () => setSpeedDial(true)
  // const speedDialHandleClose = () => setSpeedDial(false)
  // const actions = [
  //   { icon: <PrinterEye />, name: 'Preview ' },
  //   { icon: <Download />, name: 'Download' }
  // ]

  const handleOnDragStart = event => {
    // event.preventDefault()
    event.stopPropagation()
    const { clientX, clientY } = event
    setObject({ clientX, clientY })

    // Calculate the position of the click relative to the initial position of the element
    // event.dataTransfer.setData('text/plain', JSON.stringify({ id: event.target.id, innerHtml: event.target.innerHTML }))
  }

  const handleDragEnter = event => {
    event.preventDefault()
    event.stopPropagation()
  }

  const handleDragLeave = event => {
    event.preventDefault()
    event.stopPropagation()
  }

  const handleDragOver = event => {
    event.preventDefault()
    event.stopPropagation()
  }

  const handleDrop = event => {
    event.preventDefault()
    event.stopPropagation()

    // let array = []
    // const data = event.dataTransfer.getData('text/plain').toString()
    // const { clientX, clientY, target } = event
    // console.log(data)
    // // Calculate the position of the click relative to the top-left corner of the element
    // if (state.control) array = state.control
    // if (data.id === 'source')
    //   array.push({
    //     xPosition: clientX - dragStartState.left,
    //     yPosition: clientY - dragStartState.top,
    //     innerHtml: data.innerHtml
    //   })
    // else
    //   array[data.id] = {
    //     xPosition: clientX - dragStartState.left,
    //     yPosition: clientY - dragStartState.top,
    //     innerHtml: data.innerHtml
    //   }
    // setObjects([...objects, array])
  }

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
            <div
              className='container'
              ref={imageDivRef}
              onDrop={event => handleDrop(event)}
              onDragOver={event => handleDragOver(event)}
              onDragEnter={event => handleDragEnter(event)}
              onDragLeave={event => handleDragLeave(event)}
            >
              <img
                src={`/images/posters/${id}.jpg`}
                alt='Snow'
                style={{
                  maxWidth: '100%',
                  height: 'inherit'
                }}
              />
              <Draggable bounds='parent'>
                <DivStyled
                  className={`top-left parallelogram-one-side ${state.shape}`}
                  draggable={true}
                  onDragStart={handleOnDragStart}
                >
                  {state.greetings + ' ' + state.customerName}
                </DivStyled>
              </Draggable>
            </div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
                <IconButton aria-label='like'>
                  <Heart />
                </IconButton>
              </Box>
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
        {/* <div
          className='container'
          ref={imageDivRef}
          onDrop={event => handleDrop(event)}
          onDragOver={event => handleDragOver(event)}
          onDragEnter={event => handleDragEnter(event)}
          onDragLeave={event => handleDragLeave(event)}
        >
          <img
            src={`/images/posters/${id}.jpg`}
            alt='Snow'
            style={{
              maxWidth: '100%',
              height: 'inherit'
            }}
          />
          <DivStyled
            className={`top-left parallelogram-one-side ${state.shape}`}
            draggable={true}
            onDragStart={handleOnDragStart}
          >
            {state.greetings + ' ' + state.customerName}
          </DivStyled>
        </div>  */}
        {/* <SpeedDial
          ariaLabel='SpeedDial controlled open example'
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          onClose={speedDialHandleClose}
          onOpen={speedDialHandleOpen}
          open={speedDial}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={async () => {
                const dataUrl = await htmlToImage.toPng(imageDivRef.current)
                const link = document.createElement('a')
                link.download = `${id}.png`
                link.href = dataUrl
                link.click()
              }}
            />
          ))}
        </SpeedDial> */}
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
                          <Select
                            labelId='greetings'
                            id='greetings-id'
                            value={state.greetings}
                            label='Greetings'
                            onChange={onChangeHandler}
                            size='small'
                            name='greetings'
                            fullWidth
                          >
                            <MenuItem value='Dear, '>Dear, </MenuItem>
                            <MenuItem value='Greetings, '>Greetings, </MenuItem>
                            <MenuItem value='Hi, '>Hi, </MenuItem>
                            <MenuItem value='Hello, '>Hello, </MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label='Enter Customer Name'
                          placeholder='Customer Name'
                          name='customerName'
                          value={state.customerName}
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
                <ListItemButton selected={true} onClick={event => handleListItemClick(event, 0)}>
                  <ListItemIcon>
                    <RectangleOutline />
                  </ListItemIcon>
                  <ListItemText primary='Square' />
                </ListItemButton>
                <ListItemButton onClick={event => handleListItemClick(event, 1)}>
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
