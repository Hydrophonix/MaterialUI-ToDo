import React, { Component, Fragment } from 'react'
import { Add } from '@material-ui/icons'
import { Button, Dialog, TextField, Select } from 'material-ui'
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import { FormControl } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  FormControl: {
    width: 500
  }
})

export default withStyles(styles)(class extends Component {
  state ={
    open: false,
    task: {
      title: '',
      description: '',
      category: ''
    }
  }

  handleToggle = () =>
    this.setState(({ open }) => ({
      open: !open
    }))

  handleChange = name => ({ target: { value } }) =>
    this.setState({
      task: {
        ...this.state.task,
        [name]: value
      }
    })

  handleSubmit = () => {
    const { task } = this.state

    this.props.onCreate({
      ...task,
      id: task.title.toLocaleLowerCase().replace(/ /g, '-')
    })

    this.setState({
      open: false,
      task: {
        title: '',
        description: '',
        category: ''
      }
    })
  }

  render() {
    const { open, task: { title, description, category } } = this.state,
          { classes, categories } = this.props

    return(
      <Fragment>
        <Button
          mini
          variant="fab"
          onClick={this.handleToggle}
        >
          <Add/>
        </Button>

        <Dialog
          open={open}
          onClose={this.handleToggle}
        >
          <DialogTitle id="form-dialog-title">
            Create a new Task
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the from below
            </DialogContentText>
            <form>
              <TextField
                className={classes.FormControl}
                label="Title"
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
              />
              <br/>
              <FormControl className={classes.FormControl}>
                <InputLabel htmlFor="category">
                  Category
                </InputLabel>
                <Select
                  value={category}
                  onChange={this.handleChange('category')}
                >
                  {categories.map(item =>
                    <MenuItem
                      key={item}
                      value={item}
                    >
                      {item}
                    </MenuItem>
                  )}
                </Select>
              </FormControl>
              <br/>
              <TextField
                className={classes.FormControl}
                multiline
                rows="4"
                label="Description"
                value={description}
                onChange={this.handleChange('description')}
                margin="normal"
              />

            </form>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              variant="raised"
              onClick={this.handleSubmit}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }
})
