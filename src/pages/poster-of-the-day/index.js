// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import Gallery from 'src/layouts/gallary/Gallery'
import { useRouter } from 'next/router'

const CardBasic = () => {
  const router = useRouter()
  const handleClick = (e, item) => {
    router.push(`/poster-of-the-day/${item.title}`)
  }
  return (
    <Grid container spacing={6}>
      <Grid item xs={10} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Poster of The Day</Typography>
      </Grid>
      <Grid item xs={2} sx={{ paddingBottom: 4 }}></Grid>
      <Gallery
        imageList={[
          {
            img: '/images/posters/1.jpg',
            title: '1'
          },
          {
            img: '/images/posters/2.jpg',
            title: '2'
          },
          {
            img: '/images/posters/3.jpg',
            title: '3'
          },
          {
            img: '/images/posters/1.jpg',
            title: '4',
            isFavorite: true
          },
          {
            img: '/images/posters/2.jpg',
            title: '5'
          },
          {
            img: '/images/posters/3.jpg',
            title: '6'
          }
        ]}
        onClickCallBack={handleClick}
      />
    </Grid>
  )
}

export default CardBasic
