var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var fruit6_img, fruit7_img, fruit8_img, fruit9_img, fruit10_img, fruit11_img;
var rotFruits;
var rotFruitGroup;
var rotFruit1_img, rotFruit2_img, rotFruit3_img, rotFruit4_img, rotFruit5_img;
var rotFruit6_img, rotFruit7_img, rotFruit8_img, rotFruit9_img;
var mushroom1_img, mushroom2_img, mushroom3_img, mushroom4_img, mushroom5_img;
var mushroom6_img, mushroom7_img, mushroom8_img
var pie;
var pieGroup;
var pie1_img, pie2_img, pie3_img, pie4_img, pie5_img;
var monkey, monkey_img
var player_img;
var player1score =0;
var player2score =0;

var obstacleGroup,obstacle,obstacleImage;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/fruit_apple.png");
  fruit2_img = loadImage("images/fruit_banana.png");
  fruit3_img = loadImage("images/fruit_cherry.png");
  fruit4_img = loadImage("images/fruit_grape.png");
  fruit5_img = loadImage("images/fruit_melon.png");
  fruit6_img = loadImage("images/fruit_orange.png");
  fruit7_img = loadImage("images/fruit_plum.png");
  fruit8_img = loadImage("images/fruit_strawberry.png");
  fruit9_img = loadImage("images/fruit_watermelon.png");
  fruit10_img = loadImage("images/fruit_pear.png");
  fruit11_img = loadImage("images/fruit_pineapple.png");
  fruitGroup = new Group();
  rotFruit1_img = loadImage("images/rotApple.png");
  rotFruit2_img = loadImage("images/rotApricot.png");
  rotFruit3_img = loadImage("images/rotAvocado.png");
  rotFruit4_img = loadImage("images/rotBanana.png");
  rotFruit5_img = loadImage("images/rotCherry.png");
  rotFruit6_img = loadImage("images/rotLemon.png");
  rotFruit7_img = loadImage("images/rotMango.png");
  rotFruit8_img = loadImage("images/rotOrange.png");
  rotFruit9_img = loadImage("images/rotPear.png");
  mushroom1_img = loadImage("images/mushroom_1.png");
  mushroom2_img = loadImage("images/mushroom_2.png");
  mushroom3_img = loadImage("images/mushroom_3.png");
  mushroom4_img = loadImage("images/mushroom_4.png");
  mushroom5_img = loadImage("images/mushroom_5.png");
  mushroom6_img = loadImage("images/mushroom_6.png");
  mushroom7_img = loadImage("images/mushroom_7.png");
  mushroom8_img = loadImage("images/mushroom_8.png");
  pie1_img = loadImage("images/pie_cherry.png")
  pie2_img = loadImage("images/pie_coffee.png")
  pie3_img = loadImage("images/pie_mint.png")
  pie4_img = loadImage("images/pie_raspberry.png")
  pie5_img = loadImage("images/pie_strawberry.png")
  monkey_img = loadAnimation("images/monkey/1.png","images/monkey/1.png","images/monkey/2.png","images/monkey/3.png",
  "images/monkey/4.png","images/monkey/5.png","images/monkey/6.png","images/monkey/7.png","images/monkey/8.png",
  "images/monkey/9.png","images/monkey/10.png","images/monkey/11.png","images/monkey/12.png","images/monkey/13.png",
  "images/monkey/14.png","images/monkey/15.png","images/monkey/16.png","images/monkey/17.png","images/monkey/18.png",
  "images/monkey/19.png","images/monkey/20.png")
 
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}