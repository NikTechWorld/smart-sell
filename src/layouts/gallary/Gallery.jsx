import React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { IconButton, ImageListItemBar, useMediaQuery } from '@mui/material'
import { useTheme } from '@emotion/react'
import HeartOutline from 'mdi-material-ui/HeartOutline'
import Heart from 'mdi-material-ui/Heart'

export default function Gallery({ imageList, onClickCallBack }) {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <ImageList cols={matchDownMd ? 1 : 4} gap={10}>
      {imageList.map(item => (
        <ImageListItem key={item?.id} cols={item?.cols || 1}>
          <img
            src={item?.imgURL}
            alt={item?.title}
            loading='lazy'
            style={{ cursor: 'pointer' }}
            onClick={e => {
              e.preventDefault()
              onClickCallBack(e, item)
            }}
          />
          <ImageListItemBar
            sx={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
            }}
            // title={item.title}
            position='top'
            actionIcon={
              <IconButton sx={{ color: 'white' }} aria-label={`star ${item.title}`}>
                {item.isFavorite ? <Heart color={'error'} /> : <HeartOutline />}
              </IconButton>
            }
            actionPosition='left'
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
