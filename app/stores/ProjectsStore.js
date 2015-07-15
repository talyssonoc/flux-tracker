import BaseStore from 'fluxible/addons/BaseStore';

import projectConstants from 'app/constants/project';
import columnConstants from 'app/constants/column';

class ProjectsStore extends BaseStore {

  static storeName = 'ProjectsStore'

  static handlers = {
    [projectConstants.RECEIVE_PROJECTS]: 'handleReceiveProjects',
    [projectConstants.RECEIVE_CURRENT_PROJECT]: 'handleReceiveProject',
    [columnConstants.TOGGLE_COLUMN]: 'handleToggleColumn'
  }

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
    this.visibleColumns = state.visibleColumns;
  }
}

export default ProjectsStore;
