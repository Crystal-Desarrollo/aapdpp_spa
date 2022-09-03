# To deploy on hostinger

## Considerations

1. If the site is deployed into a subfolder, the component `Router` must have
   the property `basename` set with the name of the subfolder.
1. To deploy to test env add basename="/aapdpp" to the Router component before
   building

## First deploy and releases

1. Set the URLs in the .env.production file
1. Run `npm run build` to create the production build of react
1. Push your changes to branch `master` (/build folder must be removed from
   .gitignore in order to upload those files to the server)
1. Login via ssh to hostinger
1. Clone the github repo in the folder `aapdpp`
1. Use `cp -a ./build/. .` to move the files in the build folder into the root

## API URLs

1. test env api url `https://crystal-desarrollo.com/aapdppapi/public/api`
1. production api url `https://api.aapdpp.com/public/api`
