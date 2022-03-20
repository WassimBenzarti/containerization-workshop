docker build -t wassimbenzarti/workshop-containerization .
docker run -it -e PORT=3000 -p 8080:3000 wassimbenzarti/workshop-containerization:latest
