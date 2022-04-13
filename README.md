# demo-app-2

Food Ordering

POST /place-order
GET /list-food-orders
POST /update-food-order


1. Swagger API Specification
2. Creating Folder structure for API
------------------------------------

src
	server.js --> setting up server
	route---> api endpoints
	services --> external API invocation
	constants -> enums
	config	--> env specific config // .env in the root
	controller --> where most of the logic be placed
	model	--> db schemea and some ORM integration
	types	--> define custom types
	utils
	auth	--> middleware related logics
				
	

webpack.config --> to build optimized build files. // serverless