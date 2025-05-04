function isLetterOrDigit(arr){
    let letter = false;
    let digit =  false;
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (/^[0-9]$/.test(arr[i])){
            digit = true;
        }else if(/^[a-zA-Z]$/.test(arr[i])){
            letter = true;
        }
    }
    if(digit && letter){
        result += -1;
        document.write(result);
        return;
    }
    if(digit){
        result += 1;
        document.write(result);
        return;
    }
    if(letter){
        result += 0;
        document.write(result);
        return;
    }
}
isLetterOrDigit([1,2,4,6,8,3,2,7]);
isLetterOrDigit([1,2,4,'c',8,3,'a',7]);
isLetterOrDigit(['a','b','c','d','e','f','g','h','i']);