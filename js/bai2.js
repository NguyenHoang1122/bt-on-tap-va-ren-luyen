function checkTriangle(x,y,z){
    let result = '';
    let checkTamGiac = false;
    let checkTamGiacVuong = true;
    if(x + y > z && x + z > y && y + z > x){
        checkTamGiac = false;
        if(x < y && y > z){
            x*x + z*z === y*y ? checkTamGiacVuong = true : checkTamGiacVuong = false;
        }else if(z > x && z > y){
            x*x + y*y === z*z ? checkTamGiacVuong =  true:checkTamGiacVuong = false;
        }else if(x > z && x > y) {
        z * z + y * y === x * x ? checkTamGiacVuong = true : checkTamGiacVuong = false;
        }else{
            checkTamGiacVuong = false;
        }
    }
    else{
        checkTamGiac = true;
        checkTamGiacVuong = false;
    }
    result = checkTamGiac? 'Không phải là cạnh tam giác' :
        checkTamGiacVuong? 'Là 3 cạnh của tam giác vuông' : 'Chỉ là 3 cạnh của một tam giác';
    alert(result);
}
checkTriangle(3,5,4);