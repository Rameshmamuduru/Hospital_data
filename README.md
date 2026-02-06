# Hospital_data
## Local side deployment step (not recommended for PROD)

# 1.Update and installation
```
sudo apt update -y
apt install -y nodejs npm mysql-server git curl
node -v
npm -v
mysql --version
```

# 2. get project code
```
git clone <repo>
cd /Hospital-data/hospital-3tier
```
# 3. Configure backend
```
systemctl start mysql
mysql
```
```
CREATE DATABASE hospital_db;

USE hospital_db;

CREATE TABLE patients(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
disease VARCHAR(100)
);

INSERT INTO patients VALUES (1,'Ramesh','Fever');

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'rootpass';
FLUSH PRIVILEGES;
exit;
```
# 4.Backend setup
```
cd backend
npm install
node server.js
nohup node server.js > backend.log 2>&1 &
ss -tulnp | grep 5000
curl http://localhost:5000/patients

```

# 5.Frontend setup:
```
cd ../frontend
npm install
src/App.js
ss -tulnp | grep 3000

```



