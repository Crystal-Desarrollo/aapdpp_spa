# To deploy on hostinger

1. Run `npm run build`
1. Push your changes to branch `master`
1. Login via ssh to hostinger
1. Go to the folder `aapdppp` and `clone` (if first time) or `pull` the changes
1. Copy `.env.exmaple` into `.env` and configure the API URL
1. Then use cp `./build/_._ ./` to move the files in the build folder into the
   root
