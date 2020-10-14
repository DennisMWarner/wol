dotnet publish -c Release
docker build -t wol ./bin/Release/netcoreapp3.1/publish
docker tag wol registry.heroku.com/cognifit/web
docker push registry.heroku.com/cognifit/web
heroku container:release web -a cognifit