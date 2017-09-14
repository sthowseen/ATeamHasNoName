import { getAssetUrl } from "../utils";

export default threadView => {
  const el = document.createElement("div");
  el.className = 'spokeo-sidebar'
  el.innerHTML = "A Team with no name";

  var views = threadView.getMessageViews();

  views.forEach(function(view) {
    var sender = view.getSender();
    var recipients = view.getRecipients();
    console.log(sender);
    console.log(recipients);
  });

  var sideBar = threadView.addSidebarContentPanel({
    title: "Sidebar Exampleee",
    iconUrl: getAssetUrl("assets/monkey.png"),
    el
  });

  //Hack to force display side bar
  var sideBarEl = $(`[data-sdk-sidebar-instance-id='${sideBar._contentPanelViewImplementation._sidebarId}']`)[0];
  $(sideBarEl).first().css( "display", "block !important" );

  

  //   getStripeCustomerWithoutMyDomain(contact, sdk.User.getEmailAddress()).then(function(customer) {
  // 						threadRowView.addImage({
  // 							imageUrl: chrome.runtime.getURL('monkey.png'),
  // 							tooltip: "email",
  // 							imageClass: "rounded_stripe"
  // 						});
  // 				});
};
