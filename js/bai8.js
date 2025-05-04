function isPrime(n) {
    if (n < 2 || isNaN(n)){
        return false;
    }
    for(let i = 2; i < Math.sqrt(n); i++ ){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}

function arrIsPrime(arr){
    let result = '';
    let prime = true;
    for(let i = 0; i < arr.length; i++){
        if(!isPrime(arr[i])){
            prime = false;
            break;
        }
    }
    result =  prime? 'true' : 'false';
    document.write(result);
    return;
}
arrIsPrime([3,5,7,11]);
arrIsPrime([1,3,4,7,11]);
arrIsPrime([1,3,4,'a',11]);