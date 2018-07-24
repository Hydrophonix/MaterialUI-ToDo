import React, { Fragment } from 'react'
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import Form from './Form.jsx'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 5,
    height: 500,
    overflowY: 'auto'
  }
}

export default ({
  tasks,
  categories,
  editMode,
  onSelect,
  onSelectEdit,
  onDelete,
  onEdit,
  selectedCategory,
  selectedTask,
  selectedTask: {
    id,
    title = 'Welcome!',
    description = 'Please select a task from the list on the left'
  }
}) =>
<Grid container>
  <Grid item xs={12} sm={6}>
    <Paper style={styles.Paper}>
      {tasks.map(([category, tasks]) =>
        !selectedCategory || selectedCategory === category
          ? <Fragment key={category}>
              <Typography
                variant="headline"
                color="secondary"
                style={{textTransform: 'capitalize'}}
              >
                {category}
              </Typography>
              <List component="ul">
                {tasks.map(({ id, title }) =>
                  <ListItem
                    key={id}
                    button
                    onClick={() => onSelect(id)}
                  >
                    <ListItemText primary={title} />
                    <ListItemSecondaryAction>
                      <IconButton color="primary" onClick={() => onSelectEdit(id)}>
                        <Edit />
                      </IconButton>
                      <IconButton color="primary" onClick={() => onDelete(id)}>
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )}
              </List>
            </Fragment>
          : null
      )}
    </Paper>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Paper style={styles.Paper}>
      <Typography
        variant="display1"
        color="secondary"
      >
        {title}
      </Typography>
      {editMode
        ? <Form
            key={id}
            task={selectedTask}
            categories={categories}
            onSubmit={onEdit}
          />
        : <Typography
            variant="subheading"
            style={{marginTop: 20}}
          >
            {description}
          </Typography>
      }

    </Paper>
  </Grid>
</Grid>
