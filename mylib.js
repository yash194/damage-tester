function hascollided(Lwall,Lbullet){
   bulletRightEdge=Lbullet.x+Lbullet.width;
   wallLeftEdge=Lwall.x;
   if(bulletRightEdge>=wallLeftEdge){
       return true;
   }
   return false;
   } 

  