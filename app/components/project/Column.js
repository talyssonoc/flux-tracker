import React from 'react';

import Story from './Story';

import B from 'app/helpers/bem';

class Column extends React.Component {

  render() {
    var stories = this.props.stories.map((story) => {
      return (
        <li key={ `story-${story.id}`} >
          <Story
            {...story}
          />
        </li>
      );
    });

    return (
      <div className={ this.props.bem() }>
        <h2
          className={ this.props.bem('name') }
        >
          { this.props.name }
        </h2>
        <ul>
          { stories }
        </ul>
      </div>
    );
  }
}

Column.defaultProps = {
  bem: B.with('project__column'),
  stories: []
};

export default Column;
