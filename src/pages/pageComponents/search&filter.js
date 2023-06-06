import { IconButton, InputAdornment, debounce } from '@mui/material'
import { bindActionCreators } from '@reduxjs/toolkit'
import { Magnify } from 'mdi-material-ui'
import React from 'react'
import { FaFilter } from 'react-icons/fa'
import { connect } from 'react-redux'
import CustomInputField from 'src/@core/components/CustomInputField'
import CustomSelectField from 'src/@core/components/CustomSelectField'
import * as posterActions from 'src/state/reducers/poster/posterAction'
import searchHeaderStyles from 'styles/pages/pageComponents/search&filter.styles'

function SearchAndFilterComponent(props) {
  const classes = searchHeaderStyles()
  const { searchPoster, getPosterOfTheDay } = props.posterActions

  const callSearch = event => {
    searchPoster(event.target.value)
  }

  const searchPosterHandler = debounce(callSearch, 500)

  return (
    <div className={classes.container}>
      <CustomInputField
        size='small'
        className={classes.search}
        onChange={searchPosterHandler}
        startAdornment={
          <InputAdornment position='start'>
            <Magnify fontSize='small' />
          </InputAdornment>
        }
        placeholder='Search'
      />
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchAndFilterComponent)
