import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CreateDialog from '../Tasks/Dialog.jsx'

export default ({ categories, onTaskCreate }) =>
  <AppBar position="static">
    <Toolbar>
      <Typography
        variant="headline"
        color="inherit"
        style={{flex: 1}}
      >
        ToDo Tasks Database
      </Typography>

      <CreateDialog
        categories={categories}
        onCreate={onTaskCreate}
      />
    </Toolbar>
  </AppBar>
