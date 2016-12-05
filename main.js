var x = 31;
var y = 27;
var itemList = [];

var initItemList = function(){
	itemList = [];
	for( var i = 0; i<y+1; i++){
		var row = [];
		for( var j = 0; j<x+1; j++){
			row.push(0);
		}
		itemList.push(row);
	}
}

var save = function(){
		localStorage.setItem("save", JSON.stringify(itemList));
}

var load = function(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	itemList = savegame;
}

$(document).ready(function(){
	
	if(localStorage.getItem("save") != null){
		load();
	} else {
		initItemList();
	}


	showItems();

	$("body").on('click',".item", function(){
		var id = this.id.substring(5);
		var res = id.split("-");
		toggleItem(res[1], res[0]);
	});
})

var toggleItem = function(x, y){
	itemList[y][x] = !itemList[y][x];
	save();
	showItems();
}

var showItems = function(){
	var html = "<div class='container' id='itemDiv'>";
	for( var i = 0; i<y+1; i++){
		html += "<div class='row'>";
		for( var j = 0; j<x+1; j++){
		
			if(itemList[i][j]){
				html += "<img class='item lit' id='item-" + i + "-" + j + "' src='images/item-" + i +"-" + j + ".png' alt=''>";
			} else {
				html += "<img class='item dim' id='item-" + i + "-" + j + "' src='images/item-" + i +"-" + j + ".png' alt=''>";
			}
				

		}
		html += "</div>";

	}

	html += "</div>";
	
	$("#itemList").html(html);
}