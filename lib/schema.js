Comments = new Mongo.Collection('comments');
Categories = new Mongo.Collection('categories');
Blogs = new Mongo.Collection("blogs");
Bloggers = new Mongo.Collection("bloggers");

Schema = {};
Schema.category = new SimpleSchema({
    slug:{
        type:String,
    },
    blogId:{
    	type:String,

    }
});

Schema.comments = new SimpleSchema({
	body:{
		type:String
	},
	createdAt:{
		type:Date,
		defaultValue:new Date()
	},
	bloggerId:{
		type:String
	}
});

Schema.blog = new SimpleSchema({
	title:{
		type:String
	},
	comments:{
		type:[String],
		optional:true

	},
	body:{
		type:String
	},
	createdAt:{
		type:Date,
		defaultValue:new Date()
	},
	bloggerId:{
		type:String
	}
});