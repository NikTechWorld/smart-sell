/* eslint-disable react/jsx-key */
import { Card, IconButton, Paper, Typography, useTheme } from '@mui/material'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import planListStyles from 'styles/PlanList/index.styles'

export default function PlanListComponent({ handleAction }) {
  const classes = planListStyles()
  const theme = useTheme()

  return (
    <div>
      <Paper className={classes.paper}>&nbsp;</Paper>
      <div className={classes.listContainer}>
        <Typography variant='h4' className={classes.typo}>
          Create Presentation
        </Typography>
        <Typography variant='body2' mt={2}>
          Build detailed and customised presentation to engage your clients
        </Typography>

        <div
          className={classes.cardContainer}
          style={{
            [theme.breakpoints.down('sm')]: {
              gridTemplateColumns: 'auto'
            }
          }}
        >
          {[
            'Star comprehensive health insurance',
            'Star Hospital cash Insurance Policy',
            'Senior citizen red carpet health Insurance',
            'Accident care individual Insurance Policy',
            'Family health optima',
            'Critical Illness plan',
            'Medi classic Insurance Policy (Individual)',
            'Star Women care plan',
            'Super Surplus Insurance Policy',
            'Star health Premier plan',
            'Young star Insurance Policy',
            'Star Health Assure Plan',
            'Diabetes Safe Insurance Policy'
          ].map((plan, idx) => (
            <Card
              className={classes.card}
              style={{
                [theme.breakpoints.down('sm')]: {
                  width: '100%'
                }
              }}
            >
              <Typography sx={{ fontSize: 14, width: 'calc(100% - 30px)' }}>{plan}</Typography>
              <IconButton className={classes.icon} size='small' color='primary' onClick={() => handleAction()}>
                <FaArrowRight />
              </IconButton>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
