import { withRouter } from 'next/router'
import React, { useEffect } from 'react'
import CustomizationForm from './CustomizationForm'

function Personalize({ router }) {
  return <CustomizationForm id={router.query.id} />
}

export default withRouter(Personalize)
