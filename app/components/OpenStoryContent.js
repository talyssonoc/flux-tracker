import React from 'react';
import mixin from 'react-mixin';

import TextArea from 'react-textarea-autosize';

import deleteStory from 'app/actions/deleteStory';
import updateStory from 'app/actions/updateStory';
import cancelCreateStory from 'app/actions/cancelCreateStory';
import keyCodes from 'app/constants/keyCodes';
import storyConstants from 'app/constants/story';

import _ from 'lodash';
import B from 'app/helpers/bem';
import contextTypes from 'app/helpers/contextTypes';

@mixin.decorate(React.addons.LinkedStateMixin)
class OpenStoryContent extends React.Component {

  static contextTypes = contextTypes()

  static defaultProps = {
    className: ''
  }

  constructor(props) {
    super();

    this.state = _.omit(props.story, ['actions', 'column']);
  }

  saveStory() {
    this.context.executeAction(updateStory, {
      story: this.state
    });

    this.props.toggleHandler();
  }

  deleteStory() {
    /* global confirm */
    if(confirm('Do you really want to delete it?')) {

      if(this.props.story._new) {
        return this.cancelCreateStory();
      }

      this.context.executeAction(deleteStory, {
        storyId: this.props.story.id
      });
    }
  }

  cancelCreateStory() {
    this.context.executeAction(cancelCreateStory, {
      _tempId: this.props.story._tempId
    });
  }

  cancelEdit() {
    if(this.props.story._new) {
      return this.cancelCreateStory();
    }

    this.props.toggleHandler();
  }

  keyDownHandler(event) {
    if(event.keyCode === keyCodes.ENTER) {
      this.saveStory();
      event.stopPropagation();
    }
  }

  componentDidMount() {
    React.findDOMNode(this.refs.title).focus();
  }

  canSelectState() {
    return this.state.estimate > 0;
  }

  render() {
    var states;

    if(this.canSelectState()) {
      states = [
        'icebox',
        'unstarted',
        'started',
        'finished',
        'delivered',
        'accepted',
        'rejected'
      ];
    } else {
      states = ['Estimate before start'];
    }

    states = states.map((state) =>
      <option
        value={ state }
        key={ `state-${state}` }
      >
        { state }
      </option>
    );

    return (
      <div className={ this.props.bem('content') }>
        <div className="grid">
          <div className="grid__row">
            <div className="grid__col">
              <TextArea
                minRows={ 1 }
                maxRows={ 5 }
                className={ this.props.bem('textarea') }
                valueLink={ this.linkState('title') }
                onKeyDownCapture={ (e) => this.keyDownHandler(e) }
                ref="title"
              />
            </div>
          </div>

          <div className="grid__row">
            <div className="grid__col grid__col-2">
              <label
                className={ this.props.bem('label') }
              >
                Type
              </label>
            </div>
            <div className="grid__col grid__col-10">
              <select
                className={ this.props.bem('select') }
                valueLink={ this.linkState('type') }
              >
                {
                  storyConstants.TYPES.map((type) =>
                    <option
                      value={ type }
                      key={ `type-${type}` }
                    >
                      { type }
                    </option>
                  )
                }
              </select>
            </div>
          </div>

          <div className="grid__row">
            <div className="grid__col grid__col-2">
              <label
                className={ this.props.bem('label') }
              >
                State
              </label>
            </div>
            <div className="grid__col grid__col-10">
              <select
                className={ this.props.bem('select') }
                valueLink={ this.linkState('state') }
                disabled={ !this.canSelectState() }
              >
                { states }
              </select>
            </div>
          </div>

          <div className="grid__row">
            <div className="grid__col grid__col-2">
              <label
                className={ this.props.bem('label') }
              >
                Estimate
              </label>
            </div>
            <div className="grid__col grid__col-10">
              <select
                className={ this.props.bem('select') }
                valueLink={ this.linkState('estimate') }
              >
                <option
                  value={ -1 }
                  key={ `estimate-not-estimated` }
                >
                  Not estimated
                </option>
                {
                  this.props.estimateValues.map((estimate) =>
                    <option
                      value={ estimate }
                      key={ `estimate-${estimate}` }
                    >
                      { estimate }
                    </option>
                  )
                }
              </select>
            </div>
          </div>

          <div className="grid__row">
            <div className="grid__col grid__col-3">
              <button
                onClick={ () => this.saveStory() }
                className="button button--black"
              >
                Save
              </button>
            </div>
            <div className="grid__col grid__col-3">
              <button
                onClick={ () => this.deleteStory() }
                className="button button--black"
              >
                Delete
              </button>
            </div>
            <div className="grid__col grid__col-3">
              <button
                onClick={ () => this.cancelEdit() }
                className="button button--black"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OpenStoryContent;
