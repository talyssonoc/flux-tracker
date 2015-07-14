import React from 'react';
import { connectToStores } from 'fluxible-addons-react';

import StoriesStore from 'app/stores/StoriesStore';
import Column from './Column';

import B from 'app/helpers/bem';

@connectToStores([ StoriesStore ], (context, props) => {
  var storiesStore = context.getStore(StoriesStore);

  return {
    stories: storiesStore.getStories()
  };
})
class Project extends React.Component {

  static defaultProps = {
    bem: B.with('project'),
    className: '',
    visibleColumns: [],
    stories: []
  }

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
        <div
          key={ `column-${column}` }
          className={ this.props.bem('column-container') }
        >
          <Column
            name={ column }
            stories={ columnsData[column] }
          />
        </div>
      );
    });

    return (
      <div className={ `${this.props.bem()} ${this.props.className}` }>
        { columns }
      </div>
    );
  }
}

export default Project;
