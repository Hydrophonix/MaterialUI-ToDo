import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
import Tasks from './Tasks'
import { categories, tasks } from '../store.js'

export default class extends Component {
  state = {
    tasks
  }

  getTasksByCategories() {
    return Object.entries(
      this.state.tasks.reduce((tasks, task) => {
        const { category } = task

        tasks[category] = tasks[category]
          ? [...tasks[category], task]
          : [task]

        return tasks
      }, {})
    )
  }

  render() {
    const tasks = this.getTasksByCategories()

    return(
      <Fragment>
        <Header/>

        <Tasks
          tasks={tasks}
        />

        <Footer
          categories={categories}
        />
      </Fragment>
    )
  }
}
