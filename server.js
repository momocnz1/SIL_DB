const express = require('express')
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const moment = require('moment');
const cors = require('cors')
const app = express()
const port = 8000;

const connection = {
  "host":"127.0.0.1",
  "user":"root", 
  "database":"sil"
}
app.use(cors())
app.use(bodyParser.json());
app.get('/users' , async (req, res) => {
  const conn =  await mysql.createConnection(connection);
  const [data] = await conn.query("SELECT * FROM users");
  conn.end();
  res.json(data);
});

app.post('/users' , async(req, res) => {
  try {
      const conn =  await mysql.createConnection(connection);
      const [maxId] = await conn.query("SELECT MAX(users_id) AS max_id FROM users");
      let nextId = 1;

    if (maxId[0].max_id) {
        nextId = parseInt(maxId[0].max_id) + 1;
    }
      const [data] = await conn.query(
          "INSERT INTO users (`users_id`,`fname`, `lname`, `sex`, `email`, `upassword`,`username`) VALUES (?,?, ?, ?, ?, ?,?)",
           [
            nextId, 
            req.body.fname,
            req.body.lname,
            req.body.sex,
            req.body.email,
            req.body.upassword,
            req.body.username,
            1
          ])
      conn.end(); 
      res.json({
          "message": "บันทึกข้อมูลสำเร็จแล้ว",
          "id": nextId,
          "data": req.body
      });
  } catch (error) {
      res.status(500).json({"message: " :error.message});
  }
});

app.put('/users/:id' , async(req, res) => { 
  try {
    const conn = await mysql.createConnection((connection));  
      const [data] = await conn.query("UPDATE `users` SET `users_id`= ?,`fname`= ?,`lname`= ?,`sex`= ?,`email`= ?,`upassword`= ?`username`=? WHERE ?",
      [
        req.body.fname,
        req.body.lname,
        req.body.sex,
        req.body.email,
        req.body.username,
        req.body.upassword,
      ]);
      conn.end();
      res.json({
          "message": "แก้ไขข้อมูลสำเร็จแล้ว",
          "id": req.params.id,
          "data": req.body
      });
  } catch (error) {
      res.status(500).json({"message: " :error.message});
  }

});
app.delete('/users/:id' , async(req, res) => {
    try {
        let id = req.params.id;
        const conn = await mysql.createConnection(connection);
        await conn.query("DELETE FROM users WHERE id = ?", [id]);
        conn.end();
        res.json({
            "message": "ลบข้อมูลสำเร็จแล้ว",
            "id": id
         });
    } catch (error) {
        res.status(500).json({"message: " :error.message});
    } 
});

//
app.put('/users/:id' , async(req, res) => { 
  try {
    const conn = await mysql.createConnection((connection));  
      const [data] = await conn.query("UPDATE `users` SET `b_id`= ?,`b_writing`= ?,`b_date`= ?,`b_name`= ?,`user_id`= ?, WHERE ?",
      [
        req.body.b_id,
        req.body.b_writing,
        req.body.b_date,
        req.body.b_name,
        req.body.user_id,
      ]);
      conn.end();
      res.json({
          "message": "แก้ไขข้อมูลสำเร็จแล้ว",
          "id": req.params.id,
          "data": req.body
      });
  } catch (error) {
      res.status(500).json({"message: " :error.message});
  }

});
app.delete('/users/:id' , async(req, res) => {
    try {
        let id = req.params.id;
        const conn = await mysql.createConnection(connection);
        await conn.query("DELETE FROM users WHERE id = ?", [id]);
        conn.end();
        res.json({
            "message": "ลบข้อมูลสำเร็จแล้ว",
            "id": id
         });
    } catch (error) {
        res.status(500).json({"message: " :error.message});
    } 
});

app.put('/users/:id' , async(req, res) => { 
  try {
    const conn = await mysql.createConnection((connection));  
      const [data] = await conn.query("UPDATE `users` SET `event_id`= ?,`emoji`= ?,`date`= ?,`user_id`= ?, WHERE ?",
      [
        req.body.event_id,
        req.body.emoji,
        req.body.date,
        req.body.user_id
      ]);
      conn.end();
      res.json({
          "message": "แก้ไขข้อมูลสำเร็จแล้ว",
          "id": req.params.id,
          "data": req.body
      });
  } catch (error) {
      res.status(500).json({"message: " :error.message});
  }

});
app.delete('/users/:id' , async(req, res) => {
    try {
        let id = req.params.id;
        const conn = await mysql.createConnection(connection);
        await conn.query("DELETE FROM users WHERE id = ?", [id]);
        conn.end();
        res.json({
            "message": "ลบข้อมูลสำเร็จแล้ว",
            "id": id
         });
    } catch (error) {
        res.status(500).json({"message: " :error.message});
    } 
});
app.put('/users/:id' , async(req, res) => { 
  try {
    const conn = await mysql.createConnection((connection));  
      const [data] = await conn.query("UPDATE `users` SET `b_id`= ?,`b_writing`= ?,`b_date`= ?,`b_name`= ?,`user_id`= ?, WHERE ?",
      [
        req.body.b_id,
        req.body.b_writing,
        req.body.b_date,
        req.body.b_name,
        req.body.user_id,
      ]);
      conn.end();
      res.json({
          "message": "แก้ไขข้อมูลสำเร็จแล้ว",
          "id": req.params.id,
          "data": req.body
      });
  } catch (error) {
      res.status(500).json({"message: " :error.message});
  }

});
app.delete('/users/:id' , async(req, res) => {
    try {
        let id = req.params.id;
        const conn = await mysql.createConnection(connection);
        await conn.query("DELETE FROM users WHERE id = ?", [id]);
        conn.end();
        res.json({
            "message": "ลบข้อมูลสำเร็จแล้ว",
            "id": id
         });
    } catch (error) {
        res.status(500).json({"message: " :error.message});
    } 
});

app.put('/users/:id' , async(req, res) => { 
  try {
    const conn = await mysql.createConnection((connection));  
      const [data] = await conn.query("UPDATE `users` SET `note_id`= ?,`n_name`= ?,`n_type`= ?,`n_writing`= ?,`user_id`= ? WHERE ?",
      [
        req.body.note_id,
        req.body.n_name,
        req.body.n_type,
        req.body.n_writing,
        req.body.user_id
      ]);
      conn.end();
      res.json({
          "message": "แก้ไขข้อมูลสำเร็จแล้ว",
          "id": req.params.id,
          "data": req.body
      });
  } catch (error) {
      res.status(500).json({"message: " :error.message});
  }

});
app.delete('/users/:id' , async(req, res) => {
    try {
        let id = req.params.id;
        const conn = await mysql.createConnection(connection);
        await conn.query("DELETE FROM users WHERE id = ?", [id]);
        conn.end();
        res.json({
            "message": "ลบข้อมูลสำเร็จแล้ว",
            "id": id
         });
    } catch (error) {
        res.status(500).json({"message: " :error.message});
    } 
});



app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
