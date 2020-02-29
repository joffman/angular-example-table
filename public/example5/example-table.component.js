function ExampleTableCtrl($scope) {
	var self = this;

	//
	// Data members.
	//
	self.orderById = "";
	self.ascending = true;
	self.orderByValue = "";

	//
	// Private functions.
	//
	var setOrderByValue = function() {
		self.orderByValue = (self.ascending ? "" : "-") + self.orderById;
	};

	//
	// Public functions.
	//
	self.toggleOrderBy = function(id) {
		if (self.orderById == id) {
			self.ascending = !self.ascending;
		} else {
			self.orderById = id;
			self.ascending = true;
		}
		setOrderByValue();
	};

	self.$onInit = function() {
		setOrderByValue();
	};
}

angular.module("exampleTable").component("exampleTable", {
	templateUrl: "example-table.html",
	controller: ["$scope", ExampleTableCtrl],
	bindings: {
		data: "<",
		headers: "<"
	}
});
