import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';

import ClosedStoryContent from './ClosedStoryContent';
import OpenStoryContent from './OpenStoryContent';
import ItemTypes from 'app/constants/ItemTypes';

import B from 'app/helpers/bem';

const storySource = {
  beginDrag(props) {
    return { story: props.story };
  }
};

const storyTarget = {
  drop(props, monitor, component) {
    const draggedStory = monitor.getItem().story;

    if(draggedStory.id !== props.story.id) {
      props.changeColumnHandler(draggedStory, props.story.column);
    }
  }
};

@DropTarget(ItemTypes.STORY, storyTarget, (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isDragHovered: monitor.isOver()
  };
})
@DragSource(ItemTypes.STORY, storySource, (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
})
class Story extends React.Component {

  static defaultProps = {
    bem: B.with('story'),
    className: '',
    estimateValues: [1, 2, 3, 5, 8],
    isDragging: false
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

    var modifiers = {
      [this.props.story.type]: true,
      [this.props.story.state]: true,
      open: this.state.open,
      closed: !this.state.open,
      'drag-hovered': this.props.isDragHovered
    };

    var StoryContent = this.state.open ? OpenStoryContent : ClosedStoryContent;

    return this.props.connectDragSource(this.props.connectDropTarget(
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
    ));
  }
}

export default Story;
