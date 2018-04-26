var valuesToPlot = [0,2, 6, 1, 9, 5, 6, 6, 7, 8]



var graph1 = document.getElementById('graph1a');
var graph1Rect = graph1.getBoundingClientRect(); // get the bounding rectangle

var windowWidth = graph1Rect.width; //get the svg window width
var windowHeight = graph1Rect.height; // get the svg window height

var xAxisLabelsFactor = windowWidth * 0.1;
var yAxisLabelsFactor = windowHeight * 0.1;

var xAxisMaxSize = windowWidth - xAxisLabelsFactor; //get the svg window width
var yAxisMaxSize = windowHeight - yAxisLabelsFactor; // get the svg window height
//var xAxisMaxSize = graph1Rect.width; //get the svg window width
//var yAxisMaxSize = graph1Rect.height; // get the svg window height

 

var largestNumber = Math.max.apply(null, valuesToPlot); // get the largest Number to be displayed on the given axis 

var yAxisScalingFactor = yAxisMaxSize/largestNumber; // this will give you the max divisions size for the graph

/* to calculate X Axis Scaling factor i.e. size of the
interval bettween values (big division max size).
I am using the array lenght but it could be time or whatever you use for the axis. 
*/
var xAxisScalingFactor = xAxisMaxSize/valuesToPlot.length;

console.log(xAxisScalingFactor);
console.log(yAxisScalingFactor);
console.log(largestNumber);

var point = graph1.createSVGPoint();
var line1 = document.getElementById('line1');

var x = xAxisLabelsFactor; //adjust for axis origin
var y = yAxisLabelsFactor; //adjust for axis origin

var pointab = line1.getAttribute('points');
for(var i = 0; i < valuesToPlot.length; i++){
    var x1 = x + (i * xAxisScalingFactor);
    var y1 = y+ (valuesToPlot[i] * yAxisScalingFactor);
    var pointa = ` ${x1},${y1} `;
    console.log(pointa);
    pointab += pointa;
    
    
}
console.log(pointab);
line1.setAttribute('points', pointab);
/* X Axis */
/* the axis itself */
var xmlns = "http://www.w3.org/2000/svg";
var xAxis = document.createElementNS(xmlns, 'line');
xAxis.setAttribute('x1', xAxisLabelsFactor);
xAxis.setAttribute('y1', yAxisLabelsFactor);
xAxis.setAttribute('x2', (xAxisMaxSize));
xAxis.setAttribute('y2', yAxisLabelsFactor);
xAxis.setAttribute('stroke', 'black');
xAxis.setAttribute('stroke-width', 2);
graph1.appendChild(xAxis);

/* Y Axis */
var yAxis = document.createElementNS(xmlns, 'line');
yAxis.setAttribute('x1', xAxisLabelsFactor);
yAxis.setAttribute('y1', yAxisLabelsFactor);
yAxis.setAttribute('x2', xAxisLabelsFactor );
yAxis.setAttribute('y2', (yAxisMaxSize));
yAxis.setAttribute('stroke', 'black');
yAxis.setAttribute('stroke-width', 2);
graph1.appendChild(yAxis);
