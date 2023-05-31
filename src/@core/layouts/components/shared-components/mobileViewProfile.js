import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { FaSignOutAlt, FaUser, FaUserAlt, FaUserAltSlash, FaUserCircle } from 'react-icons/fa'
import { LogoutVariant } from 'mdi-material-ui'
import { Box, IconButton } from '@mui/material'

// ** MUI Imports
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import CogOutline from 'mdi-material-ui/CogOutline'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import { useRouter } from 'next/router'
import classNames from 'classnames'

// ** Styled Components
const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}))

export default function MobileViewProfileMenu({ classes }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const styles = {
    py: 2,
    px: 4,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: 'text.primary',
    textDecoration: 'none',
    '& svg': {
      fontSize: '1.375rem',
      color: 'text.secondary'
    }
  }

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const router = useRouter()

  const handleDropdownClose = url => {
    if (url) {
      router.push(url)
    }
    setAnchorEl(null)
  }

  return (
    <div
      className={classes.ul}
      style={{
        position: 'relative'
      }}
    >
      <p className={classNames(classes.li, classes.profileContainer)}>
        <Badge
          overlap='circular'
          sx={{ ml: 2, cursor: 'pointer' }}
          badgeContent={<BadgeContentSpan />}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Avatar alt='John Doe' sx={{ width: 40, height: 40 }} src='/images/avatars/1.png' />
        </Badge>
        <div>
          <Typography
            variant='h6'
            style={{
              lineHeight: 'normal'
            }}
          >
            Hi, Sid
          </Typography>
          <Typography variant='caption'>Welcome</Typography>
        </div>
        <IconButton
          onClick={() => handleDropdownClose('/pages/login')}
          style={{
            position: 'absolute',
            right: 20
          }}
        >
          <FaSignOutAlt />
        </IconButton>
      </p>
    </div>
  )
}
