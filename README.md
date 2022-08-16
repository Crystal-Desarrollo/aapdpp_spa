# To deploy on hostinger

1. Run
   `REACT_APP_API_URL=https://crystal-desarrollo.com/aapdppapi/api npm run build`
1. Push your changes to branch `master`
1. Login via ssh to hostinger
1. Go to the folder `aapdppp` and `clone` (if first time) or `pull` the changes
1. Use cp `./build/_._ ./` to move the files in the build folder into the root
