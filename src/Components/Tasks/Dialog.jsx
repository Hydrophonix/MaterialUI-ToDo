import React, { Component, Fragment } from 'react'
import { Add } from '@material-ui/icons'
import { Button, Dialog } from 'material-ui'
import {
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import Form from './Form.jsx'




export default class extends Component {
  state ={
    open: false
  }

  handleToggle = () =>
    this.setState(({ open }) => ({
      open: !open
    }))

  handleFormSubmit = task => {
    this.handleToggle()

    this.props.onCreate(task)
  }

  render() {
    const { open } = this.state,
          { categories, onCreate } = this.props

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
          <DialogTitle>
            Create a new Task
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the from below
            </DialogContentText>
            <Form
              categories={categories}
              onSubmit={this.handleFormSubmit}
            />
          </DialogContent>
        </Dialog>
      </Fragment>
    )
  }
}
