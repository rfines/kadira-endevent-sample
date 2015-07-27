// counter starts at 0
Session.setDefault('counter', 0);

Template.hello.helpers({
	blogs: function () {
	  	return Blogs.find();
	},
	comments:function(){
		if(this.comments){
			return Comments.find({_id:{$in:this.comments}});
		}
	},
	commentBody:function(){
		return this.body;
	},
	categories:function(){
		var c = Categories.find({blogId:this._id}).fetch(); 
		return _.pluck(c,"slug").join(", ");
	},
	commentorName:function(){
		var b = Bloggers.findOne({_id:this.bloggerId});
		if(b){
			return b.fullname;
		}
	}
});

Template.hello.events({
	'click button': function () {
	  	// increment the counter when button is clicked
	  	Session.set('counter', Session.get('counter') + 1);
	}
});
