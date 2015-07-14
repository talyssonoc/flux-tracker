/*globals document*/

import React from 'react';
import ApplicationStore from 'app/stores/ApplicationStore';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import { handleHistory } from 'fluxible-router';

@handleHistory
@provideContext
@connectToStores([ ApplicationStore ], (context, props) => {
  var appStore = context.getStore(ApplicationStore);

  return {
    currentPageName: appStore.getCurrentPageName(),
    pageTitle: appStore.getPageTitle(),
    pages: appStore.getPages()
  };
})
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

export default Application;
