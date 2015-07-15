import BaseStore from 'fluxible/addons/BaseStore';

import projectConstants from 'app/constants/project';
import storyConstants from 'app/constants/story';

import _ from 'lodash';

class StoriesStore extends BaseStore {

  static storeName = 'StoriesStore'

  static handlers = {
    [storyConstants.RECEIVE_STORIES]: 'handleReceiveStories',
    [storyConstants.CHANGE_STORY_STATE]: 'handleStoryStateChange',
    [projectConstants.ADD_STORY]: 'handleAddStory',
    [projectConstants.DELETE_STORY]: 'handleDeleteStory',
    [projectConstants.UPDATE_STORY]: 'handleUpdateStory'
  }

  constructor(dispatcher) {
    super(dispatcher);

    this.columnsForStates = storyConstants.STATE_COLUMNS;

    this.actionsForStates = {
      icebox: ['Start'],
      unstarted: ['Start'],
      started: ['Finish'],
      finished: ['Deliver'],
      delivered: ['Accept', 'Reject'],
      accepted: [],
      rejected: ['Restart']
    };

    this.stories = [];
  }

  getStories() {
    return this.stories;
  }

  getColumn(story) {
    return this.columnsForStates[story.state];
  }

  getActions(story) {
    return this.actionsForStates[story.state];
  }

  handleReceiveStories(payload) {
    this.stories = payload.stories || [];

    this.stories = this.stories.map((story) => {
      story.column = this.getColumn(story);
      story.actions = this.getActions(story);
      return story;
    });

    this.emitChange();
  }

  handleStoryStateChange(payload) {
    var story = this.stories.filter(s => s.id === payload.story.id)[0];

    story.state = payload.story.state;
    story.column = this.getColumn(story);
    story.actions = this.getActions(story);

    this.emitChange();
  }

  handleAddStory(payload) {
    var story = payload.story;

    story.state = 'unstarted';
    story.column = 'icebox';
    story.actions = this.getActions(story);
    story.type = 'feature';
    this.stories.push(story);

    this.emitChange();
  }

  handleDeleteStory(payload) {
    _.remove(this.stories, {
      id: payload.storyId
    });

    this.emitChange();
  }

  handleUpdateStory(payload) {
    var story = this.stories.filter(s => s.id === payload.story.id)[0];

    _.assign(story, payload.story);
    story.actions = this.getActions(story);
    story.column = this.getColumn(story);

    this.emitChange();
  }

  dehydrate() {
    return {
      stories: this.stories
    };
  }

  rehydrate(state) {
    this.stories = state.stories;
  }
}

export default StoriesStore;
