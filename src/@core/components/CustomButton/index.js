/* eslint-disable newline-before-return */
import { Button } from '@mui/material'
import React from 'react'
import customButtonStyles from 'styles/components/CustomButton/index.styles'

export default function CustomButton({ icon, text, actionCallBack, children, ...props }) {
  const classes = customButtonStyles()
  return (
    <Button onClick={actionCallBack} className={classes.root} {...props}>
      {icon}
      {text || children}
    </Button>
  )
}
