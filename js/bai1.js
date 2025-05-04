let n;
let arr = [];
let result = '';
do{
    n = +prompt('Nhap do dai mang(khong qua 20 phan tu).');
}while(isNaN(n) || n <= 0 || n > 20){
    for(let i = 0; i < n; i++) {
        let number = +prompt(`nhap phan tu thu ${i+1} :`);
        arr.push(number);
    }
    let isIncreasing = true;
    for( let j = 1; j < n; j++){
        if(arr[j-1] >= arr[j]){
            isIncreasing = false;
            break;
        }
    }
    result = isIncreasing ? 'OK':'NO';
}
alert(result);
