const maxVowels = (s , k) => {
    const vowels = ["a", "e", "i", "o", "u","A","E","I","O","U"];
    let maxNumberOfVowels = 0;
    for ( let i=0 ; i < s.length ;i++){
        if (vowels.includes(s[i])){
        let tempVowels = 0;
        for (let j=i ; j<k+i ; j++){
            if (vowels.includes(s[j])){
                tempVowels++;
            }
        }
        if (tempVowels > maxNumberOfVowels){
            maxNumberOfVowels = tempVowels;
        }
        }
    } return maxNumberOfVowels;
}

let s = "aeiuo";
let k = 3;
let data = maxVowels(s,k);
console.log(data);