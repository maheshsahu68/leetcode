const kidsWithCandies = (candies, extraCandies) => {
    kids = candies.length;
    max = Math.max(...candies);
    let result = []
    for(let i = 0 ; i < kids ; i++) {
        candies[i] += extraCandies;
        if (candies[i]>=max){
            console.log("true");
            result.push(true)
        }
        else {
            console.log("false");
            result.push(false)
        }
    }
    return result
};
let candies = [2,3,5,1,3];
let extraCandies = 3;
let data = kidsWithCandies (candies , extraCandies );
console.log(data);
