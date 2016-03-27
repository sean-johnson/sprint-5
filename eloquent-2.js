// Looping a Triangle

var triangle = "#";

while (triangle.length <= 8) {
  console.log(triangle);
  triangle += "#";
}
  console.log(triangle);

 // Fizz Buzz 

 for (var number = 1; number <= 100; number++) {
  
	if ( number % 5 ===0 && number % 3 ===0) {
		console.log("FizzBuzz");
	} else if ( number % 3 === 0 ) { 
		console.log("Fizz");
	} else if ( number % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(number);
	}
}

// Chess Board

var size = 8; 
var chessBoard = "";

for (var height = 0; height < size; height++) {   
  for (var width = 0; width < size; width++) {
    if ((width + height) % 2 == 0) {
      chessBoard += " ";
    } else {
      chessBoard += "#";
    }
  }
  chessBoard += "\n";
}

console.log(chessBoard);

/* I was on this challenge for like 1 hour trying to figure this out - I ended up doing some research and found this elegant solution, it stumped me because of its 'complex' simplicity... I am sorry I didn't solve this myself */
 