import { makeStyles } from '@mui/styles'

const planListStyles = makeStyles(theme => {
  return {
    paper: {
      background: '#d9d9d9',
      padding: 20,
      borderRadius: 10,
      height: '20vh'
    },
    container: {
      margin: 'auto'

      // maxWidth: "60rem",
    },

    icon: {
      position: 'absolute',
      right: 15,
      top: 11
    },

    listContainer: {
      marginTop: 15
    },

    presentForm: {
      marginTop: 30,
      display: 'grid',
      rowGap: 20,
      columnGap: '6rem',
      [theme.breakpoints.down('md')]: {
        display: 'block',
        '& .MuiTextField-root': {
          marginBottom: 20
        }
      }
    },

    presentActionBtn: {
      gridColumn: '1 / span 2',
      display: 'flex',
      justifyContent: 'center',
      marginTop: 20,
      '& .cpBtn': {
        width: '45%',
        textTransform: 'capitalize',
        [theme.breakpoints.down('md')]: {
          width: '100%'
        }
      }
    },

    cardContainer: {
      marginTop: 20,
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      rowGap: 20,
      columnGap: 60,

      [theme.breakpoints.down('md')]: {
        gridTemplateColumns: 'auto'
      }
    },

    card: {
      position: 'relative',
      cursor: 'pointer',
      padding: '15px',
      textAlign: 'center',

      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    },

    typo: {
      fontWeight: 800,
      fontSize: 22
    }
  }
})

export default planListStyles
