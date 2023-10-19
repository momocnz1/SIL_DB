const form = document.getElementById('userForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  const formDataObject = {};
  
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  const apiUrl = "http://localhost:8000/users";
  
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataObject)
    });

    if (response.ok) {
      const fname = formDataObject.fname;
      form.reset();
      alert('บันทึกข้อมูลสำเร็จแล้ว');
      const originalPageURL = 'profile.html'; 
      window.location.href = originalPageURL;
    } else {
      alert('มีข้อผิดพลาดในการส่งข้อมูล');
    }
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการส่งข้อมูล: " + error);
  }
});
