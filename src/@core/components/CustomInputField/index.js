/* eslint-disable newline-before-return */
import { TextField } from '@mui/material'
import React from 'react'
import customInputStyles from 'styles/components/CustomInputField/index.styles'
import classNames from 'classnames'

export default function CustomInputField({ value, variant, onChange, label, startAdornment, endAdornment, ...props }) {
  const classes = customInputStyles()
  return (
    <TextField
      value={value}
      variant={variant}
      label={label}
      onChange={onChange}
      className={
        props.type === 'textarea' ? classNames(props.className, 'text-area') : classNames(classes.root, props.className)
      }
      InputLabelProps={{
        shrink: false,
        className: classes.inputLabelNoShrink
      }}
      {...props}
      InputProps={{
        startAdornment: startAdornment,
        classes: {
          notchedOutline: classes.notchedOutline
        },
        endAdornment: endAdornment,
        ...props.InputProps
      }}
    />
  )
}
