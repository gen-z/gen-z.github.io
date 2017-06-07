var database = firebase.database().ref('channels/games/mobile');
//The callback function defined will happen one time
//"snapshot" is a snapshot of EVERYTHING in the database at the time the function's called
database.once("value", function(snapshot) {
//for each row in the snapshot of the database, do this inner callback function.
	snapshot.forEach(function(childSnapshot) {
	 //get the value of one row of the database
	 var row = childSnapshot.val();
	 //do stuff with that row
	 $("#messageBox").append("<p>" + row.name + ": " + row.message + "</p>");
 });//end of inner function

});//end of outer function
//////////////////////////////////////////////////////////////////////////////////////
$("#js").click(function() {  
	var database = firebase.database().ref('channels/games/mobile');
	var name = $('#name').val();
	var message = $("#messages").val();
	database.push({
		'name' : name,
		'message' : message
	});
	database.once("child_added", function(dataRow){
		var row = dataRow.val();
		$("#messageBox").append("<p>" + row.name + ": " + row.message + "</p>");
	}
	);
	$("#messages").val("");
	$("#name").val("");
});
///////////////////////////////////////////////////////////////////////////////////////
$("#").each( function() 
{
   // certain browsers have a bug such that scrollHeight is too small
   // when content does not fill the client area of the element
   var scrollHeight = Math.max(this.scrollHeight, this.clientHeight);
   this.scrollTop = scrollHeight - this.clientHeight;
});
