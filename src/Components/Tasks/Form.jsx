import React, { Component } from 'react'
import { TextField, Select, Button } from 'material-ui'
import { FormControl } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { withStyles } from 'material-ui/styles'


const styles = theme => ({
  FormControl: {
    width: 300
  }
})

export default withStyles(styles)(class extends Component {
  state = this.getInitialState()

  getInitialState() {
    const { task } = this.props

    return task ? task : {
      title: '',
      description: '',
      category: ''
    }
  }

  componentWillReceiveProps({ task }) {
    this.setState({
      ...task
    })
  }

  handleChange = name => ({ target: { value } }) =>
    this.setState({
      [name]: value
    })

  handleSubmit = () => {

    this.props.onSubmit({
      id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
      ...this.state
    })

    this.setState(this.getInitialState())
  }

  render() {
    const { title, description, category } = this.state,
          { classes, categories, task } = this.props

    return(
      <form>
        <TextField
          className={classes.FormControl}
          label="Title"
          value={title}
          onChange={this.handleChange('title')}
          margin="normal"
        />
        <br />
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
        <br />
        <TextField
          className={classes.FormControl}
          multiline
          rows="4"
          label="Description"
          value={description}
          onChange={this.handleChange('description')}
          margin="normal"
        />
        <br />
        <Button
          color="primary"
          variant="raised"
          onClick={this.handleSubmit}
        >
          {task ? 'Edit' : 'Create'}
        </Button>
      </form>
    )
  }
})
