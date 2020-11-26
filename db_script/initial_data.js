db.getCollection('products').insert([
    {
        "_id" : ObjectId("5fbefb509e20db551723cd09"),
        "name" : "Ariel Matic Detergent Pack",
        "description" : "Ariel Matic 3in1 PODs Detergent Pack",
        "price" : 30.0,
        "created" : ISODate("2020-11-26T00:48:16.503Z"),
        "lastModified" : ISODate("2020-11-26T00:48:16.503Z"),
        "isActive" : true,
        "isDeleted" : false
    },
    {
        "_id" : ObjectId("5fbefb779e20db551723cd0a"),
        "name" : "BRU Instant Coffee",
        "description" : "BRU Instant Coffee",
        "price" : 20.0,
        "created" : ISODate("2020-11-26T00:48:55.124Z"),
        "lastModified" : ISODate("2020-11-26T00:48:55.124Z"),
        "isActive" : true,
        "isDeleted" : false
    },
    {
        "_id" : ObjectId("5fbefc179e20db551723cd0b"),
        "name" : "Colgate Toothpaste",
        "description" : "Colgate Strong Teeth Anticavity Toothpaste",
        "price" : 50.0,
        "created" : ISODate("2020-11-26T00:51:35.048Z"),
        "lastModified" : ISODate("2020-11-26T00:51:35.048Z"),
        "isActive" : true,
        "isDeleted" : false
    },
    {
        "_id" : ObjectId("5fbefc959e20db551723cd0c"),
        "name" : "Dragon Fruit",
        "description" : "Dragon Fruit - Nutrition",
        "price" : 15.0,
        "created" : ISODate("2020-11-26T00:53:41.808Z"),
        "lastModified" : ISODate("2020-11-26T00:53:41.808Z"),
        "isActive" : true,
        "isDeleted" : false
    }
]);


db.getCollection('promotions').insert([
    {
        "_id" : ObjectId("5fbefecd9e20db551723cd0d"),
        "name" : "Cart Amount promotion",
        "description" : "Cart Amount promotion",
        "promotionCode" : "PROMO20",
        "promotionType" : "cart",
        "promotionAmount" : 150.0,
        "promotionValue" : 20.0,
        "startDate" : ISODate("2020-11-26T01:03:09.122Z"),
        "endDate" : ISODate("2021-11-26T00:00:00.000Z"),
        "created" : ISODate("2020-11-26T01:03:09.123Z"),
        "lastModified" : ISODate("2020-11-26T01:03:09.123Z"),
        "isActive" : true,
        "isDeleted" : false
    },
    {
        "_id" : ObjectId("5fbf002a9e20db551723cd0e"),
        "name" : "Buy 3 discount",
        "description" : "Buy 3 discount on Ariel Matic Detergent Pack",
        "promotionCode" : "PROMO315",
        "promotionType" : "product",
        "productId" : ObjectId("5fbefb509e20db551723cd09"),
        "promotionQty" : 3.0,
        "promotionValue" : 15.0,
        "startDate" : ISODate("2020-11-26T01:08:58.607Z"),
        "endDate" : ISODate("2021-11-26T00:00:00.000Z"),
        "created" : ISODate("2020-11-26T01:08:58.607Z"),
        "lastModified" : ISODate("2020-11-26T01:08:58.607Z"),
        "isActive" : true,
        "isDeleted" : false
    },
    {
        "_id" : ObjectId("5fbf00779e20db551723cd0f"),
        "name" : "Buy 2 discount",
        "description" : "Buy 2 discount on BRU Instant Coffee",
        "promotionCode" : "PROMO25",
        "promotionType" : "product",
        "productId" : ObjectId("5fbefb779e20db551723cd0a"),
        "promotionQty" : 2.0,
        "promotionValue" : 5.0,
        "startDate" : ISODate("2020-11-26T01:10:15.700Z"),
        "endDate" : ISODate("2021-11-26T00:00:00.000Z"),
        "created" : ISODate("2020-11-26T01:10:15.700Z"),
        "lastModified" : ISODate("2020-11-26T01:10:15.700Z"),
        "isActive" : true,
        "isDeleted" : false
    }
]);

db.getCollection('users').insert(
	[
		{
			"_id" : ObjectId("5fbf02fb9e20db551723cd10"),
			"name" : "Winston",
			"emailId" : "winston123@mail.com",
			"password" : "fe12123",
			"mobileNumber" : "8472923744",
			"created" : ISODate("2020-11-26T01:20:59.434Z"),
			"lastModified" : ISODate("2020-11-26T01:20:59.434Z"),
			"isActive" : true,
			"isDeleted" : false
		},
		{
			"_id" : ObjectId("5fbf25189e20db551723cd11"),
			"name" : "Rey",
			"emailId" : "Rey123@mail.com",
			"password" : "e536e7f",
			"mobileNumber" : "9343523744",
			"created" : ISODate("2020-11-26T03:46:32.355Z"),
			"lastModified" : ISODate("2020-11-26T03:46:32.355Z"),
			"isActive" : true,
			"isDeleted" : false
		},
		{
			"_id" : ObjectId("5fbf25319e20db551723cd12"),
			"name" : "Jill",
			"emailId" : "jill123@mail.com",
			"password" : "e536e7f",
			"mobileNumber" : "7343523744",
			"created" : ISODate("2020-11-26T03:46:57.948Z"),
			"lastModified" : ISODate("2020-11-26T03:46:57.948Z"),
			"isActive" : true,
			"isDeleted" : false
		},
		{
			"_id" : ObjectId("5fbf25589e20db551723cd13"),
			"name" : "Solo",
			"emailId" : "solo123@mail.com",
			"password" : "e536e7f",
			"mobileNumber" : "7343523744",
			"created" : ISODate("2020-11-26T03:47:36.795Z"),
			"lastModified" : ISODate("2020-11-26T03:47:36.795Z"),
			"isActive" : true,
			"isDeleted" : false
		}
	]);