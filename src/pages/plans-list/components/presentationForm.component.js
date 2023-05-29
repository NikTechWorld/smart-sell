/* eslint-disable newline-before-return */
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { FaArrowAltCircleLeft, FaCalendarAlt } from 'react-icons/fa'
import CustomButton from 'src/@core/components/CustomButton'
import CustomInputField from 'src/@core/components/CustomInputField'
import planListStyles from 'styles/PlanList/index.styles'

export default function PresentationFormComponent({ handleAction }) {
  const classes = planListStyles()
  return (
    <div
      style={{
        position: 'relative'
      }}
    >
      <Typography className={classes.typo} variant='h4'>
        Family Health Optima Insurance Plan
      </Typography>
      <Typography variant='body2' mt={2}>
        Enter customer details
      </Typography>

      <CustomButton
        text={'Back'}
        icon={<FaArrowAltCircleLeft />}
        variant='contained'
        size='small'
        color='warning'
        style={{
          position: 'absolute',
          right: 0,
          top: 0
        }}
        actionCallBack={() => handleAction()}
      />

      <form className={classes.presentForm}>
        <CustomInputField
          label={'Name'}
          size='small'
          fullWidth
          startAdornment={
            <select
              style={{
                marginRight: 10,
                background: '#fff',
                border: 'none',
                outline: 'none'
              }}
            >
              <option>Dr.</option>
              <option>Mr.</option>
              <option>Mrs.</option>
            </select>
          }
        />
        <CustomInputField
          label={'ELDEST MEMBER DOB'}
          size='small'
          fullWidth
          endAdornment={
            <IconButton size='small'>
              <FaCalendarAlt />
            </IconButton>
          }
        />
        <CustomInputField label={'ELDEST MEMBER AGE'} fullWidth size='small' />
        <CustomInputField label={'GENDER'} fullWidth size='small' />
        <CustomInputField label={'PIN CODE'} fullWidth size='small' />
        <CustomInputField label={'PERIOD'} fullWidth size='small' />
        <CustomInputField label={'AMOUNT'} fullWidth size='small' />
        <CustomInputField label={'NO. OF ADULTS'} fullWidth size='small' />
        <CustomInputField label={'NO. OF CHILDRENS'} fullWidth size='small' />
        <CustomInputField
          label={'ADULTS DOB'}
          size='small'
          fullWidth
          endAdornment={
            <IconButton size='small'>
              <FaCalendarAlt />
            </IconButton>
          }
        />
        <CustomInputField label={'NUMBER OF PARENTS'} fullWidth size='small' />
        <div className={classes.presentActionBtn}>
          <CustomButton text={'Create Presentation'} fullWidth variant='contained' className='cpBtn' />
        </div>
      </form>
    </div>
  )
}
