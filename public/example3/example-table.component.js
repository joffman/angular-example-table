function ExampleTableCtrl($scope) {
	var self = this;

	self.products = [
	{
		name: "Tuna",
		category: "Fish",
		price: 12.99
	},
	{
		name: "Joghurt",
		category: "Dairy",
		price: 3.23
	}
	];
}

angular.module("exampleTable").component("exampleTable", {
	templateUrl: "example-table.html",
	controller: ["$scope", ExampleTableCtrl],
	bindings: {
	}
});
