const server = require('./config/server')
require('./config/database')

require('./config/routes')(server)//chama a funcao do routes.js passando o service como parametro