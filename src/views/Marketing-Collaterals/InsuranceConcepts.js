import React, { useEffect, useState } from 'react'

import Grid from '@mui/material/Grid'
import Gallery from 'src/layouts/gallary/Gallery'
import { useRouter } from 'next/router'

export default function InsuranceConcepts({ data, setIsFavorite }) {
  const [state, setState] = useState(data)
  const router = useRouter()
  const handleClick = (e, item) => {
    router.push(`/poster-of-the-day/${item.id}`)
  }
  useEffect(() => {
    setState(data)
  }, [data])
  return (
    <Grid container spacing={6}>
      <Grid item xs={2} sx={{ paddingLeft: 5, paddingRight: 10 }}></Grid>
      <Gallery
        imageList={state.filter(img => img.tag === 'insurance')}
        onClickCallBack={handleClick}
        setIsFavorite={setIsFavorite}
      />
    </Grid>
  )
}
