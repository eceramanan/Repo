function runAtRunTimeBeforeLoad(){
  var	db = window.sqlitePlugin.openDatabase({name: "NewsCast.db", createFromLocation: 1});
  db.transaction(function(tx) {
		tx.executeSql("update ConfigValues set value='http://dev-newscast.pantheon.io/wp-json/posts?filter[posts_per_page]=-1' where Key='PostURL';", [], function(tx, res) {
  			alert('test delete 12');
		  });
	});
  
}
function runAtRunTimeAfterLoad(){
  alert('test1');
  
}
