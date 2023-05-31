import { Avatar, Badge, Box, Divider, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { AccountOutline, Heart } from 'mdi-material-ui'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { styled } from '@mui/material/styles'

export default function FavoritePoster({ favoriteCount, data }) {
  // ** States
  const [anchorEl, setAnchorEl] = useState(null)

  // ** Hooks
  const router = useRouter()

  const handleDropdownOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = url => {
    if (url) {
      router.push(`/poster-of-the-day/${url}`)
    }
    setAnchorEl(null)
  }
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

  return (
    <Fragment>
      <Badge
        sx={{ marginInline: 2, cursor: 'pointer' }}
        badgeContent={favoriteCount}
        color='primary'
        className='heart-badge '
        onClick={handleDropdownOpen}
      >
        <Heart style={{ color: '#FF4C51', fontSize: '25px' }} />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, marginTop: 4 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {data.map(poster => (
          <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose(poster.id)}>
            <Box sx={styles}>
              <Avatar src={poster.imgURL} variant='square' /> &nbsp;
              {poster.title}
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  )
}
