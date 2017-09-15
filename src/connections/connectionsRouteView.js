// weird stuff here to get around a chrome bug with content security policies (CSP)
// see https://stackoverflow.com/questions/24641592/injecting-iframe-into-page-with-restrictive-content-security-policy

export function connectionsRouteViewHandler(connectionsRouteView) {
  let el = connectionsRouteView.getElement();

  // Avoid recursive frame insertion...
  var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
  if (!location.ancestorOrigins.contains(extensionOrigin)) {
    var iframe = document.createElement('iframe');
    iframe.src = chrome.runtime.getURL('frame-connections.html');
    iframe.style.cssText =
      'position:relative;top:0;left:0;display:block;width:100%;height:100%;z-index:1000;border:0;';
    el.appendChild(iframe);
  }
}

export function createConnectionsNavItem(routeId) {
  return {
    name: 'Spokeo Connections',
    iconUrl: '',
    routeID: routeId
  };
}
