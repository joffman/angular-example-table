"use strict;"

describe("exampleTable", function() {

	 beforeEach(module("exampleTable"));

	 describe("ExampleTableCtrl using products", function() {

		 var $componentController;
		 var ctrl;
		 beforeEach(inject(function(_$componentController_) {
			 $componentController = _$componentController_;

			 // Create controller.
			 const products = [
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
			 const headers = [
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
			 const bindings = {
				 data: products,
				 headers: headers
			 };

			 ctrl = $componentController("exampleTable", null, bindings);
			 ctrl.$onInit();
		 }));

		 it("shouldn't sort the data on startup", function() {
			 expect(ctrl.orderByValue).toBe("");
		 });

		 it("should use an ascending sort order when a new id is selected for sorting", function() {
			 ctrl.toggleOrderBy("name");
			 expect(ctrl.orderByValue).toBe("name");
			 ctrl.toggleOrderBy("price");
			 expect(ctrl.orderByValue).toBe("price");
		 });

		 it("should toggle the sort order when an id is selected multiple times", function() {
			 ctrl.toggleOrderBy("name");
			 ctrl.toggleOrderBy("name");
			 expect(ctrl.orderByValue).toBe("-name");
			 ctrl.toggleOrderBy("name");
			 expect(ctrl.orderByValue).toBe("name");
			 ctrl.toggleOrderBy("name");
			 expect(ctrl.orderByValue).toBe("-name");
		 });

	 });

});
