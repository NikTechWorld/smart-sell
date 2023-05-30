/* eslint-disable react/jsx-key */
// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu'
import Magnify from 'mdi-material-ui/Magnify'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import VerticalNavHeader from 'src/@core/layouts/components/vertical/navigation/VerticalNavHeader'
import Link from 'src/@core/theme/overrides/link'
import CustomInputField from 'src/@core/components/CustomInputField'
import { SwipeableDrawer, styled } from '@mui/material'
import navigation from 'src/navigation/vertical'
import { useRouter } from 'next/router'
import React from 'react'
import { makeStyles } from '@mui/styles'
import classNames from 'classnames'
import { debounce } from 'src/configs/helper'
import * as posterActions from 'src/state/reducers/poster/posterAction'
import { bindActionCreators } from '@reduxjs/toolkit'
import { connect } from 'react-redux'
// import { searchPoster } from 'src/state/reducers/poster/posterAction'

const useStyles = makeStyles(theme => ({
  drawer: {
    '& .MuiDrawer-paperAnchorLeft': {
      width: '30%',
      [theme.breakpoints.down('md')]: {
        width: '80%'
      }
    }
  },
  ul: {
    padding: 0,
    margin: 0,
    webkitUserSelect: 'none' /* Safari */,
    msUserSelect: 'none' /* IE 10 and IE 11 */,
    userSelect: 'none',
    position: 'relative',
    '& .active': {
      color: theme.palette.primary.dark,
      fontWeight: 'bolder',
      borderRight: `4px solid ${theme.palette.primary.dark}`,
      background: theme.palette.primary.transparent
    }
  },
  li: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    fontSize: 14,
    color: '#000',
    listStyle: 'none',
    height: '60px',
    marginRight: 0,
    padding: '0 10px',
    '& :hover': {
      color: theme.palette.primary.dark
    }
  }
}))

const NavListWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  '& ul': {
    padding: 0,
    margin: 0,
    webkitUserSelect: 'none' /* Safari */,
    msUserSelect: 'none' /* IE 10 and IE 11 */,
    userSelect: 'none',
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },

  '& img': {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  '& li:hover': {
    color: theme.palette.primary.dark
  },
  '& li': {
    display: 'inline-block',
    cursor: 'pointer',
    fontSize: 14,
    color: '#000',
    listStyle: 'none',
    height: '60px',
    lineHeight: '65px',
    marginRight: 0,
    padding: '0 10px'
  },
  '& .active': {
    color: theme.palette.primary.dark,
    fontWeight: 'bolder',
    borderBottom: `2px solid ${theme.palette.primary.dark}`
  }
}))

const AppBarContent = props => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props
  let navList = navigation()
  const classes = useStyles()

  // ** Hook
  const hiddenSm = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const routes = useRouter()
  const [isOpen, setOpen] = React.useState(false)
  const { searchPoster, getPosterOfTheDay } = props.posterActions
  const callSearch = event => {
    searchPoster(event.target.value)
  }
  const searchPosterHandler = debounce(callSearch, 500)
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {settings.hidden ? (
          <>
            {' '}
            <img
              src='https://vo-uat.starhealth.in/static/star-health-logo.png'
              width={150}
              onClick={() => {
                routes.push('/')
                setOpen(false)
              }}
              style={{
                padding: '0px 15px',
                cursor: 'pointer',
                paddingLeft: 0
              }}
              alt='not-found'
            />
          </>
        ) : hidden ? (
          <>
            <IconButton
              color='inherit'
              onClick={() => {
                setOpen(true)
              }}
              sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
            >
              <Menu />
            </IconButton>
            <SwipeableDrawer anchor={'left'} open={isOpen} onClose={() => setOpen(false)} className={classes.drawer}>
              <img
                src='https://vo-uat.starhealth.in/static/star-health-logo.png'
                width={150}
                onClick={() => {
                  routes.push('/')
                  setOpen(false)
                }}
                style={{
                  padding: '0px 15px',
                  margin: '5vh auto',
                  marginTop: '2vh',
                  cursor: 'pointer',
                  paddingLeft: 0
                }}
                alt='not-found'
              />
              <ul className={classes.ul}>
                {navList.map((navItem, idx) => (
                  <li
                    key={idx}
                    className={routes.pathname.includes(navItem.path) ? classNames(classes.li, 'active') : classes.li}
                    onClick={() => {
                      routes.push(navItem.path)
                      setOpen(false)
                    }}
                  >
                    <navItem.icon /> {navItem.title}
                  </li>
                ))}
              </ul>
            </SwipeableDrawer>
          </>
        ) : null}
        {!settings.hidden && (
          <NavListWrapper>
            <img
              src='https://vo-uat.starhealth.in/static/star-health-logo.png'
              width={150}
              onClick={() => {
                routes.push('/')
                setOpen(false)
              }}
              style={{
                padding: '0px 15px',
                cursor: 'pointer',
                paddingLeft: 0
              }}
              alt='not-found'
            />

            <ul>
              {navList.map((navItem, idx) => (
                <li
                  key={idx}
                  className={routes.pathname.includes(navItem.path) ? 'active' : ''}
                  onClick={() => {
                    routes.push(navItem.path)
                  }}
                >
                  {navItem.title}
                </li>
              ))}
            </ul>
          </NavListWrapper>
        )}
      </Box>
      <Box className='action-center'></Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        {/* {hiddenSm ? null : (
          <Box
            component='a'
            target='_blank'
            rel='noreferrer'
            sx={{ mr: 4, display: 'flex' }}
            href='https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free'
          >
            <img
              height={24}
              alt='github stars'
              src='https://img.shields.io/github/stars/themeselection/materio-mui-react-nextjs-admin-template-free?style=social'
            />
          </Box>
        )} */}
        <CustomInputField
          size='small'
          style={{
            marginTop: 0
          }}
          onChange={searchPosterHandler}
          startAdornment={
            <InputAdornment position='start'>
              <Magnify fontSize='small' />
            </InputAdornment>
          }
        />
        {/* <ModeToggler settings={settings} saveSettings={saveSettings} /> */}
        <NotificationDropdown />
        <UserDropdown />
      </Box>
    </Box>
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
export default connect(mapStateToProps, mapDispatchToProps)(AppBarContent)
