// Rover Object Goes Here
// ======================
// 'N' 'S' 'E' 'W'
const rover = { 'direction':'N','x':0,'y':0 }


// ======================
function turnLeft(rover){
  let dir = rover.direction;
  if( dir == 'N' ){
    rover.direction = 'W'
  }else if( dir == 'W' ){
    rover.direction = 'S'
  }else if( dir == 'S' ){
    rover.direction = 'E'
  }else{
    rover.direction = 'N'
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  let dir = rover.direction;
  if( dir == 'N' ){
    rover.direction = 'E'
  }else if( dir == 'E' ){
    rover.direction = 'S'
  }else if( dir == 'S' ){
    rover.direction = 'W'
  }else{
    rover.direction = 'N'
  }
  console.log("turnRight was called!");
}

function moveForward(rover){
    let dir = rover.direction;
    if( dir == "N" && rover.y > 0 ){ 
      rover.y--;
    }else if( dir == "S" && rover.y <= 9 ){
      rover.y++;
    }else if( dir == "E" && rover.x <= 9){
      rover.x++
    }else if( dir == "W" && rover.x > 0 ){
      rover.x--;
    }
  console.log("moveForward was called")
}

function moveBackward( rover ){
  let dir = rover.direction;
  if( dir == 'N' && rover.y <= 9 ){
    rover.y++;
  }else if( dir == 'S' && rover.y > 0 ){
    rover.y--;
  }else if( dir == 'E' && rover.x > 0 ){
    rover.x--;
  }else if( dir == 'W' && rover.x <= 9 ){
    rover.x++;
  }
}

function movements( list ){
  list = list.split('')
  for(let i = 0; i < list.length; i++ ){
    let listItem = list[i]
    if( listItem == 'r' ){
      turnRight( rover );
    }else if( listItem == 'l' ){
      turnLeft( rover );
    }else if( listItem == 'f' ){
      moveForward( rover );
    }else if( listItem == 'b' ){
      moveBackward( rover );
    }
  }
  console.log('ENd -> ', rover)
}
const list = 'rffbll'
movements( list )