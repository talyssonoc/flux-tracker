import BaseStore from 'fluxible/addons/BaseStore';

class MockProjectsStore extends BaseStore {
  static storeName = 'ProjectsStore';

  static handlers = {
    TOGGLE_COLUMN: 'handleToggleColumn',
    RECEIVE_PROJECTS: 'handleReceiveProjects',
    RECEIVE_CURRENT_PROJECT: 'handleReceiveProject'
  }

  constructor(dispatcher) {
    super(dispatcher);
  }

  handleToggleColumn(payload) {
    this.toggledColumn = payload.column;

    this.emitChange();
  }

  handleReceiveProjects(payload) {
    this.projects = payload.projects;

    this.emitChange();
  }

  handleReceiveProject(payload) {
    this.currentProject = payload.project;

    this.emitChange();
  }

  getToggledColumn() {
    return this.toggledColumn;
  }

  getProjects() {
    return this.projects;
  }

  getCurrentProject() {
    return this.currentProject;
  }
}

export default MockProjectsStore;
