
//implementing function to call add element function by pressing enter

var input = document.getElementById("text1");

input.addEventListener("keyup", function(event) {
  if (event.keycode == 13 || event.which == 13) {
    add_element_to_array();
  }
});


//making the input array

var x = 0;
var inputArr = Array();

function add_element_to_array()
{

 var input  = parseFloat(document.getElementById("text1").value); 

 if(isNaN(input)){
  alert("Enter a valid number");
  document.getElementById("text1").value = "";
 } 
 else{
  inputArr[x] = input;
  x++;
  document.getElementById("text1").value = "";
  display_array();
 }
 
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<inputArr.length; y++)
   {
     e += "Element " + y + " = " + inputArr[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}





function up(){
  const inputASorted = inputArr.sort(function(a, b){return a-b});

  console.log("The UP will be \n")

  console.log(inputASorted + "\n");
}

function down() {
  const inputDSorted = inputArr.sort(function(a, b){return b-a});

  console.log("The Down will be \n")

  console.log(inputDSorted + "\n");
}

function maxArr(){
  console.log("The max will be \n")

  console.log(Math.max(...inputArr) + "\n");
}

function minArr(){
  console.log("The min will be \n")

  console.log(Math.min(...inputArr) + "\n");
}

function sum() {
  var sum = inputArr.reduce(function(a, b){
      return a + b;
  }, 0);

  console.log("The sum will be \n")

  console.log(sum + "\n");
}

function median() {

  const inputASorted = inputArr.sort(function(a, b){return a-b});
  let len = inputArr.length;
  const mid = Math.ceil(len / 2);

  const median =
    len % 2 == 0 ? (inputASorted[mid] + inputASorted[mid - 1]) / 2 : inputASorted[mid - 1];

  console.log("The Median will be \n")

  console.log(median + "\n");
}

function mean() {

  var sum = inputArr.reduce(function(a, b){
    return a + b;
  }, 0);

  console.log("The mean will be \n");

  sum *= 1.00;

  console.log(Number.parseFloat(sum/inputArr.length).toFixed(3) + "\n");
}

function mean_ret(values){
  var sum = values.reduce(function(a, b){
    return a + b;
  }, 0);


  return sum/values.length;
}

function std() {

  var avg = mean_ret(inputArr);
    
  var squareDiffs = inputArr.map(function(value){
    var diff = value - avg;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });
    
  var avgSquareDiff = mean_ret(squareDiffs);
  
  var stddev = Math.sqrt(avgSquareDiff);

  console.log("The Standard Deviation will be \n")

  console.log(Number.parseFloat(stddev).toFixed(3) + "\n");
}


function analysis(){

  console.log("The input is \n");

  console.log(inputArr + "\n");

  up();
  down();
  maxArr();
  minArr();
  sum();
  median();
  mean();
  std();

}



//end


