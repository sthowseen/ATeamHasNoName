export function getAssetUrl(assetPath) {
  // TODO: detect if local or remote assets are needed
  return chrome.runtime.getURL(assetPath);
}

export function createContact(person) {
  return {
    name: getName(person),
    email: getEmail(person),
    location: getLocation(person),
    avatar: getAvatar(person),
    usernames: getUsernames(person)
  };
}

function getEmail(person) {
  return person.aggregate_info.email;
}

function getName(person) {
  return (
    person.aggregate_info.name ||
    person.aggregate_info.email ||
    person.aggregate_info.username
  );
}

function getLocation(person) {
  return person.aggregate_info.location || "";
}

function getAvatar(person) {
  return getProfilePhoto(
    person.aggregate_info,
    'https://pbs.twimg.com/profile_images/477397164453527552/uh2w1u1o_400x400.jpeg'
  );
}

function getUsernames(person) {
  if (person.username_sources.length == 0) {
    return [
      {
        username: 'coolguy',
        avatar: getAvatar(person)
      }
    ];
  }

  return person.username_sources.slice(0, 2).map(source => ({
    username: source.username || '',
    avatar: getProfilePhoto(source)
  }));
}

function getProfilePhoto(obj, defaultSrc = '') {
  return (obj.profile_photo && obj.profile_photo.src) || defaultSrc;
}
