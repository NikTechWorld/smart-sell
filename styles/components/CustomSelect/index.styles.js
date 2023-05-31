import { makeStyles } from '@mui/styles'

const customSelectStyles = makeStyles(theme => ({
  inputLabelNoShrink: {
    textTransform: 'uppercase',
    fontSize: '12px',
    lineHeight: '16.39px',
    letterSpacing: '-0.004em',
    fontWeight: '500',
    transform: 'translate(2px, -25px) scale(1)'
  },
  root: {
    marginTop: 20,
    borderRadius: 7,
    '& .MuiInputBase-root': {
      background: '#fff'
    },
    '& .MuiFormLabel-root': {
      color: '#5b6a7e'
    }
  },
  notchedOutline: {
    boxShadow: 'none',
    background: '#fff',
    '& .MuiSelect-select': {
      border: '2px solid #E5E4E2'
    }
  },
  formControl: {
    [theme.breakpoints.down('md')]: {
      margin: '20px 0'
    }
  }
}))

export default customSelectStyles
