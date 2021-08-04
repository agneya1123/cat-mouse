
var garden,gardenImg;
var cat,catImg;
function preload() {
    //load the images here
    gardenImg=loadImage("tomAndJerryTemplate-master\images\garden.png");
   catImg=loadAnimation("tomAndJerryTemplate-master\images\cat1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden = createSprite(200,200);
garden.addImage(gardenImg);
garden.scale = 0.2;

cat = createSprite(200,200);
cat.addAnimation("cat",catImg);
cat.scale = 0.2;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}

