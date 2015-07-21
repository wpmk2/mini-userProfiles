angular.module('userProfiles').controller('MainController', function(mainService){

	this.getUsers = mainService.getUsers();

});
