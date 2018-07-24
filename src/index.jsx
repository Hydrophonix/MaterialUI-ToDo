import React from 'react'
import { render } from 'react-dom'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import {red, amber } from '@material-ui/core/colors'

import App from './Components/App.jsx'

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: amber.A400,
      light: amber[200],
      dark: amber[700]
    },
    type: 'dark'
  }
})

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'));
