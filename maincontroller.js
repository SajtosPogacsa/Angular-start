app.controller('MainController', function($scope, $http, $location, $timeout) {
	$scope.name = ""
	$scope.text = "Kattints rám!"

	$scope.emberek = [
		{
			name: "Péter",
			age: 20,
			csajok: ["Sára"]
		},
		{
			name: "Lajos",
			age: 20,
			csajok: ["Liza", "Kékes"]
		}
	]

	$scope.changeText = function(){
		$scope.text = "Rám kattintottál!!!"
	}
})