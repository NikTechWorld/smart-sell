/* eslint-disable newline-before-return */
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { FaArrowAltCircleLeft, FaCalendarAlt } from 'react-icons/fa'
import CustomButton from 'src/@core/components/CustomButton'
import CustomInputField from 'src/@core/components/CustomInputField'
import planListStyles from 'styles/PlanList/index.styles'
import PresentationSubComponent from './presentation.pdf'
import CustomSelectField from 'src/@core/components/CustomSelectField'

export default function PresentationFormComponent({ handleAction }) {
  const classes = planListStyles()
  const [isCreated, setCreated] = React.useState(false)
  const [formState, setFormState] = React.useState({})
  return (
    <div
      style={{
        position: 'relative'
      }}
    >
      {isCreated ? (
        <PresentationSubComponent displayValue={formState} />
      ) : (
        <>
          <Typography className={classes.typo} variant='h4'>
            Family Health Optima Insurance Plan
          </Typography>
          <Typography variant='body2' mt={2}>
            Enter customer details
          </Typography>

          {/* <CustomButton
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
      /> */}

          <form
            className={classes.presentForm}
            onChange={e => {
              console.log(e.target.value, e.target.name)
              setFormState({
                ...formState,
                [e.target.name]: e.target.value
              })
            }}
            onSubmit={e => {
              e.preventDefault()
              setCreated(true)
            }}
          >
            <CustomInputField
              label={'Full Name'}
              name='fullName'
              size='small'
              fullWidth
              startAdornment={
                <select
                  name='salutation'
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
              name='eldest_member_age'
              type='number'
              label={'ELDEST MEMBER AGE'}
              fullWidth
              size='small'
            />
            <CustomInputField label={'ELDEST MEMBER DOB'} name='eldest_member_dob' type='date' size='small' fullWidth />
            <CustomSelectField
              name='gender'
              label={'GENDER'}
              fullWidth
              size='small'
              items={[
                {
                  name: 'Male',
                  value: 'M'
                },
                {
                  name: 'Female',
                  value: 'F'
                },
                {
                  name: 'Other',
                  value: 'O'
                }
              ]}
            />
            <CustomInputField name='pincode' label={'PIN CODE'} type='number' fullWidth size='small' />
            <CustomSelectField
              label={'PERIOD'}
              fullWidth
              name='period'
              size='small'
              items={[
                {
                  name: 1,
                  value: 1
                },
                {
                  name: 2,
                  value: 2
                },
                {
                  name: 3,
                  value: 3
                }
              ]}
            />
            <CustomInputField name='amount' label={'AMOUNT'} type='number' fullWidth size='small' />
            <CustomSelectField
              label={'NO. OF ADULTS'}
              fullWidth
              name='no_of_adults'
              size='small'
              items={[
                {
                  name: 1,
                  value: 1
                },
                {
                  name: 2,
                  value: 2
                },
                {
                  name: 3,
                  value: 3
                }
              ]}
            />
            <CustomSelectField
              label={'NO. OF CHILDRENS'}
              fullWidth
              name='no_of_childrens'
              size='small'
              items={[
                {
                  name: 1,
                  value: 1
                },
                {
                  name: 2,
                  value: 2
                },
                {
                  name: 3,
                  value: 3
                }
              ]}
            />
            <CustomInputField label={'ADULTS DOB'} name='adults_dob' size='small' fullWidth type='date' />
            <CustomSelectField
              label={'NO. OF PARENTS'}
              name='no_of_parents'
              fullWidth
              size='small'
              items={[
                {
                  name: 1,
                  value: 1
                },
                {
                  name: 2,
                  value: 2
                },
                {
                  name: 3,
                  value: 3
                }
              ]}
            />
            <div className={classes.presentActionBtn}>
              <CustomButton
                type='submit'
                text={'Create Presentation'}
                fullWidth
                variant='contained'
                className='cpBtn'
              />
            </div>
          </form>
        </>
      )}
    </div>
  )
}
