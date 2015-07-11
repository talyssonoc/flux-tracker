import BaseStore from 'fluxible/addons/BaseStore';

class ProjectsStore extends BaseStore {
  constructor(dispatcher) {
    super(dispatcher);

    this.currentProject = {};
    this.projects = [];
    this.visibleColumns = {
      done: true,
      current: true,
      backlog: true,
      icebox: true
    };
  }

  getCurrentProject() {
    return this.currentProject;
  }

  getProjects() {
    return this.projects;
  }

  getVisibleColumns() {
    return this.visibleColumns;
  }

  handleReceiveProjects(payload) {
    this.projects = payload.projects;

    this.emitChange();
  }

  handleReceiveProject(payload) {
    this.currentProject = payload.project;

    this.emitChange();
  }

  handleToggleColumn(payload) {
    var currentVisibility = this.visibleColumns[payload.column];
    this.visibleColumns[payload.column] = !currentVisibility;

    this.emitChange();
  }

  dehydrate() {
    return {
      projects: this.projects,
      currentProject: this.currentProject,
      visibleColumns: this.visibleColumns
    };
  }

  rehydrate(state) {
    this.projects = state.projects;
    this.currentProject = state.currentProject;
    this.visibleColumns = state.visibleColumns
  }
}

ProjectsStore.storeName = 'ProjectsStore';

ProjectsStore.handlers = {
    'RECEIVE_PROJECTS': 'handleReceiveProjects',
    'RECEIVE_CURRENT_PROJECT': 'handleReceiveProject',
    'TOGGLE_COLUMN': 'handleToggleColumn'
};

export default ProjectsStore;
