#npm i to install the node dependencies

#if config.env if not there add the file
touch config.env
And add the following contents
    PORT=8000
    DB_USERNAME=<username>
    DB_PASSWORD=<password>
    DATABASE=DB Connection string with password field masked as <DB_PASSWORD>
If sure pm2/nodemon is installed
#pm2 
sudo pm2 start server.js --name wr_machine_test 
#nodemon 
sudo nodemon server.js

#node 
node server.js