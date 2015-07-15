import BaseStore from 'fluxible/addons/BaseStore';

class MockStoriesStore extends BaseStore {
  static storeName = 'StoriesStore';

  static handlers = {
    CHANGE_STORY_STATE: 'handleChangeStoryState',
    DELETE_STORY: 'handleDeleteStory'
  }

  constructor(dispatcher) {
    super(dispatcher);
  }

  handleChangeStoryState(payload) {
    this.story = payload.story;

    this.emitChange();
  }

  handleDeleteStory(payload) {
    this.storyDeleted = payload.storyId;

    this.emitChange();
  }
}

export default MockStoriesStore;
