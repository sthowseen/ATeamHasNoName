// "use strict";

import {
  threadViewHandler,
  threadRowViewViewHandler,
  composeViewHandler
} from "./handlers";
import {
  createConnectionsNavItem,
  connectionsRouteViewHandler
} from "./connections";
import { getAssetUrl } from "./utils";

Promise.all([InboxSDK.load(2, "sdk_shakirthow_df46724836")]).then(results => {
  var sdk = results[0];
  console.log("A TEAM HAS NO NAME!");

  sdk.Conversations.registerThreadViewHandler(threadViewHandler);
  sdk.Lists.registerThreadRowViewHandler(threadRowViewViewHandler);
  sdk.Compose.registerComposeViewHandler(composeViewHandler);
  
  // connections nav item and view
  sdk.NavMenu.addNavItem(createConnectionsNavItem());
  sdk.Router.handleCustomRoute('spokeo', connectionsRouteViewHandler);
});
