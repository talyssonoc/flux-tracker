import BaseStore from 'fluxible/addons/BaseStore';

class MockStoriesStore extends BaseStore {
  static storeName = 'StoriesStore';

  static handlers = {
    CHANGE_STORY_STATE: 'handleChangeStoryState'
  }

  constructor(dispatcher) {
    super(dispatcher);
  }

  handleChangeStoryState(payload) {
    this.story = payload.story;

    this.emitChange();
  }
}

export default MockStoriesStore;
