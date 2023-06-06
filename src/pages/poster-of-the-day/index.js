// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import Gallery from 'src/layouts/gallary/Gallery'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

//
import { connect } from 'react-redux'
import * as posterActions from './../../state/reducers/poster/posterAction'
import { bindActionCreators } from '@reduxjs/toolkit'
import { Card, CardContent } from '@mui/material'
import SearchAndFilterComponent from '../pageComponents/search&filter'

const CardBasic = props => {
  const [state, setState] = useState(null)
  const router = useRouter()
  const { getPosterOfTheDay, setFavorite } = props.posterActions

  const handleClick = (e, item) => {
    router.push(`/poster-of-the-day/${item.id}`)
  }
  useEffect(() => {
    getPosterOfTheDay()
  }, [])

  useEffect(() => {
    setState(props.state.posterReducer)
  }, [props])

  const setIsFavorite = id => {
    setFavorite(id)
  }

  return (
    <>
      <SearchAndFilterComponent />
      <Card>
        {/* <CardContent> */}
        {state?.posters && (
          <Gallery imageList={state?.posters} onClickCallBack={handleClick} setIsFavorite={setIsFavorite} />
        )}
        {/* </CardContent> */}
      </Card>
    </>

    // <Grid container spacing={6}>
    //   <Grid item xs={10} sx={{ paddingBottom: 4 }}>
    //     <Typography variant='h5'>Poster of The Day</Typography>
    //   </Grid>
    //   <Grid item xs={2} sx={{ paddingBottom: 4 }}></Grid>

    // </Grid>
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
