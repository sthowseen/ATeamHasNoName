'use strict';


Promise.all([
  InboxSDK.load(2, 'sdk_shakirthow_df46724836'),
  // InboxSDK.loadScript('https://www.somedependency.com/somedependency.js')
])
.then(function(results){
  var sdk = results[0];
	// the rest of your app code here
	

		sdk.Conversations.registerThreadViewHandler(threadView => {
			const el = document.createElement("div");
			el.innerHTML = 'A Team with no name';
	
			threadView.addSidebarContentPanel({
				title: 'Sidebar Example',
				iconUrl: chrome.runtime.getURL('monkey.png'),
				el
			});
		});
	
	
	
		sdk.Lists.registerThreadRowViewHandler(threadRowView =>{
	
			var contacts = threadRowView.getContacts();
			for (var i = 0; i < contacts.length; i++) {
				var contact = contacts[i];
				// getStripeCustomerWithoutMyDomain(contact, sdk.User.getEmailAddress()).then(function(customer) {
	
						threadRowView.addImage({
							imageUrl: chrome.runtime.getURL('monkey.png'),
							tooltip: "email",
							imageClass: "rounded_stripe"
						});
	
					
				// });
			}
		})
	



});
