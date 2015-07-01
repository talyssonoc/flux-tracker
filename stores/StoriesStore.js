import BaseStore from 'fluxible/addons/BaseStore';

class StoriesStore extends BaseStore {
  constructor(dispatcher) {
    super(dispatcher);

    this.columns = {
      icebox: 'icebox',
      unstarted: 'backlog',
      started: 'current',
      finished: 'current',
      delivered: 'current',
      accepted: 'done',
      rejected: 'current'
    };

    this.stories = [];
  }

  getStories() {
    return this.stories;
  }

  getColumn(story) {
    return this.columns[story.state];
  }

  handleReceiveStories(payload) {
    this.stories = payload.stories || [];

    this.stories = this.stories.map((story) => {
      story.column = this.getColumn(story);
      return story;
    });

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
  'RECEIVE_STORIES': 'handleReceiveStories'
};

export default StoriesStore;
