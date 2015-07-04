import React from 'react';

import Column from './Column';

import B from 'app/helpers/bem';

class Project extends React.Component {
  getColumn(story) {
    return this.props.columns[story.state];
  }

  render() {
    var columns = [];

    if(this.props.stories) {

      var columnsData = {};

      this.props.columns.forEach((column) => {
        columnsData[column] = [];
      });

      this.props.stories.forEach((story) => {
        columnsData[story.column].push(story);
      });

      columns = this.props.columns.map((column) => {
        return (
          <Column
          name={ column }
          stories={ columnsData[column] }
          />
        );
      });
    }

    return (
      <div className={ this.props.bem() }>
        <h1>Project: { this.props.name }</h1>
        { columns }
      </div>
    );
  }
}

Project.defaultProps = {
  columns: [
    'done',
    'current',
    'backlog',
    'icebox'
  ],
  bem: B.with('project')
};

export default Project;
