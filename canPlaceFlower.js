const canPlaceFlowers = (flowerbed, n) => {
    let count = 0;
    for (let i=0 ; i < flowerbed.length ; i++ ){
        let prev = i-1;
        let next = i+1;
        if (getValue (flowerbed ,prev) + getValue (flowerbed ,i) + getValue (flowerbed ,next) === 0){
            flowerbed[i] = 1 ;
            count++;
        }
        if (count >= n) {
            return true;
        }
    }
    return count >=n ;
};
let flowerbed = [1,0,0,0,1];
let getValue = (flowerbed, i) => {
    if (i < 0 || i >= flowerbed.length) {
        return 0;
    }
    return flowerbed[i];
}

let n = 1;
let data = canPlaceFlowers (flowerbed , n);
console.log(data);
