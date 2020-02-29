function ExampleTableCtrl($scope) {
	var self = this;
}

angular.module("exampleTable").component("exampleTable", {
	templateUrl: "example-table.html",
	controller: ["$scope", ExampleTableCtrl],
	bindings: {
		data: "<",
		headers: "<"
	}
});
