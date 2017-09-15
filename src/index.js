// "use strict";

import {
  threadViewHandler,
  customRouteViewHandler,
  threadRowViewViewHandler,
  composeViewHandler
} from "./handlers";
import { createConnectionsNavItem } from "./connections";
import { getAssetUrl } from "./utils";

Promise.all([InboxSDK.load(2, "sdk_shakirthow_df46724836")]).then(results => {
  var sdk = results[0];
  console.log("A TEAM HAS NO NAME!");

  sdk.Conversations.registerThreadViewHandler(threadViewHandler);
  sdk.Router.handleCustomRoute(customRouteViewHandler);
  sdk.NavMenu.addNavItem(createConnectionsNavItem());
  sdk.Lists.registerThreadRowViewHandler(threadRowViewViewHandler);
  sdk.Compose.registerComposeViewHandler(composeViewHandler);
});
