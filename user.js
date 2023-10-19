function fetchDataFromAPI() {
    const apiUrl = "http://localhost:8000/users";
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        document.getElementById('fnameValue').textContent = data.fname;
        document.getElementById('lnameValue').textContent = data.lname;
        document.getElementById('userIDValue').textContent = data.userID;
        document.getElementById('sexValue').textContent = data.sex;
        document.getElementById('emailValue').textContent = data.email;
      })
      .catch(error => {
        console.error("เกิดข้อผิดพลาดในการร้องขอ API: " + error);
      });
  }
  
  fetchDataFromAPI();
  