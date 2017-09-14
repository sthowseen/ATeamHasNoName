export function getAssetUrl(assetPath) {
  return chrome.runtime.getURL(assetPath)
}