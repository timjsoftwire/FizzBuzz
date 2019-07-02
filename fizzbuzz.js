

for (i = 1; i <= 255; i++) {
    //store the message to print so far in an array
    var message = [];


    

    //record the position of the first B in the array, make it -1 if there is no B
    var firstBPos = -1;


    //basic fizzbang
    if (i%3 === 0) {
        if (i%5 == 0) {
            message.push("Fizz");
            message.push("Buzz");
            newBAdded(message.length-1);
            
        }
        else {
            message.push("Fizz");
        }
    }
    else if (i%5 == 0) {
        message.push("Buzz");
        newBAdded(message.length-1);
    }



    //7 replaces text by bang
    if (i%7 ==0) {
        message.push("Bang");

    }

    //eleven overrides multiples of 3, 5, and 7, no matter what's happened before it
    if (i%11==0) {
        message = ["Bong"];
        firstBPos = 0;
    }


    
    //13 appends Fezz before the first "B"
    if (i%13 ==0) {
        if ( firstBPos ==-1) {//if there is no B in message, add Fezz to the end
            message.push("Fezz");
        }
        else {//else, put Fezz in before the frist B
            message.splice(firstBPos, 0, "Fezz");
            firstBPos++;
        }
    }

    //Finally, 17 reverses everything that's happened before it
    if (i%17 == 0) {
        message.reverse();
        firstBPos = message.length - firstBPos-1;//i'm not completely sure this doesn't cause an off by one error but it's probably okay
                                                 //i don't use firstBPos again anyway
    }

    if(message.length === 0) {
        message = [i];
    } 
    console.log(i + ": " + message.join(""));
    
    //newBAdded takes the position of where a new B was added and changes firstBPos accordingly if necessary
    function newBAdded(position) {
        if (firstBPos ==-1) {
            firstBPos = position;
        }
        else {
            firstBPos = Math.min(position, firstBPos);
        }
    }
}