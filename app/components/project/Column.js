import React from 'react';

import Story from './Story';

import B from 'b_';

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
      <div className={ this.props.bem() }>
        <h2>{ this.props.name }</h2>
        <ul>
          { stories }
        </ul>
      </div>
    );
  }
}

Column.defaultProps = {
  bem: B.with('column')
};

export default Column;
