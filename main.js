const loginForm = document.querySelector(".login-form");
// โจทย์ : ให้สร้างฟังก์ชั่นเพื่อ validate(ตรวจสอบ) ค่าที่ submit จาก form
// 1. ทุก input ต้องไม่เป็นค่าว่างหรือ ใส่ space มาล้วนๆ
// 2. username ความยาวต้องมากกว่า 3 ตัวอักษร
//      - ตัด space หน้า-หลัง
//      (option) - และไม่มี space คั่นกลาง
//      - ห้ามนำหน้าด้วยตัวเลข
// 3. password ความยาวต้องมากกว่า 4 ตัวอักษร
//      (option) - ต้องมีทั้งตัวเลขและตัวอักษร
// ถ้า validate ไม่ผ่านให้เปลี่ยน input เป็นสีแดง
// ถ้า validate ผ่านให้ไปที่ https://www.example.com
const validateInput = (inputObj) => {
  for (let role in inputObj) {
    if (inputObj[role].trim() === "") {
        document.getElementById(role).style.backgroundColor = "red";
        return;
    }
}
  if (inputObj.username.trim().length <= 3 || /^\d/.test(inputObj.username.trim()) || /\s/.test(inputObj.username)) {
    document.getElementById("username").style.backgroundColor = "red";
    return;
  }
  if (inputObj.password.trim().length <= 4 || !/\d/.test(inputObj.password.trim()) || !/[a-zA-Z]/.test(inputObj.password.trim())) {
    document.getElementById("password").style.backgroundColor = "red";
    return;
  }
  alert('Login successful');
  window.location.assign('https://www.example.com');
};

const hdlLogin = (e) => {
  e.preventDefault();
  let allInput = loginForm.elements;
  let inputObj = {};
  for (let el of loginForm.elements) {
    inputObj[el.id] = el.value;
  }
  validateInput(inputObj);
};

loginForm.addEventListener("submit", hdlLogin);
