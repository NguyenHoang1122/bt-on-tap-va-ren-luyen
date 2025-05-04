let listProduct = [];
function displayProducts() {
    let tbody = document.getElementById('container-product');
    tbody.innerHTML = '';
    for (let i = 0; i < listProduct.length; i++) {
        let student = listProduct[i];
        let row = '<tr>';
        row += '<td>' + student.ma + '</td>';
        row += '<td>' + student.ten + '</td>';
        row += '<td>' + student.lop + '</td>';
        row += '<td>' + student.email + '</td>';
        row += '<td>' + student.ngaysinh + '</td>';
        row += '</tr>';
        tbody.innerHTML += row;
    }
}
function checkIdStudent(ma){
    let regex = /^HV-\d{4}$/;
    return regex.test(ma);
}
function checkBirthday(ngaysinh){
    let regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(ngaysinh);
}
function saveToLocalStorage(){
    localStorage.setItem('student', JSON.stringify(listProduct));
}
function loadFromLocalStorage(){
    let data = localStorage.getItem('student');
    if(data){
        listProduct = JSON.parse(data);
        displayProducts();
    }
}
function addStudent(){
    let idStudent = prompt('Nhập mã sinh viên theo định dạng HV-XXXX :');
    if(!checkIdStudent(idStudent)){
        alert('Mã học viên không đúng hãy nhập đúng định dạng HV-XXXX.');
        return;
    }
    for(let i = 0; i < listProduct.length; i++){
        if(listProduct[i].ma == idStudent){
            alert('Mã học viên này đã tồn tại.');
            return;
        }
    }
    let nameStudent = prompt('Hãy nhập tên học viên của bạn(tối đa 50 ký tự) :');
    if(nameStudent.length > 50){
        alert('Tên của bạn quá dài.');
        return;
    }
    let classStudent = prompt('Nhập lớp của bạn :');
    let emailStudent = prompt('Nhập địa chỉ Email của bạn :');
    let birthdayStudent = prompt('Nhập ngày sinh của bạn theo đúng định dạng dd/mm/yyyy :');
    if(!checkBirthday(birthdayStudent)){
        alert('Bạn đã nhập sai định dang.');
        return;
    }
    let student = {
        ma : idStudent,
        ten : nameStudent,
        lop : classStudent,
        email : emailStudent,
        ngaysinh : birthdayStudent,
    };
    listProduct.push(student);
    saveToLocalStorage();
    displayProducts();
}
function deleteStudent(){
    let idStudent = prompt('Nhập mã học viên cần xóa (HV-XXXX) :');
    let findStudent = false;
    if(!checkIdStudent(idStudent)){
        alert('Bạn đã nhập sai mã học viên.');
        return;
    }
    for(let i = 0; i < listProduct.length; i++){
        if(listProduct[i].ma == idStudent){
            let xacnhan = confirm('Bạn có chắc chắn muốn xóa ?');
            if(xacnhan){
                listProduct.splice(i, 1);
                saveToLocalStorage();
                displayProducts();
            }
            findStudent = true;
            break;
        }
    }
    if(!findStudent){
        alert('Học viên này không tồn tại.');
    }
}

function updateStudent(){
    let idStudent = prompt('Nhập mã học viên cần sửa (HV-XXXX) :');
    let findStudent = false;
    if(!checkIdStudent(idStudent)){
        alert('Bạn đã nhập sai mã học viên.');
        return;
    }
    for(let i = 0; i < listProduct.length; i++){
        if(listProduct[i].ma == idStudent){
            let nameStudent = prompt('Hãy nhập tên học viên của bạn(tối đa 50 ký tự) :',listProduct[i].ten);
            if(nameStudent.length > 50){
                alert('Tên của bạn quá dài.');
                return;
            }
            let classStudent = prompt('Nhập lớp của bạn :',listProduct[i].lop);
            let emailStudent = prompt('Nhập địa chỉ Email của bạn :',listProduct[i].email);
            let birthdayStudent = prompt('Nhập ngày sinh của bạn theo đúng định dạng dd/mm/yyyy :',listProduct[i].ngaysinh);
            if(!checkBirthday(birthdayStudent)){
                alert('Bạn đã nhập sai định dang.');
                return;
            }
            listProduct[i].ten = nameStudent;
            listProduct[i].lop = classStudent;
            listProduct[i].email = emailStudent;
            listProduct[i].ngaysinh = birthdayStudent;
            saveToLocalStorage();
            displayProducts();
            findStudent = true;
            break;
        }
    }
    if(!findStudent){
        alert('Mã học viên này không tồn tại.');
    }
}
window.onload = loadFromLocalStorage;