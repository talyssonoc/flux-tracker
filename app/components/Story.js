import React from 'react';

import ClosedStoryContent from './ClosedStoryContent';
import OpenStoryContent from './OpenStoryContent';

import B from 'app/helpers/bem';

class Story extends React.Component {

  static defaultProps = {
    bem: B.with('story'),
    className: '',
    estimateValues: [1, 2, 3, 5, 8]
  }

  constructor(props) {
    super();

    this.state = {
      open: props.story._new
    };
  }

  toggleOpenClosed() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {

    var modifiers = {};

    modifiers[this.props.story.type] = true;
    modifiers[this.props.story.state] = true;
    modifiers.open = this.state.open;
    modifiers.closed = !this.state.open;

    var StoryContent = this.state.open ? OpenStoryContent : ClosedStoryContent;

    return (
      <div
        className={ `${this.props.className} ${this.props.bem(modifiers)}` }
      >
        <StoryContent
          toggleHandler={ () => this.toggleOpenClosed() }
          story={ this.props.story }
          bem={ this.props.bem }
          estimateValues= { this.props.estimateValues }
        />
      </div>
    );
  }
}

export default Story;
