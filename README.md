# songify


## Deploy the server
Install mongoDB and node.

Please run npm install in root directory
```npm
npm install
```
Do the same in backend directory
```npm
cd ./backend
npm install
```
please run deploy.js with node (root directory)
```node
node deploy.js
```
the out put should looks like:
```
Our app is running on port 8080
Connected to the database!
```
## deploy the client
install angular cli,
then go to frontend directory and run the cli server.
```npm
cd ./frontend
npm start
or
ng serve
```


## Get all songs collection
HTTP Request: GET,  URL: http://localhost:8080/song

## Create new song
HTTP Request: POST,  URL: http://localhost:8080/song

Request body:
```json
{
	"name":"Wish you where here",
	"genre":"Progressive Rock",
	"artist":"Pink Floyd",
	"time":"04:54"
}
```

## Update song 
HTTP Request: PUT,  URL: http://localhost:8080/song

Request body:
```json
{
	"name":"Wish you where here",
	"genre":"Progressive Rock",
	"artist":"Pink Floyd",
	"time":"04:54"
}
```

## Find song
HTTP Request: POST,  URL: http://localhost:8080/song/find

Request by id:
```json
{
"_id":"5c5879f089d7c42f800b3703"
}
```

## Delete song 
HTTP Request: DELETE,  URL: http://localhost:8080/song

Request by id:
```json
{
"_id":"5c5879f089d7c42f800b3703"
}
```
