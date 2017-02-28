# Link our persistent datasource

We're going to be setting up model objects to be transferred across our API, but to keep track of them, we'll need a persistent datasource to stash them in.

Go to our command line in the root directory we've been working in, type `lb datasource`, and we'll see the following:

### Make a name for our datasource

```
? Enter the data-source name: ComposeMongo
```

After we type in this name, we'll be presented with a list of database connectors that Loopback works with. 

For this workshop, we've created a database using [compose.io](https://compose.io) that we can use to work with.

Use our arrow buttons to scroll through the choices, and select `MongoDB (supported by StrongLoop)`.

### Choose MongoDB for our datasource

```
? Select the connector for ComposeMongo:
  IBM Cloudant DB (supported by StrongLoop)
  IBM DB2 for z/OS (supported by StrongLoop)
  Redis key-value connector (supported by StrongLoop)
❯ MongoDB (supported by StrongLoop)
  MySQL (supported by StrongLoop)
  PostgreSQL (supported by StrongLoop)
  Oracle (supported by StrongLoop)
(Move up and down to reveal more choices)
```

Loopback lets us configure datasources with ease. The first prompt will be for a connection string, which should be filled out like so:

### Enter MongoDB connection string
```
? Connection String url to override other settings (eg: mongodb://username:password@hostname:port/database): mongodb://productAdmin:loopback123@aws-us-east-1-portal.26.dblayer.com:17243,aws-us-east-1-portal.24.dblayer.com:17243/marketplaceDemo?ssl=true
```

Loopback will then prompt us for 5 other fields. Since we entered the full connection string, we can hit Enter for each field, as we don't need it, but this illustrates for us that we can enter the raw information if we don't have a connection string to copy and paste.

### Choose datasource information
```
? host:
? port:
? user:
? password:
? database:
```

The next prompt should ask if we want to install the MongoDB connector. Enter `y` to let `npm install` do it's thing.

And we're all set! In the next step, we're going to show how to start creating a model object, and take advantage of the datasource we've linked up.

**Next Step:** [Create a model](02-first-model.md)

