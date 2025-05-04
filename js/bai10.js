function lowerCase(a){
    let result = '';
    for(let i=0; i< a.length; i++){
        let kytu = a[i];
        if(kytu === kytu.toUpperCase()){
            result += kytu.toLowerCase();
        }else{
            result += kytu.toLowerCase();
        }
    }
    a = result;
    console.log(a);
    return a;
}
function xoaKiTuTrungNhau(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}
function checkString(str){
    str = lowerCase(str);
    console.log(str);
    let strToArr = str.split('');
    let arr = [];
    let vowelChar = ['a', 'e', 'i', 'o', 'u'];
    for(let i=0; i<strToArr.length; i++){
        for(let j = 0; j<vowelChar.length; j++){
            if( strToArr[i] === vowelChar[j]){
                arr.push(vowelChar[j]);
            }
        }
    }
    xoaKiTuTrungNhau(arr);
    arr = arr.join(', ');
    document.write(arr);
    return arr;
}
checkString('Asudhnajsdosdhsdi');