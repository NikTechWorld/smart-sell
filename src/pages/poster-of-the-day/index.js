// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import Gallery from 'src/layouts/gallary/Gallery'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import imgList from './Images.json'

//
import { connect } from 'react-redux'
import * as posterActions from './../../state/reducers/poster/posterAction'
import { bindActionCreators } from '@reduxjs/toolkit'
const CardBasic = props => {
  const [state, setState] = useState({})
  const router = useRouter()
  const handleClick = (e, item) => {
    router.push(`/poster-of-the-day/${item.id}`)
  }
  useEffect(() => {
    props.posterActions.getPosterOfTheDay()
  }, [])
  useEffect(() => {
    setState(props.state.posterReducer)
  }, [props])
  const setIsFavorite = (id, value) => {
    let updatedState = state.map(obj => (obj.id === id ? { ...obj, isFavorite: !value } : obj))
    setState(updatedState)
  }
  console.log(state.poster)
  return (
    <Grid container spacing={6}>
      <Grid item xs={10} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Poster of The Day</Typography>
      </Grid>
      <Grid item xs={2} sx={{ paddingBottom: 4 }}></Grid>
      {state?.posters && (
        <Gallery imageList={state?.posters} onClickCallBack={handleClick} setIsFavorite={setIsFavorite} />
      )}
    </Grid>
  )
}

function mapStateToProps(state) {
  return { state }
}
function mapDispatchToProps(dispatch) {
  return {
    posterActions: bindActionCreators(posterActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardBasic)
