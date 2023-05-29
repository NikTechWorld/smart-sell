import React, { useEffect, useState } from 'react'
// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import Gallery from 'src/layouts/gallary/Gallery'
import { useRouter } from 'next/router'
import { Festival } from '@mui/icons-material';import imgList from '../../pages/poster-of-the-day/Images.json'


const Festivals = () => {
  const [state, setState] = useState([])
  const router = useRouter()
  const handleClick = (e, item) => {
    router.push(`/poster-of-the-day/${item.id}`)
  }
  // useEffect(() => {
  //   let array = []
  //   for (let i = 1; i <= 9 ; i++) {
  //     array.push({
  //       id: i,
  //       img: `/images/posters/${i}.jpg`,
  //       title: i,
  //       isFavorite: false
  //     })
  //   }
  //   setState(array)
  // }, [])
  const setIsFavorite = (id, value) => {
    let updatedState = state.map(obj => (obj.id === id ? { ...obj, isFavorite: !value } : obj))
    setState(updatedState)
  }

  const [query, setQuery] = useState("");
  return (
    <Grid container spacing={6}>
      <Grid item xs={2} sx={{ paddingLeft: 5, paddingRight: 10 }}></Grid>
      <Gallery imageList={imgList.filter((img) => img.tag === 'festival')} onClickCallBack={handleClick} setIsFavorite={setIsFavorite} />
    </Grid>
  )
}

export default Festivals
