import {
  threadViewHandler,
  threadRowViewViewHandler,
  composeViewHandler
} from './handlers';
import {
  createConnectionsNavItem,
  connectionsRouteViewHandler
} from './connections';

Promise.all([InboxSDK.load(2, 'sdk_shakirthow_df46724836')]).then(results => {
  const sdk = results[0];

  const userEmail = sdk.User.getEmailAddress();

  console.log('A TEAM HAS NO NAME!');

  sdk.Conversations.registerThreadViewHandler(threadViewHandler(userEmail));
  sdk.Lists.registerThreadRowViewHandler(threadRowViewViewHandler);
  sdk.Compose.registerComposeViewHandler(composeViewHandler);

  // connections nav item and view
  const spokeoRouteId = 'spokeo';
  sdk.NavMenu.addNavItem(createConnectionsNavItem(spokeoRouteId));
  sdk.Router.handleCustomRoute(spokeoRouteId, connectionsRouteViewHandler);
});
