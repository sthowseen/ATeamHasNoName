# A Team Has No Name

# Build the extension
  ```
  $git clone https://github.com/sthowseen/ATeamHasNoName/commits/master <target_directory>
  $cd <target_directory>
  $npm install
  $npm run build
  ```

## Install Extension (Chrome)

### Developer Mode
1. Go to Window -> Extensions
1. Select `Load unpacked extension...`
1. Select the `<target_directory>/dist` folder
    - ensure that you've run `npm run build` each time you update the extension
1. Click `allow incognito mode`

### Production Mode (TODO)
