// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <Typography sx={{ mr: 2, fontSize: '10pt', textAlign: 'center' }}>
      {`© ${new Date().getFullYear()} - `}
      <Link target='_blank' href='https://www.starhealth.in/'>
        https://www.starhealth.in/
      </Link>
    </Typography>
  )
}

export default FooterContent
