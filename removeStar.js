let removeStars = (s) => {
    let result = [];
    let max = s.length;
    for (let i=0; i<max ; i++){
        if (s[i] == "*"){
            result.pop();
        }
        else{
            result.push(s[i]);
        }
    }
    return result.join("")

}

let s = "leet**cod*e";
let data = removeStars(s);

console.log(data);
