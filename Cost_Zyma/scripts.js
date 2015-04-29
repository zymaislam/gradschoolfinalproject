// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {
	'packages' : ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);
function drawChart() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Cost');
	data.addColumn({
		type : 'string',
		role : 'annotation'
	});
	data.addColumn('number', 'Percentage of people of the total');
	data.addColumn({
		type : 'string',
		role : 'annotation'
	});
	data.addColumn({
		type : 'number',
		role : 'interval'
	});

	data.addColumn({
		type : 'number',
		role : 'interval'
	});

	data.addRows(dhsData);

	var options = {
		'title' : 'How Much Pizza I Ate Last Night',
		'width' : 700,
		'height' : 1500,
		   intervals: { 'lineWidth': 4, 'barWidth': 0.5, 'color':'#a46eb7' },


		colors : ['#bad80a', '#e5f871'],
		dataOpacity : 0.6,
		annotations : {
			highContrast : true,
			textStyle: {
     fontName: 'arial',
  color: 'black',
      fontSize: 14,
      bold: false,
      italic: false,
         // The color of the text.
      auraColor: 'transparent', // The color of the text outline.
      opacity: 0.8},         // The transparency of the text.
			boxStyle : {
				//stroke : '#888', // Color of the box outline.
				//strokeWidth : 1, // Thickness of the box outline.
				rx : 10, // x-radius of the corner curvature.
				ry : 10, // y-radius of the corner curvature.
				gradient : {// Attributes for linear gradient fill.
					color1 : 'white', // Start color for gradient.
					color2 : 'white', // Finish color for gradient.
					x1 : '0%',
					y1 : '0%', // Where on the boundary to start and end the
					x2 : '100%',
					y2 : '100%', // color1/color2 gradient, relative to the
					// upper left corner of the boundary.
					useObjectBoundingBoxUnits : false // If true, the boundary for x1, y1,
					// x2, and y2 is the box. If false,
					// it's the entire chart.
				}
			}
		}
	};
	var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
	chart.draw(data, options);

}
