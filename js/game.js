class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

    monkey = createSprite(200,100);
    monkey.addAnimation("monkeyImage", monkey_img);
    monkey.velocityX = 5

    obstacleGroup = new Group();
    rotFruitGroup = new Group();
    pieGroup = new Group();
    
        console.log(frameCount)
       
        }
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                player.getPlayerAtEnd();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                         textSize(25);
                         fill("white");
                         text("Player 1 :" +allPlayers.player1.score,50,50);
                        text("Player 2 :" + allPlayers.player2.score, 50, 100);
                 
                 }
                
                if(player.score>=5){
                    gameState = 2; 
                    player.rank += 1;
                    Player.updatePlayerAtEnd(player.rank);
                    player.update();
                    this.showRank();
                    
                }
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,11));
                     switch(rand){
                         case 1: fruits.addImage("fruit1", fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                         case 6: fruits.addImage("fruit1", fruit6_img);
                         break;
                         case 7: fruits.addImage("fruit1", fruit7_img);
                         break;
                         case 8: fruits.addImage("fruit1", fruit8_img);
                         break;
                         case 9: fruits.addImage("fruit1", fruit9_img);
                         break;
                         case 10: fruits.addImage("fruit1", fruit10_img);
                         break;
                         case 11: fruits.addImage("fruit1", fruit11_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                       }

                 if(frameCount % 30 === 0){
                        this.addRotFruits()
                    }

                 if(frameCount % 40 === 0){
                    this.addObstacles()
                 }

                 if(frameCount % 45 === 0){
                    this.addPie()
                }
                 
                  if (player.index !== null) {
                      for (var i = 0; i < fruitGroup.length; i++) {
                          if (fruitGroup.get(i).isTouching(players)) {
                              fruitGroup.get(i).destroy();
                              player.score =player.score+1;
                              player.update();
                      }
                    }

                      if(obstacleGroup.isTouching(players)){
                       // gameState = 0;
                       // gameState = 1;
                        gameState = 2;
                       // gameState = 3;
                      }

                      if(rotFruitGroup.isTouching(players)){
                        rotFruitGroup.destroyEach()
                        player.score =player.score-2;
                        player.update();
                        }

                        if(pieGroup.isTouching(players)){
                            pieGroup.destroyEach()
                            player.score =player.score-1;
                            player.update();
                            }

                  }
                
                }

    
                showRank() {
                    alert("Awesome !! You finished the game! You rank is :" +player.rank)
                  }

                  gameOver() {
                    textSize(40)
                    fill("white")
                    text("GAME OVER",displayWidth/2-400,displayHeight/2-200)
                    }
    
    end(){
       console.log("Game Ended");
       console.log(player.rank)
       this.gameOver();
    }


    addObstacles()
    {       
            var x, y;
            //x= 200;
            x = random(0, width-100);
            //x = random(0);
            //x = random();

            y = 0
            var obstacle = createSprite(x, y);
            //obstacle.addImage("obstacle", obstacleImage);
            obstacle.velocityY = 4;
            
            var rand = Math.round(random(1,8));
                     switch(rand){
                         case 1: obstacle.addImage("obstacle1", mushroom1_img);
                         break;
                         case 2: obstacle.addImage("obstacle1", mushroom2_img);
                         break;
                         case 3: obstacle.addImage("obstacle1", mushroom3_img);
                         break;
                         case 4: obstacle.addImage("obstacle1", mushroom4_img);
                         break;
                         case 5: obstacle.addImage("obstacle1", mushroom5_img);
                         break;
                         case 6: obstacle.addImage("obstacle1", mushroom6_img);
                         break;
                         case 7: obstacle.addImage("obstacle1", mushroom7_img);
                         break;
                         case 8: obstacle.addImage("obstacle1", mushroom8_img);
                         break;
                        }
            obstacle.scale = 0.5;
            obstacleGroup.add(obstacle);
    }

    addRotFruits(){       
        var x, y;
        x = random(0, width-100);
        y = 0

        rotFruits = createSprite(x, y);
        rotFruits.velocityY = 5;
        var rand = Math.round(random(1,5));
         switch(rand){
                     case 1: rotFruits.addImage("rotFruit",rotFruit1_img);
                     break;
                     case 2: rotFruits.addImage("rotFruit", rotFruit2_img);
                     break;
                     case 3: rotFruits.addImage("rotFruit", rotFruit3_img);
                     break;
                     case 4: rotFruits.addImage("rotFruit", rotFruit4_img);
                     break;
                     case 5: rotFruits.addImage("rotFruit", rotFruit5_img);
                     break;
                     case 6: rotFruits.addImage("rotFruit", rotFruit6_img);
                     break;
                     case 7: rotFruits.addImage("rotFruit", rotFruit7_img);
                     break;
                     case 8: rotFruits.addImage("rotFruit", rotFruit8_img);
                     break;
                     case 9: rotFruits.addImage("rotFruit", rotFruit9_img);
                     break;
                    }
        rotFruits.scale = 0.5
        rotFruitGroup.add(rotFruits);
    }

    addPie(){       
        var x, y;
        x = random(0, width-100);
        y = 0

        pie = createSprite(x, y);
        pie.velocityY = 5;
        var rand = Math.round(random(1,5));
         switch(rand){
                     case 1: pie.addImage("fruit_pie",pie1_img);
                     break;
                     case 2: pie.addImage("fruit_pie", pie2_img);
                     break;
                     case 3: pie.addImage("fruit_pie", pie3_img);
                     break;
                     case 4: pie.addImage("fruit_pie", pie4_img);
                     break;
                     case 5: pie.addImage("fruit_pie", pie5_img);
                     break;
                    }
        pie.scale = 0.3
        pieGroup.add(pie);
    }

}