
/**
 * Create a table that is size x size large. If a table already exists, remove it. 
 * @param  {int} size which is the size of the grid
 * @return {}      
 */
function createGridTable(size){
	// If a table element already exists, remove it
	var rmv = document.getElementById('mytable');
	if(rmv){
		rmv.parentNode.removeChild(rmv);
	}
	
		var table = $('<table id="mytable"></table>');
		for(var i = 0; i<size; i++) {
			var row = $('<tr></tr>');
				for(var j = 0; j<size; j++){
					var col = $('<td></td>');
					col.append($('<div class = "col"></div>'));
					table.append(row);
					row.append(col);
				}
		}

		$('.container').append(table);
	
}

/**
 * Create a new grid, need to call document ready again to initialize the new tables
 * @return nothing
 */
function newGrid(){
	var newSize = window.prompt("How big should the new grid be?","16");
	createGridTable(parseInt(newSize,10));
	$(document).ready(function(){
		$('td').hover(
		function(){
			$(this).addClass('highlight');
		},
		function(){
			//$(this).removeClass('highlight');
		});
	});
	
}

/**
 * Document initalization. When HTML is done, will load a 16x16 grid at the start. When the mouse hovers over a 'pixel', it will make it black
 * @return {} nothing
 */
$(document).ready(function(){
	createGridTable(16);
	$('td').hover(
		function(){
			//alert("Enter");
			$(this).addClass('highlight');
		},
		function(){
			//$(this).removeClass('highlight');
		});
});