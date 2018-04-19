var valuesToPlot = [0, 2, 6, 1, 9, 5, 6, 6, 7, 10]

var graph1 = document.getElementById('graph1a');
var graph1Rect = graph1.getBoundingClientRect(); // get the bounding rectangle
var xAxisMaxSize = graph1Rect.width;
var yAxisMaxSize = graph1Rect.height;


var largestNumber = Math.max.apply(null, valuesToPlot);
var yAxisScalingFactor = yAxisMaxSize/largestNumber;

/* to calculate X Axis Scaling factor i.e. size of the
interval bettween values. 
*/
var xAxisScalingFactor = xAxisMaxSize/valuesToPlot.length;

console.log(xAxisScalingFactor);
console.log(yAxisScalingFactor);
console.log(largestNumber);