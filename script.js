function runAtRunTimeBeforeLoad(){
  var	db = window.sqlitePlugin.openDatabase({name: "NewsCast.db", createFromLocation: 1});
  db.transaction(function(tx) {
		tx.executeSql("select * from ConfigValues where Key='PostURL';", [], function(tx, res) {
  			alert('test delete');
		  });
	});
  
}
function runAtRunTimeAfterLoad(){
  alert('test1');
  
}
