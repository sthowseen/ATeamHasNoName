import sidebarList from './sidebarList';
import sidebarProfile from './sidebarProfile';

export {sidebarList, sidebarProfile};

export default () => {
  let el = document.createElement('div')
  el.className = 'spokeo-sidebar';
  return el;
}