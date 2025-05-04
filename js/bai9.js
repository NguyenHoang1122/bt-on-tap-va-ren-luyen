let n;
let arr = [];
let result = '';
do{
    n = +prompt('Nhap so luong phan tu mang(nhap so luong chan).');
}while(n %2 !== 0 || isNaN(n) || n <= 0){
    for(let i = 1; i <= n; i++){
        let number = +prompt(`Nhap phan tu thu ${i} trong mang`);
        arr.push(number);
    }
    let checkNumber = true;
    for(let j = 0; j < arr.length; j += 2){
        if(arr[j] > arr[j + 1]){
            checkNumber = false;
            break;
        }
    }
    result = checkNumber? 'OK' : 'NO';
    document.write(result);
}