
Router.configure({
	layoutTemplate:"layout",
	waitOn:function(){
		return Meteor.subscribe("blogs");
	}
});
var key = '';
/* DASHBOARDS */
Router.map(function() {
	// Route for the landing page when user is not logged in
	this.route('hello', {
		path: '/',
	});
});