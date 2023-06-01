import { Popover } from '@mui/material'
import React, { Children } from 'react'

export default function CustomPopover({
  id,
  open,
  anchorEl,
  anchorOriginVertical,
  anchorOriginHorizontal,
  transformOriginVertical,
  transformOriginHorizontal,
  handlePopoverClose
}) {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: anchorOriginVertical,
        horizontal: anchorOriginHorizontal
      }}
      transformOrigin={{
        vertical: transformOriginVertical,
        horizontal: transformOriginHorizontal
      }}
      onClose={handlePopoverClose}
    >
      {Children}
    </Popover>
  )
}
