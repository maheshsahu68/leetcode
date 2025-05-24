// gcdOfString = (str1, str2) => {
//     const min = Math.min(str1, str2);
//     let result = "";
//     for(let i = 0 ; i < min ; i++){
//         if (str1[i]==str2[i]){
//             result += (str1[i]);
//         }

//     }
//     return result;
// }

const gcdOfString = (str1,str2) => {
    if (str1 + str2 !== str2 + str1){
        return "";
    }
    else {
        const gcd = (a, b) => b === 0 ? a : gcd(b, a%b);
        const gcdLength = gcd (str1.length , str2.length);
        return str1.substring (0 , gcdLength);
    }
}
// const gcdOfStrings = (str1, str2) => {
//     if (str1 + str2 !== str2 + str1) {
//         return "";
//     }
//     const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
//     const gcdLength = gcd(str1.length, str2.length);
//     return str1.substring(0, gcdLength);
// }


const data = gcdOfString ("abc","abc");

console.log(data);