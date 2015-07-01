import React from 'react';

import Story from './Story';

class Column extends React.Component {

  render() {
    var stories = [];

    if(this.props.stories) {
      stories = this.props.stories.map((story) => {
        return (
          <li><Story {...story}/></li>
        );
      });
    }

    return (
      <div>
        <h2>{ this.props.name }</h2>
        <ul>
          { stories }
        </ul>
      </div>
    );
  }
}

export default Column;
