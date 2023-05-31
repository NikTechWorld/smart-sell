import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import * as React from 'react'
import CustomInputField from '../CustomInputField'
import { IconButton } from '@mui/material'
import { FaCalendarAlt } from 'react-icons/fa'
import { DateField } from '@mui/x-date-pickers'

export default function CustomDatePicker({ name, changeCallBack, maxDate, minDate, ...props }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(null)

  const handleChange = newValue => {
    setValue(newValue)
    changeCallBack(name, newValue)
  }
  React.useEffect(() => {
    setValue(props.value)
  }, [props.value])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={['day', 'year', 'month']}
        open={open}
        disabled={props.disabled}
        maxDate={new Date(maxDate)}
        minDate={new Date(minDate)}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        label='Date desktop'
        inputFormat='dd/MMM/yyyy'
        value={value}
        onChange={e => {
          handleChange(e)
        }}
      />
    </LocalizationProvider>
  )
}
