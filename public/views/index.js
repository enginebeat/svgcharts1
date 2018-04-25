var valuesToPlot = [0, 2, 6, 1, 9, 5, 6, 6, 7, 10]

var graph1 = document.getElementById('graph1a');
var graph1Rect = graph1.getBoundingClientRect(); // get the bounding rectangle
var xAxisMaxSize = graph1Rect.width; //get the svg window width
var yAxisMaxSize = graph1Rect.height; // get the svg window height


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
var x = 0;
var y = 0;
for(var i = 0; i < valuesToPlot.length; i++){
    point.x = x + (i * xAxisScalingFactor);
    point.y = valuesToPlot[i] * yAxisScalingFactor;
    line1.points.appendItem(point); 
    console.log(point.x);
    console.log(point.y);
}
//line1.style.fill = "none";
//line1.setAttribute("fill", "none");


