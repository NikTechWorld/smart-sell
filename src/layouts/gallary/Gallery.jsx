import React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { IconButton, ImageListItemBar, useMediaQuery } from '@mui/material'
import { useTheme } from '@emotion/react'
import HeartOutline from 'mdi-material-ui/HeartOutline'
import Heart from 'mdi-material-ui/Heart'

export default function Gallery({ imageList, onClickCallBack, setIsFavorite }) {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'))
  console.log(imageList)

  return (
    <ImageList cols={matchDownMd ? 1 : 5} gap={10}>
      {imageList.map((item, index) => (
        <ImageListItem key={item?.img + index} cols={item?.cols || 1}>
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
            position='top'
            actionIcon={
              <IconButton
                sx={{ color: 'white' }}
                aria-label={`star ${item.title}`}
                onClick={e => {
                  e.preventDefault()
                  setIsFavorite(item.id, item.isFavorite)
                }}
              >
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
