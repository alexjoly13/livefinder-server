cd ../Project3-client
npm run-script build
cd ../Project3-server
rm -rf public/*
cp -r ../Project3-client/build/* public/
git add public
git commit -m "Update React for deployment"
git push heroku master
