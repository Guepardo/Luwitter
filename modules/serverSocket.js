var Server = require("socket.io"); 


var serverSocket = {}; 
//Ainda não foi adicionando a camada de segurança; 
serverSocket.init = function(server){
	this.io = new Server(server); 	

	this.io.on('connection',function(socket){
		socket.on('new_luwitte',function(){
			socket.broadcast.emit("new_luwitte"); 
		}); 
	}); 
}

module.exports = serverSocket; 