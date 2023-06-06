import { makeStyles } from '@mui/styles'

const searchHeaderStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  search: {
    marginTop: 0,
    width: '40%',
    '& .MuiInputBase-root': {
      background: '#fff'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  }
}))

export default searchHeaderStyles
