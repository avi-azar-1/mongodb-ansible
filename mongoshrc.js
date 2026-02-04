print ("") ;
print ("*************************************") ;
print ("connecting to mongodb, version " +db.serverStatus().version) ;
print (new Date().toString().substr(0,25));
print ("*************************************") ;
print ("") ;

//db.setSlaveOk()
//depracted - if you need to read from slave/secondary, use mongo.setReadPref()

host = db.serverStatus().host

//this part of the prompt was copied from v1.0 and not validated- check again when you have replica set, sharding
repl = ""
if (db.serverStatus().hasOwnProperty("repl")) {
	if (db.isMaster().ismaster) {
		repl = "(" + db.isMaster().setName + ":" + "primary)"
	}

	if (db.isMaster().secondary) {
		repl = "(" + db.isMaster().setName + ":" + "seconday)"
	}	

	if (db.isMaster().arbiterOnly) {
		repl = "(" + db.isMaster().setName + ":" + "arbiter)"
	}
}

prompt = function() {
	return db.getName() + "@" + host + repl + " > " ;
}

function desc(collection) {
        return Object.keys(collection);
}

function describe(collection) {
        return Object.keys(collection);
}

