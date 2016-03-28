angular.module('app')
.factory('userDetails',function(){
	return{
	username :'',
	email:'',
	isActive:true,
	getUsername:function(){
		return this.username;
	},
	setUsername:function(name){
		this.username=name;
	},
	getEmail:function(){
		return this.email;
	},
	setEmail:function(email){
		this.email=email;
	},
	getStatus:function(){
		return this.isActive;
	},
	setStatus:function(status){
		this.isActive = status; 
	}
}
})