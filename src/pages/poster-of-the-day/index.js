// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import Gallery from 'src/layouts/gallary/Gallery'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const CardBasic = () => {
  const [state, setState] = useState([])
  const router = useRouter()
  const handleClick = (e, item) => {
    router.push(`/poster-of-the-day/${item.title}`)
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
      <Grid item xs={10} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Poster of The Day</Typography>
      </Grid>
      <Grid item xs={2} sx={{ paddingBottom: 4 }}></Grid>
      <Gallery imageList={state} onClickCallBack={handleClick} setIsFavorite={setIsFavorite} />
    </Grid>
  )
}

export default CardBasic
