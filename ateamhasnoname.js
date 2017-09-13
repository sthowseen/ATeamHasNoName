"use strict";
import registerThreadViewHandler from "threadViewHandler";

Promise.all([
  InboxSDK.load(2, "sdk_shakirthow_df46724836")
  // InboxSDK.loadScript('https://www.somedependency.com/somedependency.js')
]).then(function(results) {
  var sdk = results[0];
  // the rest of your app code here
  registerThreadViewHandler(sdk);

  sdk.Lists.registerThreadRowViewHandler(threadRowView => {
    var contacts = threadRowView.getContacts();
    for (var i = 0; i < contacts.length; i++) {
      var contact = contacts[i];
      // checkforSpokeoProfile.then(function(user) {

      threadRowView.addImage({
        imageUrl: chrome.runtime.getURL("monkey.png"),
        tooltip: "email",
        imageClass: "rounded_stripe"
      });

      // });
		}
	});
	

	
});
