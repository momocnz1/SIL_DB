function fetchDataFromAPI() {
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

        usernameValue.innerHTML = getusername; 
      })
      .catch(error => {
        console.error("เกิดข้อผิดพลาดในการร้องขอ API: " + error);
      });
  }
  function displayDataInHTML(data) {
    const element = document.getElementById("box"); 
    element.textContent = data; 
  }
  fetchDataFromAPI();
  