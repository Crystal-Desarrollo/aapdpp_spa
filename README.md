# To deploy on hostinger

## Considerations

1. If the site is deployed into a subfolder, the component `Router` must have
   the property `basename` set with the name of the subfolder. (e.g. this site
   is deployed in /aapdpp so Router has basename="/aapdpp")
1. The package.json must have the property
   `"homepage": "https://crystal-desarrollo.com/aapdpp"`so the `index.html` file
   of the build has the correct path to the static folder

## First deploy and releases

1. Run `REACT_APP_API_URL={test or prod api url} npm run build` to create the
   production build of react
1. Push your changes to branch `master` (/build folder must be removed from
   .gitignore in order to upload those files to the server)
1. Login via ssh to hostinger
1. Clone the github repo in the folder `aapdpp`
1. Use ` cp -a ./build/. .` to move the files in the build folder into the root

## considerations

1. test env api url `https://crystal-desarrollo.com/aapdppapi/public/api`
1. production api url `https://api.aapdpp.com/public/api`
