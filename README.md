# A Team Has No Name

# Build the extension
  ```
  $git clone https://github.com/sthowseen/ATeamHasNoName/commits/master <project_directory>
  $cd <project_directory>
  $npm install
  $npm run build
  ```

## Install Extension (Chrome)

1. Go to Window -> Extensions
1. Select `Load unpacked extension...`
1. Select the correct folder
    - **Development:** `<project_directory>/dev`
        - development mode loads local assets rather than remote
        - NOTE: this contains symlinks to certain files and folders in the `/dist` directory
    - **Production:** `<project_directory>/dist`
        - production mode loads remote assets 
        - NOTE: put all assets in the `/asset` directory here
        - NOTE: be sure to run `$npm run build` to ensure `bundle.js` gets updated
1. (optional) Click `allow incognito mode`

