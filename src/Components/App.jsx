import { hot } from 'react-hot-loader'
import React, { Component, Fragment } from 'react'
import { CssBaseline } from '@material-ui/core'

import { Header, Footer } from './Layouts'
import Tasks from './Tasks'
import { categories, tasks } from '../store.js'

export default hot(module)(class extends Component {
  state = {
    tasks,
    selectedTask: {},
  }

  getTasksByCategories() {
    const initCategories = categories.reduce((categories, category) => ({
      ...categories,
      [category]: []
    }), {})

    return Object.entries(
      this.state.tasks.reduce((tasks, task) => {
        const { category } = task

        tasks[category] = [...tasks[category], task]

        return tasks
      }, initCategories)
    )
  }

  handleCategorySelect = selectedCategory =>
    this.setState({selectedCategory})

  handleTaskSelect = id =>
    this.setState(({ tasks }) => ({
      selectedTask: tasks.find(task => task.id === id),
      editMode: false
    }))

  handleTaskCreate = task =>
    this.setState(({ tasks }) => ({
      tasks: [...tasks, task]
    }))

  handleTaskDelete = id =>
    this.setState(({ tasks }) => ({
      tasks: tasks.filter(task => task.id !== id),
      editMode: selectedTask.id === id ? false : editMode,
      selectedTask: selectedTask.id === id ? {} : selectedTask
    }))

  handleTaskSelectEdit = id =>
    this.setState(({ tasks }) => ({
      selectedTask: tasks.find(task => task.id === id),
      editMode: true
    }))

  handleTaskEdit = task =>
    this.setState(({ tasks }) => ({
      tasks: [
        ...tasks.filter(item => item.id !== task.id),
        task
      ],
      selectedTask
    }))

  render() {
    const tasks = this.getTasksByCategories(),
      { selectedCategory, selectedTask, editMode } = this.state

    return(
      <Fragment>
        <CssBaseline />

        <Header
          categories={categories}
          onTaskCreate={this.handleTaskCreate}
        />

        <Tasks
          tasks={tasks}
          categories={categories}
          selectedTask={selectedTask}
          selectedCategory={selectedCategory}
          editMode={editMode}
          onEdit={this.handleTaskEdit}
          onSelect={this.handleTaskSelect}
          onDelete={this.handleTaskDelete}
          onSelectEdit={this.handleTaskSelectEdit}
        />

        <Footer
          selectedCategory={selectedCategory}
          categories={categories}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    )
  }
})
