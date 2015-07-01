/*globals global*/

import Fluxible from 'fluxible';

import fetchrPlugin from 'fluxible-plugin-fetchr';

let fetchr = fetchrPlugin({
    xhrPath: '/api'
});

import Application from './Application';

import ApplicationStore from './stores/ApplicationStore';
import RouteStore from './stores/RouteStore';
import ProjectsStore from './stores/ProjectsStore';
import StoriesStore from './stores/StoriesStore';

// create new fluxible instance
const app = new Fluxible({
    component: Application
});

// register plugins
app.plug(fetchr);

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(ProjectsStore);
app.registerStore(StoriesStore);

export default app;
