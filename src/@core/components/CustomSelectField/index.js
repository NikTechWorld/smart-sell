import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import customSelectStyles from 'styles/components/CustomSelect/index.styles'

export default function CustomSelectField({ label, helperText, items, fullWidth, mt = '20px', ...props }) {
  const classes = customSelectStyles()

  return (
    <FormControl sx={{ minWidth: 120, mt: mt }} fullWidth={fullWidth} className={classes.formControl}>
      <InputLabel id='demo-simple-select-helper-label' className={classes.inputLabelNoShrink}>
        {label}
      </InputLabel>
      <Select {...props} className={classes.notchedOutline}>
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        {items.map((item, idx) => (
          <MenuItem value={item.value} key={idx}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}
