import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List } from 'material-ui'
import { ListItem, ListItemText } from 'material-ui/list'
// import LeftPane from './LeftPane.jsx'
// import RightPane from './RightPane.jsx'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
}

export default ({ tasks }) =>
<Grid container spacing={24}>
  <Grid item sm>
    <Paper style={styles.Paper}>
      {tasks.map(([categoty, tasks], i) =>
        <Fragment
          key={i}
        >
          <Typography
            variant="headline"
            style={{textTransform: 'capitalize'}}
          >
            {categoty}
          </Typography>
          <List component="ul">
            {tasks.map(({ title }, i) =>
              <ListItem button key={i}>
                <ListItemText primary={title} />
              </ListItem>
            )}
          </List>
        </Fragment>
      )}
    </Paper>
  </Grid>
  <Grid item sm>
    <Paper style={styles.Paper}>
      <Typography
        variant="display1"
      >
        Welcome!
      </Typography>
      <Typography
        variant="subheading"
        style={{marginTop: 20}}
      >
        Please select a task from the list on the left
      </Typography>
    </Paper>
  </Grid>
</Grid>
