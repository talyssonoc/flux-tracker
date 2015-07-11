import React from 'react';
import connectToStores from 'fluxible/addons/connectToStores';

import StoriesStore from 'app/stores/StoriesStore';
import Column from './Column';

import B from 'app/helpers/bem';

class Project extends React.Component {

  render() {
    var columnsData = {};
    var columns;

    this.props.visibleColumns.forEach((column) => {
      columnsData[column] = [];
    });

    this.props.stories.forEach((story) => {
      if(columnsData[story.column]) {
        columnsData[story.column].push(story);
      }
    });

    columns = this.props.visibleColumns.map((column) => {
      return (
        <Column
          name={ column }
          stories={ columnsData[column] }
          key={ `column-${column}` }
        />
      );
    });

    return (
      <div className={ `${this.props.bem()} ${this.props.className}` }>
        { columns }
      </div>
    );
  }
}

Project.defaultProps = {
  bem: B.with('project'),
  className: '',
  visibleColumns: [],
  stories: []
};

export default connectToStores(
  Project,
  [ StoriesStore ],
  function(store, props) {
    return {
      stories: store.StoriesStore.getStories()
    };
  }
);
