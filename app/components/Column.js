import React from 'react';

import Story from './Story';

import B from 'app/helpers/bem';

class Column extends React.Component {

  static defaultProps = {
    bem: B.with('project__column'),
    stories: []
  }

  render() {
    var stories = this.props.stories.map((story) => {
      return (
        <li
          key={ `story-${story.id}`}
          className={ this.props.bem('story-list__item') }
        >
          <Story
            story={ story }
            className={ this.props.bem('story') }
          />
        </li>
      );
    });

    return (
      <div className={ this.props.bem() }>
        <div className={ this.props.bem('content') }>
          <h2
            className={ this.props.bem('name') }
          >
            { this.props.name }
          </h2>
          <ul className={ this.props.bem('story-list') }>
            { stories }
          </ul>
        </div>
      </div>
    );
  }
}

export default Column;
