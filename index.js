// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
    const hqLocation = 42 
    return Math.abs(someValue - hqLocation)
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(start - destination);
    return distanceInBlocks * 264;
}

function calculatesFarePrice (start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    }
    else if (distance>=400 && distance<=2000){
        return Math.abs(distance-400)*0.02;
    }
    else if(distance>=2000 && distance<=2500){
        return 25;
    }
    else if (distance > 2500){
        return 'cannot travel that far';
    }
}