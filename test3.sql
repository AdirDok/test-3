-- create database test_3 ; 
-- use test_3;

-- create table companies(
-- id int auto_increment,
-- primary key(id),
-- name varchar(50)
-- );


-- create table serverss(
-- id int auto_increment,
-- primary key(id),
-- server_name varchar(100),
-- ip text(100),
-- host int,
-- foreign key(host) references companies(id),
-- created datetime default now(),
-- status bool default false

-- );


-- insert into companies(name)
-- values("Microsoft"),("google"),("IBM"),("GoDaddy"),("DigitalD");


-- insert into serverss(server_name,ip,host)
-- values("server 1 ","1234.123.12.1",1),
-- ("server 2 ","5486.248.65.2",2),
-- ("server 3 ","7456.963.69.3",3),
-- ("server 4 ","9632.125.44.4",4),
-- ("server 5 ","0874.069.54.5",5),
-- ("server 6 ","7846.257.31.6",1),
-- ("server 7 ","7861.574.88.7",2),
-- ("server 8 ","8763.459.03.8",2),
-- ("server 9 ","2871.531.09.9",3);