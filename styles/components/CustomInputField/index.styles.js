import { makeStyles } from '@mui/styles'

const customInputStyles = makeStyles(theme => ({
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
      background: '#fff !important'
    },
    '& .MuiFormLabel-root': {
      color: '#5b6a7e'
    }
  },
  notchedOutline: {
    borderWidth: '2px',
    boxShadow: 'none'
  }
}))

export default customInputStyles
