function findMaxNumber(n){
    let result = '';
    let number = true;
    n = n.toString();
    if(n.length !== 4){
        number = false;
    }
    let number1 = [n[0], n[1], n[2]];
    let number2 = [n[1], n[2], n[3]];
    let number3 = [n[0], n[1], n[3]];
    let number4 = [n[0], n[2], n[3]];
    number1 = Number(number1.join(''));
    number2 = Number(number2.join(''));
    number3 = Number(number3.join(''));
    number4 = Number(number4.join(''));
    let arr = [number1, number2, number3, number4];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if( max < arr[i]){
            max = arr[i];
        }
    }
    result =  number ? max : -1 ;
    document.write(result);
}

findMaxNumber(9939);