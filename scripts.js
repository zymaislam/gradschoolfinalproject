// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {
	'packages' : ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);
function drawChart() {

	
	
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Category');
	data.addColumn('number', 'How much the DHS spent from 2011 till now                              ');
	data.addColumn({
		type : 'string',
		role : 'annotation'
	}); 
	
data.addColumn({type: 'string', role: 'tooltip'});
data.addColumn({
		type : 'string',
		role : 'style'
	}); 
	
	data.addColumn('number', 'How much it would have spent after Project Reconnect');
	data.addColumn({
		type : 'string',
		role : 'annotation'
	}); 
	data.addColumn({
		type : 'string',
		role : 'style'
	}); 

data.addColumn({type: 'string', role: 'tooltip'});

	data.addRows(dhsData);
		var options = {
			chartArea: {width: '80%', height: '60%'},
			bar: {groupWidth: "100%"},
			annotations: {
				alwaysOutside:false},
				annotations: {
      textStyle: {fontName: 'trebuchet MS'}},
   backgroundColor:'#FAFAFA',
		width : 1000,
		height : 600,
		colors : ['#7abd03',  '#590059'],
		
			
	
	
	
	
	
		legend: {position: 'top',alignment: 'end', textStyle: {color: '#283e7a', fontSize: 16, fontName: 'trebuchet MS'}
			 },
	vAxis: {
		
				
	
	 ticks: [ 0, 
{v:400000000, f:'$0.5 billion'}, 
{v:1000000000, f:'$1 billion'},
{v:2000000000, f:'$2 billion'},
{v:3000000000, f:'$3 billion'},
{v:4000000000, f:'$4 billion'},
{v:5000000000, f:'$5 billion'}, ] 

}, 
		
		
	 
		// Use an HTML tooltip.
		tooltip : {
			isHtml : true,
			showColorCode:true,
			
	textStyle:{
  fontName: 'trebuchet MS',

 
  bold: true,
  italic: false }
			
		},

		dataOpacity : 0.5,
		annotations : {
			alwaysOutside : true,

			textStyle : {
				fontName : 'arial',
				fontSize : 18,
				bold : false,
				italic : false,

				opacity : 0.8
			}
		},
		hAxis : {
			textStyle : {
				color : '#95a3ad',
				fontName : 'arial',
				fontSize : 26,
				bold : false,
				italic : false
			}

		}

	};
	var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
	chart.draw(data, options);

}
