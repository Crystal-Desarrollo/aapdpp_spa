# To deploy on hostinger

1. Run
   `REACT_APP_API_URL=https://crystal-desarrollo.com/aapdppapi/public/api npm run build`
   to create the production build of react
1. Push your changes to branch `master` (/build folder must be removed from
   .gitignore in order to upload those files to the server)
1. Login via ssh to hostinger
1. Go to the folder `aapdppp` and `clone` (if first time) or `pull` the changes
1. Use ` cp -a ./build/. .` to move the files in the build folder into the root
