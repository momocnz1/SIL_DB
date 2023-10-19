const form = document.getElementById('userForm');
 const apiUrl = "http://localhost:8000/users";
    fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const {
            users_id,
            fname,
            lname,
            sex,
            email,
            upassword,
            username
        } = data[0];
        getusers_id = users_id;
        getusername = username;
        getfname = fname;
        getlname = lname;
        getsex = sex;
        getemail = email;
        getupassword = upassword;

        userName.innerHTML = username; 
        usernameInput.Value = getusername;
      })
      .catch(error => {
        console.error("เกิดข้อผิดพลาดในการร้องขอ API: " + error);
      });
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