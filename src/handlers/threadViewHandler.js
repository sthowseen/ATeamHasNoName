import { getAssetUrl } from "../utils";

export default threadView => {
  let emailCount = 4;
  
  let el = document.createElement("div");
  el.className = 'spokeo-sidebar'
  el.innerHTML = "<h4>Spokeo Subtitle</h4>";

  let counter = document.createElement('div')
  counter.classList.add('spk-counter');
  counter.innerHTML = `${emailCount}`;

  el.append(counter);

  var views = threadView.getMessageViews();

  views.forEach(function(view) {
    var sender = view.getSender();
    var recipients = view.getRecipients();
    console.log(sender);
    console.log(recipients);
  });

  var sideBar = threadView.addSidebarContentPanel({
    title: "",
    iconUrl: '',
    el,
    id: 'spokeo-sidebar',
  });

  //Hack to force display side bar
  var sideBarEl = $(`[data-sdk-sidebar-instance-id='${sideBar._contentPanelViewImplementation._sidebarId}']`)[0];
  $(sideBarEl).first().css( "display", "block !important" );
};
