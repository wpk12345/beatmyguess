DROP DATABASE IF EXISTS beatmyguess;
CREATE DATABASE beatmyguess;
USE beatmyguess;

CREATE TABLE username(
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NOT NULL,
  password VARCHAR(45) NOT NULL,
  win int(10) NOT NULL,
  loss int(10) NOT NULL,
  accuracy int(2) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE correct(
	id INT NOT NULL AUTO_INCREMENT,
	category VARCHAR(45) NOT NULL,
    question VARCHAR(45) NOT NULL,
    answer BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

CREATE TABLE activity(
	id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(45) NOT NULL,
	category VARCHAR(45) NOT NULL,
    question VARCHAR(45) NOT NULL,
    answer BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

    