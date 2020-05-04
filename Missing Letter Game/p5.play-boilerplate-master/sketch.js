var words=[];
var definitions=[];
var rand;

function preload(){
  bookImage=loadImage("book.png");

}
function setup() {
  createCanvas(1000,1000);
  words=["outline","termination","missing","procrastinating"];
  definitions=["A line or set of lines enclosing or indicating the shape of an object in a sketch or diagram.",
               "The action of terminating something or the fact of being terminated.",
               "Not present or included when expected or supposed to be.",
               "Delay or postpone action; put off doing something."]
  rand=Math.round(random(0,3));
  
}


function draw() {
  background(bookImage); 
  text(words[rand],400,200); 
  drawSprites();
}