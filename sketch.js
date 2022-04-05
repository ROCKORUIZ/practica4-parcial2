
function setup(){
  var canvas = createCanvas(1000,800);
  database=firebase.database();
  producto=new Producto();
  form=new Form();
  form.display();

}

function draw(){
background("silver")

}
