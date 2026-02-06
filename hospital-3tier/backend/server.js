
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootpass",
  database: "hospital_db"
});

db.connect(err=>{
  if(err) throw err;
  console.log("Hospital DB Connected");
});

app.get("/health",(req,res)=>{
  res.json({status:"Hospital backend running"});
});

app.get("/patients",(req,res)=>{
  db.query("SELECT * FROM patients",(err,result)=>{
    if(err) res.status(500).send(err);
    else res.json(result);
  });
});

app.post("/patients",(req,res)=>{
  const {name,age,disease} = req.body;
  db.query(
    "INSERT INTO patients(name,age,disease) VALUES(?,?,?)",
    [name,age,disease],
    ()=>{ res.send("Patient added"); }
  );
});

app.listen(5000,()=>{
  console.log("Hospital backend on 5000");
});
