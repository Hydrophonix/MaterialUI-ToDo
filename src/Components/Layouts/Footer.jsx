import React from 'react'
import { withWidth, Paper, Tabs, Tab } from '@material-ui/core'

export default withWidth()(
  ({ categories, selectedCategory, onSelect, width }) => {
    const index = selectedCategory
      ? categories.findIndex(item => item === selectedCategory) + 1
      : 0

    const onIndexSelect = (e, index) =>
      onSelect(index === 0 ? '' : categories[index - 1])

    return(
      <Paper>
        <Tabs
          value={index}
          onChange={onIndexSelect}
          indicatorColor="secondary"
          textColor="secondary"
          centered={width !== 'xs'}
          scrollable={width === 'xs'}
          >
            <Tab label="All" />
            {categories.map(category =>
              <Tab
                key={category}
                label={category}
              />
            )}
          </Tabs>
        </Paper>
    )
  })
