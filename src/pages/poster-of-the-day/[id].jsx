import { useRouter } from 'next/router'
import React from 'react'
import CustomizationForm from './CustomizationForm'

export default function Personalize() {
  const router = useRouter()
  const { id } = router.query

  return <CustomizationForm id={id} />
}
