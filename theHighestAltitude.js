let largestAltitude = (gain) => {
    let result = 0 ;
    let max = gain.length;
    let next = 0;
    // next = gain[0];
    for (let i=0 ; i < max ; i++){        
        next = gain [i] + next;
        if (result < next) {
            result = next;
        }
    }   
    return result;
};

let gain = [52,-91,72]
// let gain = [-4,-3,-2,-1,4,3,2]

let data = largestAltitude(gain);
console.log (data);