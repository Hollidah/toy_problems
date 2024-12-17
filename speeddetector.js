function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
        return;
    }

    
    const points = Math.ceil((speed - speedLimit) / kmPerPoint);

    if (points > 12) {
        console.log("License suspended");
    } else {
        console.log(`Points: ${points}`);
    }
}


checkSpeed(55); 
checkSpeed(80); 
checkSpeed(110); 
checkSpeed(180); 


