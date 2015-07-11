import BaseStore from 'fluxible/addons/BaseStore';

class StoriesStore extends BaseStore {
  constructor(dispatcher) {
    super(dispatcher);

    this.columnsForStates = {
      icebox: 'icebox',
      unstarted: 'backlog',
      started: 'current',
      finished: 'current',
      delivered: 'current',
      accepted: 'done',
      rejected: 'current'
    };

    this.actionsForStates = {
      icebox: ['Start'],
      unstarted: ['Start'],
      started: ['Finish'],
      finished: ['Deliver'],
      delivered: ['Accept', 'Reject'],
      accepted: [],
      rejected: ['Reset']
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
    var story = this.stories.filter(story => story.id === payload.story.id)[0];

    story.state = payload.story.state;
    story.column = this.getColumn(story);
    story.actions = this.getActions(story);

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

StoriesStore.storeName = 'StoriesStore';

StoriesStore.handlers = {
  RECEIVE_STORIES: 'handleReceiveStories',
  CHANGE_STORY_STATE: 'handleStoryStateChange'
};

export default StoriesStore;
