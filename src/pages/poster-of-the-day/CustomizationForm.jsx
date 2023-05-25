// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import ButtonGroup from '@mui/material/ButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { styled, useTheme } from '@mui/material/styles'

// ** Icons Imports
import FormatBoldIcon from 'mdi-material-ui/FormatBold'
import FormatItalicIcon from 'mdi-material-ui/FormatItalic'
import { FormatColorText } from 'mdi-material-ui'
import { FormControl, InputLabel, MenuItem, Popover, Select, ThemeProvider, createTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** helper Imports
import { pSBC } from './helper'

export default function CustomizationForm({ id }) {
  // ** Hook
  const theme = useTheme()

  const [state, setState] = useState({
    customerName: '',
    greetings: 'Dear, ',
    formats: [],
    fontSize: 18,
    shape: '',
    image: { height: '0px', width: '0px' }
  })
  useEffect(() => {
    const myImage = new Image()
    myImage.src = `http://localhost:3000/images/posters/${id}.jpg`
    myImage.onload = img => {
      if (img) {
        let width = img?.target?.width
        let height = img?.target?.height
        console.log(height, width)
        setState({ image: { height, width } })
      }
    }
  }, [])

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

  return (
    <Grid
      container
      spacing={2}
      direction={useMediaQuery(theme.breakpoints.down('sm')) ? 'column-reverse' : ''}
      style={{ height: 'inherit' }}
    >
      <Grid item xs={8} textAlign={'center'} alignItems={'center'} style={{ height: 'inherit' }}>
        <div>s</div>
        {/* <div className='container' style={{ height: 'inherit' }}>
          <div></div>
          <img
            src={`/images/posters/${id}.jpg`}
            alt='Snow'
            style={{
              maxWidth: '100%',
              height: 'inherit'
            }}
          />
          <div className='bottom-left'>Bottom Left</div>
          <DivStyled className={`top-left parallelogram-one-side ${state.shape}`}>
            {state.greetings + ' ' + state.customerName}
          </DivStyled>
          <div className='top-right'>Top Right</div>
          <DivStyled className={'bottom-right'}>XYZ Seller (Agent)</DivStyled>
          <div className='centered'>Centered</div>
        </div> */}
      </Grid>
      <Grid item xs={4}>
        <Grid>
          <Card>
            <CardHeader title='Customize Poster' titleTypographyProps={{ variant: 'h6' }} />
            <CardContent>
              <form onSubmit={e => e.preventDefault()}>
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
                            onClose={e => setAnchorEl(null)}
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
                        inputProps={{ min: 18 }}
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
          <Card>
            {/* <CardHeader title={<ShapePlusOutline />} titleTypographyProps={{ variant: 'h6' }} /> */}
            {/* <Square /> */}
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}
