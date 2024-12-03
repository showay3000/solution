function checkSpeed() {
    
    let speed = prompt("Enter the speed of the car:");


     
    if (isNaN(speed) || speed < 0) {
        alert("Invalid input! Please enter a positive number for speed.");
        return; 
    }

    const speedLimit = 70; 
    const kmPerPoint = 5;  

    if (speed <= speedLimit) {
        alert("Ok");

    
        // Speed limit
    } else {
        const Points = Math.floor((speed - speedLimit) / kmPerPoint);

        if (demeritPoints > 12) {
            alert("Your license registration is suspended");
        } else {
            alert(Points: {Points});
        }
    }
}
 
checkSpeed();