/*globals document*/

import React from 'react';
import ApplicationStore from '../stores/ApplicationStore';
import provideContext from 'fluxible/addons/provideContext';
import connectToStores from 'fluxible/addons/connectToStores';
import { handleHistory } from 'fluxible-router';

class Application extends React.Component {
  render() {
    var Handler = this.props.currentRoute.get('handler');

    return (<Handler/>);
  }

  componentDidUpdate(prevProps, prevState) {
    const newProps = this.props;
    if (newProps.pageTitle === prevProps.pageTitle) {
      return;
    }
    document.title = newProps.pageTitle;
  }
}

export default handleHistory(provideContext(connectToStores(
  Application,
  [ ApplicationStore ],
  function (stores, props) {
    var appStore = stores.ApplicationStore;
    return {
      currentPageName: appStore.getCurrentPageName(),
      pageTitle: appStore.getPageTitle(),
      pages: appStore.getPages()
    };
  }
)));
