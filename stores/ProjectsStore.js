import BaseStore from 'fluxible/addons/BaseStore';

class ProjectsStore extends BaseStore {
  constructor(dispatcher) {
    super(dispatcher);

    this.currentProject = {};
    this.projects = [];
  }

  getCurrentProject() {
    return this.currentProject;
  }

  getProjects() {
    return this.projects;
  }

  handleReceiveProjects(payload) {
    this.projects = payload.projects;
    this.emitChange();
  }

  handleReceiveProject(payload) {
    this.currentProject = payload.project;
    this.emitChange();
  }

  dehydrate() {
    return {
      projects: this.projects,
      currentProject: this.currentProject
    };
  }

  rehydrate(state) {
    this.projects = state.projects;
    this.currentProject = state.currentProject;
  }
}

ProjectsStore.storeName = 'ProjectsStore';

ProjectsStore.handlers = {
    'RECEIVE_PROJECTS': 'handleReceiveProjects',
    'RECEIVE_CURRENT_PROJECT': 'handleReceiveProject'
};

export default ProjectsStore;
