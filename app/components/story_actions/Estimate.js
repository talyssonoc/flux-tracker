import React from 'react';

import changeStoryEstimate from 'app/actions/changeStoryEstimate';

import B from 'app/helpers/bem';
import contextTypes from 'app/helpers/contextTypes';

class Estimate extends React.Component {

  static defaultProps = {
    bem: B.with('story__actions__estimate')
  }

  static contextTypes = contextTypes()

  setEstimate(event, estimate) {
    event.stopPropagation();

    this.context.executeAction(changeStoryEstimate, {
      storyId: this.props.storyId,
      newEstimate: estimate
    });
  }

  render() {
    return (
      <div>
        {
          this.props.estimateValues.map((estimate) => {
            return (
              <button
                className={ this.props.bem({ [estimate]: true }) }
                key={ `estimate-${estimate}` }
                onClick={ (e) => this.setEstimate(e, estimate) }
              >
                { estimate }
              </button>
            );
          })
        }
      </div>
    );
  }
}

export default Estimate;
