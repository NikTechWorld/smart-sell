/* eslint-disable react/jsx-key */
import { Card, IconButton, Paper, Typography, useTheme } from '@mui/material'
import React from 'react'
import planListStyles from '../../../styles/PlanList/index.styles'
import { FaArrowRight } from 'react-icons/fa'
import PlanListComponent from './components/planList.component'
import PresentationFormComponent from './components/presentationForm.component'

export default function PlansList() {
  const classes = planListStyles()
  const [isNavigateToForm, setNavigateToForm] = React.useState(false)

  return (
    <div className={classes.container}>
      {isNavigateToForm ? (
        <PresentationFormComponent handleAction={() => setNavigateToForm(false)} />
      ) : (
        <PlanListComponent handleAction={() => setNavigateToForm(true)} />
      )}
    </div>
  )
}
