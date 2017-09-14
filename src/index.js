'use strict';

import { threadViewHandler } from './handlers';

Promise.all([InboxSDK.load(2, 'sdk_shakirthow_df46724836')]).then(results => {
  let sdk = results[0];

  console.log('A TEAM HAS NO NAME!')

  sdk.Conversations.registerThreadViewHandler(threadViewHandler);
  // sdk.Lists.registerThreadRowViewHandler(threadRowViewHandler);
});
