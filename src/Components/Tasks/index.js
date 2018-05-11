import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List, IconButton } from 'material-ui'
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/list'
import { Edit, Delete } from '@material-ui/icons'
import Form from './Form.jsx'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
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
<Grid container spacing={24}>
  <Grid item sm>
    <Paper style={styles.Paper}>
      {tasks.map(([category, tasks]) =>
        !selectedCategory || selectedCategory === category
          ? <Fragment key={category}>
              <Typography
                variant="headline"
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
                      <IconButton onClick={() => onSelectEdit(id)}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => onDelete(id)}>
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
  <Grid item sm>
    <Paper style={styles.Paper}>
      {editMode
        ? <Form
            task={selectedTask}
            categories={categories}
            onSubmit={onEdit}
          />
        : <Fragment>
            <Typography
              variant="display1"
            >
              {title}
            </Typography>
            <Typography
              variant="subheading"
              style={{marginTop: 20}}
            >
              {description}
            </Typography>
          </Fragment>
      }

    </Paper>
  </Grid>
</Grid>
