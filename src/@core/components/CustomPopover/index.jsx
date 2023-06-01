import * as React from 'react'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function BasicPopover({ children, content }) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  console.log(content)
  return (
    <div>
      <div aria-describedby={id} variant='contained' onClick={handleClick}>
        {children}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
      >
        {content}
      </Popover>
    </div>
  )
}
