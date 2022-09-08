# To deploy on hostinger

## Considerations

1. If the site is deployed into a subfolder, the component `Router` must have
   the property `basename` set with the name of the subfolder.
1. To deploy to test env add basename="/aapdpp" to the Router component before
   building

## First deploy and releases

1. Login via ssh to hostinger
1. Clone or pull the changes from the github repository
1. Copy the file .env.example into .env.production
1. Run the deploy.sh file

## API URLs

1. test env api url `https://crystal-desarrollo.com/aapdppapi/public/api`
1. production api url `https://api.aapdpp.com/public/api`
