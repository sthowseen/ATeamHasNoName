import { getAssetUrl } from "../utils";
import { threadViewHandler } from "./handlers";

export default composeView => {
  console.log(composeView.getBodyElement());

  let el = document.createElement("div");
  el.className = "spokeo-sidebar";
  el.innerHTML = "<h4>Spokeo Sidebar</h4>";

  let counter = document.createElement("div");
  counter.classList.add("spk-counter");
  counter.innerHTML = `${emailCount}`;

  let contacts = document.createElement("div");
  contacts.classList.add("spokeo-contacts");

  el.append(counter);
  el.appendChild(contacts);

  sdk.Conversations.registerThreadViewHandler(function(threadView) {
    var sideBar = threadView.addSidebarContentPanel({
      title: "TEST",
      iconUrl: "",
      id: "spokeo-sidebar",
      el
    });
  });
};
