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
HTTP Request: POST,  URL: http://localhost:8080/songs
Request body:
```json
{
	"name":"Wish you where here",
	"genre":"Progressive Rock",
	"artist":"Pink Floyd",
	"time":"04:54"
}
```
