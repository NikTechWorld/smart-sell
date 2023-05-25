// ** MUI Imports
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'

const CardSupport = ({ icon, heading, description, actionText, actionCallBack }) => {
  return (
    <Card>
      <CardContent
        sx={{
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
        }}
      >
        <Avatar
          sx={{ width: 50, height: 50, marginBottom: 2.25, color: 'common.white', backgroundColor: 'primary.main' }}
        >
          {/* <HelpCircleOutline sx={{ fontSize: '2rem' }} /> */}
          {icon}
        </Avatar>
        <Typography variant='h6' sx={{ marginBottom: 2.75 }}>
          {heading}
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 6 }}>
          {description}
        </Typography>
        <Button
          variant='contained'
          size='small'
          sx={{ padding: theme => theme.spacing(1.75, 5.5) }}
          onClick={actionCallBack}
        >
          {actionText}
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardSupport
