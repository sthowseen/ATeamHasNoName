export function getAssetUrl(assetPath) {
  // TODO: detect if local or remote assets are needed
  return chrome.runtime.getURL(assetPath)
}

export function createContact(person) {
  console.log(person);
  return {
    name: getName(person),
    location: getLocation(person),
    avatar: getAvatar(person),
    usernames: getUsernames(person)
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

function getUsernames(person) {
  if (person.username_sources.length > 0) { 
    return [
      {username: person.username_sources[0].username || '', avatar: person.username_sources[0].profile_photo.src || ''},
      {username: person.username_sources[1].username || '', avatar: person.username_sources[1].profile_photo.src || ''}
    ]
  } else {
    return [{
      username: 'coolguy', avatar: getAvatar(person)
    }];
  }
}