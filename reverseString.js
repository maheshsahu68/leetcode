// let reverseWords = (s) => {
//     let max = s.length ; 
//     for (let i=0 ; i<max ; i++){
//         for (let j=max-1; j>=0 ; j--){
//             if (s[i] == "a" || "e" || "i" || "o" || "u" ){
//                 if (s[j] == "a" || "e" || "i" || "o" || "u" ){
//                     let temp = s[i];
//                     s[i] = s[j];
//                     s[j] = temp;
//                 }
//             }
//         }
//     }
//     return s;
// };
const reverseVowels = (s) => {
    s=s.split("")
    const vowels = ["a", "e", "i", "o", "u","A","E","I","O","U"];
    let left = 0;
    let right = s.length - 1;

    while(left < right){
        if(vowels.includes(s[left]) &&vowels.includes(s[right])){
            [s[left], s[right]] =  [s[right], s[left]] 
            left++;
            right--;
        }
        else if(!vowels.includes(s[left]) &&vowels.includes(s[right])){
            left++
        } else if(vowels.includes(s[left]) && !vowels.includes(s[right])){
            right--
        } else if(!vowels.includes(s[left]) && !vowels.includes(s[right])){
            right--
            left++
        }

    }
    return s.join("");
};
let s = "aA"; // 
let data = reverseVowels(s);
console.log(data);
