let n;
let arr = [];
let result = '';
do{
    n = +prompt('Nhập số lượng phần tử muốn nhập.');
}while(isNaN(n) || n <= 0){
    for(let i = 0; i < n; i++){
        let number = +prompt(`Nhập phần tử thứ ${i+1}.`);
        arr.push(number);
    }
    let isDecreasing = true;
    for(let i = 1; i < n; i++){
        if(arr[i-1] <= arr[i]){
            isDecreasing = false;
            break;
        }
    }
    result = isDecreasing ? 'OK' : 'NO' ;
};
alert(result);