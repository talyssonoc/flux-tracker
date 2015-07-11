/*globals global*/

import Fluxible from 'fluxible';

import fetchrPlugin from 'fluxible-plugin-fetchr';

let fetchr = fetchrPlugin({
    xhrPath: '/api'
});

import Application from './components/Application';

import ApplicationStore from 'app/stores/ApplicationStore';
import RouteStore from 'app/stores/RouteStore';
import ProjectsStore from 'app/stores/ProjectsStore';
import StoriesStore from 'app/stores/StoriesStore';

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
