import React from 'react'
import { Paper, Tabs } from 'material-ui'
import { Tab } from 'material-ui/Tabs'

export default ({ categories }) =>
  <Paper>
    <Tabs
      value={0}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="All" />
      {categories.map((category, i) =>
        <Tab label={category} key={i}/>
      )}
    </Tabs>
  </Paper>
