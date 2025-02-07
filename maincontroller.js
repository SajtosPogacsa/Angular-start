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
			age: 12,
			csajok: ["Liza", "Kékes"]
		},
		{
			name: "Gézuka",
			age: 10,
			csajok: ["Liza", "Kékes", "Péter", "Olajos"]
		}
	]

	$scope.changeText = function(){
		$scope.text = "Rám kattintottál!!!"
	}

	$scope.update = function(){
		console.log("ASD")

	}
})