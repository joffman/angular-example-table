angular.module("exampleApp")
.controller("exampleAppCtrl", ["$scope", function($scope) {
	$scope.products = [
	{
		name: "Tuna",
		category: "Fish",
		price: 12.99
	},
	{
		name: "Apple",
		category: "Fruit",
		price: 1.95
	},
	{
		name: "Banana",
		category: "Fruit",
		price: 3.35
	},
	{
		name: "Joghurt",
		category: "Dairy",
		price: 2.23
	}
	];

	$scope.headers = [
	{
		id: "name",
		title: "Name"
	},
	{
		id: "category",
		title: "Category"
	},
	{
		id: "price",
		title: "Price"
	}
	];
}]);
