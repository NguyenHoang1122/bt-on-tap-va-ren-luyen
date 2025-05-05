function find(x) {
    let result = '';
    if(!x.includes('/') || x.split('/').length !== 2){
        result = 'Không phải là phân số.';
        document.write(result);
        return;
    }
    let [tu,mau] = x.split('/');
    tu = Number(tu);
    mau = Number(mau);
    if (isNaN(tu) || isNaN(mau)) {
        result = 'Không phải là phân số.';
        document.write(result);
        return;
    }
    // if(!/^\d+$/.test(tu) || !/^\d+$/.test(mau)){
    //     result = 'Không phải là phân số.';
    //     document.write(result);
    //     return;
    // }
    if(mau === 0){
        result = 'Không phải là phân số.';
        document.write(result);
        return;
    }
    if(tu === 0){
        result = '0';
        document.write(result);
        return;
    }
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    let uocChung = Math.abs(gcd(tu,mau));
    tu = tu/uocChung;
    mau = mau/uocChung;
    if (mau < 0) {
        tu = -tu;
        mau = -mau;
    }
    if(mau === 1){
        result = `${tu}`;
    }else{
        result =`${tu}/${mau}`;
    }
    document.write(result);;
}
find('-22/8');
find('18/-9');
