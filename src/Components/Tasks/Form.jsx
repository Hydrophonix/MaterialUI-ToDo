import React, { Component } from 'react'
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core'

export default class extends Component {
  state = this.getInitialState()

  getInitialState() {
    const { task } = this.props

    return task ? task : {
      title: '',
      description: '',
      category: ''
    }
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
          { categories, task } = this.props

    return(
      <form>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange('title')}
          margin="normal"
          fullWidth
        />
        <br />
        <FormControl fullWidth>
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
          multiline
          rows="4"
          label="Description"
          value={description}
          onChange={this.handleChange('description')}
          margin="normal"
          fullWidth
        />
        <br />
        <Button
          color="primary"
          variant="raised"
          onClick={this.handleSubmit}
          disabled={!title || !category}
        >
          {task ? 'Edit' : 'Create'}
        </Button>
      </form>
    )
  }
}
