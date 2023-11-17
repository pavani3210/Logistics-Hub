create database Logistic;

use Logistic;

create table user (username varchar(255), password varchar(255), usertype varchar(255));

INSERT INTO user (username, password, usertype) VALUES
  ('user1', 'pass123', 'admin'),
  ('user2', 'pass456', 'customer'),
  ('user3', 'pass789', 'customer'),
  ('user4', 'passabc', 'admin'),
  ('user5', 'passdef', 'customer');
  
ALTER TABLE user
ADD COLUMN name VARCHAR(255),
ADD COLUMN phone_number VARCHAR(15),
ADD COLUMN email_address VARCHAR(255),
ADD COLUMN address VARCHAR(255);


select * from user;



CREATE TABLE Orders (
  orderId INT AUTO_INCREMENT PRIMARY KEY,
  customer VARCHAR(255) NOT NULL,
  itemName VARCHAR(255) NOT NULL,
  itemWeight DECIMAL(10, 2) NOT NULL,
  packageDimensions VARCHAR(255) NOT NULL,
  carrierName VARCHAR(255) NOT NULL,
  dateOrdered DATE NOT NULL,
  destination VARCHAR(255) NOT NULL
);
select * from orders;
ALTER TABLE Orders
ADD COLUMN logo VARCHAR(255);

ALTER TABLE orders
ADD COLUMN price int;


ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'Parshwa@3103';

Flush privileges;