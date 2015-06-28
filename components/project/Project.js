import React from 'react';

class Project extends React.Component {
  render() {
    var stories = this.props.stories.map((story) => {
      return (
        <li key={"story-" + story.id}>
          {story.text}
        </li>
      );
    });

    return (
      <div>
        <h1>Project: {this.props.name}</h1>
        <ul>
          { stories }
        </ul>
      </div>
    );
  }
}

export default Project;
