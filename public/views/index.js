var valuesToPlot = [0,2, 6, 1, 9, 5, 6, 6, 7, 8]

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
var pointab = line1.getAttribute('points');
for(var i = 0; i < valuesToPlot.length; i++){
    var x1 = x + (i * xAxisScalingFactor);
    var y1 = valuesToPlot[i] * yAxisScalingFactor;
    point.x = x + (i * xAxisScalingFactor);
    point.y = valuesToPlot[i] * yAxisScalingFactor;
    console.log('x:' + point.x);
    console.log('y:' + point.y);
    console.log(point);
    var pointa = ` ${x1},${y1} `;
    console.log(pointa);
    pointab += pointa;
    //line1.points.appendItem(pointa); 
    
}
console.log(pointab);
line1.setAttribute('points', pointab);



//transform='translate(0 300)';

//<g transform="translate(600 600)">
      // <polygon points="0,0 200,0 100,100" style="fill:lime;stroke:purple;stroke-width:1" />
    //</g>