let reverseWords = (s) => {
    let array = s.replace(/\s+/g, ' ').trim();
    console.log(array);
    let arr = array.split(" ");
    let max = arr.length;
    let arr2 = [];
    for (let i=0 ; i<max ; i++){
        arr2[i] = arr[max-1-i];        
    }
    return arr2.join(" ");
};
let s = "a good   example";
let data = reverseWords(s);
console.log(data);