import React, { useEffect, useState } from 'react'

import Grid from '@mui/material/Grid'
import Gallery from 'src/layouts/gallary/Gallery'
import { useRouter } from 'next/router'
import imgList from '../../pages/poster-of-the-day/Images.json'

export default function InsuranceConcepts() {
  const [state, setState] = useState([])
  const router = useRouter()
  const handleClick = (e, item) => {
    router.push(`/poster-of-the-day/${item.id}`)
  }
  useEffect(() => {
    let array = []
    for (let i = 1; i < 10; i++) {
      array.push({
        id: i,
        img: `/images/posters/${i}.jpg`,
        title: i,
        isFavorite: false
      })
    }
    setState(array)
  }, [])
  const setIsFavorite = (id, value) => {
    let updatedState = state.map(obj => (obj.id === id ? { ...obj, isFavorite: !value } : obj))
    setState(updatedState)
  }
  return (
    <Grid container spacing={6}>
      <Grid item xs={2} sx={{ paddingLeft: 5, paddingRight: 10 }}></Grid>
      <Gallery
        imageList={imgList.filter(img => img.tag === 'insurance')}
        onClickCallBack={handleClick}
        setIsFavorite={setIsFavorite}
      />
    </Grid>
  )
}
