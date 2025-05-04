function checkEvenOddArray(arr){
    let evenNumber = false;
    let oddNumber = false;
    let result = '';
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            evenNumber = true;
        }else{
            oddNumber = true;
        }

        if(evenNumber && oddNumber){
            result += -1;
            document.write(result);
            return;
        }
    }
    if(evenNumber){
        result += 1;
        document.write(result);
        return ;
    }else if (oddNumber){
        result += 0;
        document.write(result);
        return;
    }
    result += -1;
    document.write(result);

}
checkEvenOddArray([0, 2, 4, 6]);