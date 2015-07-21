import React from 'react';
import { connectToStores } from 'fluxible-addons-react';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import { DragDropContext } from 'react-dnd';

import StoriesStore from 'app/stores/StoriesStore';
import Column from './Column';
import changeStoryColumn from 'app/actions/changeStoryColumn';

import B from 'app/helpers/bem';
import contextTypes from 'app/helpers/contextTypes';

@connectToStores([ StoriesStore ], (context, props) => {
  var storiesStore = context.getStore(StoriesStore);

  return {
    stories: storiesStore.getStories()
  };
})
@DragDropContext(HTML5Backend)
class Project extends React.Component {

  static defaultProps = {
    bem: B.with('project'),
    className: '',
    visibleColumns: [],
    stories: []
  }

  static contextTypes = contextTypes()

  changeStoryColumn(story, columnFrom, columnTo) {
    story.column = columnTo;

    this.context.executeAction(changeStoryColumn, {
      story: story
    });
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
                changeColumnHandler={ (story, columnTo) => (
                  this.changeStoryColumn(story, column, columnTo)
                )}
              />
            </div>
          )
        }
      </div>
    );
  }
}

export default Project;
