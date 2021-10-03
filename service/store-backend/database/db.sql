CREATE DATABASE thrift_store;

USE thrift_store;

CREATE TABLE USER(
    userId INT(5) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    admin BOOLEAN DEFAULT false,
    profileImg BLOB
);