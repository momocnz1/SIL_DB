const apiUrl = "http://localhost:8000/users"; // เปลี่ยน URL เป็น URL ของ API ของคุณ
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // ทำอะไรกับข้อมูลที่คุณได้รับ เช่น แสดงผลในหน้าเว็บ
    console.log(data); // แสดงข้อมูลในคอนโซล
  })
  .catch(error => {
    console.error("เกิดข้อผิดพลาดในการร้องขอ API: " + error);
  });
  const fnameValue = data.fname; // data.fname คือข้อมูลที่คุณได้รับจาก API
  const fnameElement = document.getElementById('fnameValue'); // เลือก HTML element ด้วย ID
  fnameElement.textContent = fnameValue; // แสดงข้อมูลใน HTML element