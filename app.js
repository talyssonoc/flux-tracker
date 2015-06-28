/*globals global*/

import Fluxible from 'fluxible';

import fetchrPlugin from 'fluxible-plugin-fetchr';

let fetchr = fetchrPlugin({
    xhrPath: '/api'
});

import Application from './components/Application';

import RouteStore from './stores/RouteStore';
import ProjectsStore from './stores/ProjectsStore';
import ApplicationStore from './stores/ApplicationStore';

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

export default app;
