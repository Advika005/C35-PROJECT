var database;
var playerCount;
function setup() {
  createCanvas(1420,600);
  database = firebase.database();
  form = new Form();
  form.display();
  person = new Data();
  person.getCount();
}

function draw() {
  background(0,255,255);  

  
  
}
