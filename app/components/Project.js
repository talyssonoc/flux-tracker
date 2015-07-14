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

    this.props.visibleColumns.forEach((column) => {
      columnsData[column] = [];
    });

    this.props.stories.forEach((story) => {
      if(columnsData[story.column]) {
        columnsData[story.column].push(story);
      }
    });

    return (
      <div className={ `${this.props.bem()} ${this.props.className}` }>
        {
          this.props.visibleColumns.map((column) =>
            <div
              key={ `column-${column}` }
              className={ this.props.bem('column-container') }
            >
              <Column
                name={ column }
                stories={ columnsData[column] }
              />
            </div>
          )
        }
      </div>
    );
  }
}

export default Project;
