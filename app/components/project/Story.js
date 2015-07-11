import React from 'react';
import connectToStores from 'fluxible/addons/connectToStores';

import changeStoryState from 'app/actions/changeStoryState';
import StoriesStore from 'app/stores/StoriesStore';

import B from 'app/helpers/bem';
import contextTypes from 'app/helpers/contextTypes';

class Story extends React.Component {

  render() {

    var possibleStates = this.props.possibleStates.map((state) => {
      return (
        <option
          value={ state }
          key={ 'state-' + state}
        >
          { state }
        </option>);
    });

    return (

      <div className={ this.props.bem() }>
        { this.props.title }
        <select
          value={ this.props.state }
          onChange={ this.storyStateChangeHandler.bind(this) }
          ref="stateSelect"
        >
          { possibleStates }
        </select>
      </div>
    );
  }

  storyStateChangeHandler() {
    var newState = React.findDOMNode(this.refs.stateSelect).value;

    this.context.executeAction(changeStoryState, {
      story: this.props,
      newState: newState
    });
  }
}

Story.defaultProps = {
  bem: B.with('project__story'),
  possibleStates: []
};

Story.contextTypes = contextTypes();

export default connectToStores(
  Story,
  [ StoriesStore ],
  function(store, props) {
    return {
      possibleStates: store.StoriesStore.getAllStates()
    };
  }
);
