import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { Header, Footer } from './Layouts'
import Tasks from './Tasks'
import { categories, tasks } from '../store.js'

export default hot(module)(class extends Component {
  state = {
    tasks,
    selectedTask: {}
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
      selectedTask: tasks.find(task => task.id === id)
    }))

  handleTaskCreate = task =>
    this.setState(({ tasks }) => ({
      tasks: [...tasks, task]
    }))

  handleTaskDelete = id =>
    this.setState(({ tasks }) => ({
      tasks: tasks.filter(task => task.id !== id)
    }))

  render() {
    const tasks = this.getTasksByCategories(),
      { selectedCategory, selectedTask } = this.state

    return(
      <Fragment>
        <Header
          categories={categories}
          onTaskCreate={this.handleTaskCreate}
        />

        <Tasks
          selectedTask={selectedTask}
          selectedCategory={selectedCategory}
          tasks={tasks}
          onSelect={this.handleTaskSelect}
          onDelete={this.handleTaskDelete}
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
