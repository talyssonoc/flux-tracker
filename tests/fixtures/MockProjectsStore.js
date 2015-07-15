import BaseStore from 'fluxible/addons/BaseStore';

class MockProjectsStore extends BaseStore {
  static storeName = 'ProjectsStore';

  static handlers = {
    TOGGLE_COLUMN: 'handleToggleColumn'
  }

  constructor(dispatcher) {
    super(dispatcher);
  }

  handleToggleColumn(payload) {
    this.toggledColumn = payload.column;

    this.emitChange();
  }

  getToggledColumn() {
    return this.toggledColumn;
  }
}

export default MockProjectsStore;
