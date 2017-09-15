'use strict';

import { threadViewHandler, customRouteViewHandler} from './handlers';
import { createConnectionsNavItem } from './connections';

Promise.all([InboxSDK.load(2, 'sdk_shakirthow_df46724836')]).then(results => {
  let sdk = results[0];

  console.log('A TEAM HAS NO NAME!')

  sdk.Conversations.registerThreadViewHandler(threadViewHandler);
  sdk.Router.handleCustomRoute(customRouteViewHandler);

  sdk.NavMenu.addNavItem(createConnectionsNavItem());
});
