export function getAssetUrl(assetPath) {
  // TODO: detect if local or remote assets are needed
  return chrome.runtime.getURL(assetPath)
}

export function createContact(person) {
  return {
    name: getName(person),
    location: getLocation(person),
    avatar: getAvatar(person)
  }
}

function getName(person) {
  return (
    person.aggregate_info.name ||
    person.aggregate_info.email ||
    person.aggregate_info.username
  );
}

function getLocation(person) {
  return person.aggregate_info.location || '';
}

function getAvatar(person) {
  return (
    (person.aggregate_info.profile_photo &&
      person.aggregate_info.profile_photo.src) ||
    'https://pbs.twimg.com/profile_images/477397164453527552/uh2w1u1o_400x400.jpeg'
  );
}