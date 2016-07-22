
Template.RecipeSingle.onCreated(function() {
var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('id');
		
		self.subscribe('singleRecipe', id);
	})

});

Template.RecipeSingle.helpers({
	recipes: () => {
		var id = FlowRouter.getParam('id');
		return Recipes.find({_id: id});
	}
});
