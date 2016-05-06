var express = require('express');
   var app = express();
   var PORT= process.env.PORT || 3000;
   var todos = [{
   	id: 1,
   	description: 'I have to go to market',
   	completed : true
   },

   {
   	id: 2,
   	description:'I have to meet my friend',
   	completed:true
   },

   {
   id: 3,
   description: 'I should go to home',
   completed : false
   }];

   app.get('/', function(req,res){
      res.send('Todo API PORT');
   });
     
     app.get('/todos', function (req,res ){
     	res.json(todos);
     });

     app.get('/todos/:id', function (req, res) {
     	var todoId = parseInt(req.params.id);
     	var matchedTodo;

     	todos.forEach (function (todo){
     		if (todoId === todo.id){
     			matchedTodo = todo;
     		}
     	});
     	if (matchedTodo){
     		res.json(matchedTodo);
     	}else{
     		res.status(404).send();
     	}
     	
     });
   app.listen(PORT, function(){
   	console.log('express listening on port ' + '!')
   });