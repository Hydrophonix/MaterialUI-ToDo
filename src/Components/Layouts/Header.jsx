import React from 'react'

import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import CreateDialog from '../Tasks/Dialog.jsx'

const styles = {
  flex: {
    flex: 1
  }
}

export default withStyles(styles)(({ classes, categories, onTaskCreate }) =>
  <AppBar position="static">
    <Toolbar>
      <Typography
        variant="headline"
        color="inherit"
        className={classes.flex}
      >
        ToDo Tasks Database
      </Typography>

      <CreateDialog
        categories={categories}
        onCreate={onTaskCreate}
      />
    </Toolbar>
  </AppBar>
)
