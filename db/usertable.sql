DROP DATABASE IF EXISTS beatmyguess_db;
CREATE DATABASE beatmyguess_db;
USE beatmyguess_db;

CREATE TABLE username(
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NOT NULL,
  password VARCHAR(45),
  win int(10) NOT NULL,
  loss int(10) NOT NULL,
  accuracy int(2) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO users (username, password, win, loss, accuracy)
VALUES ('Bill', 6, 4, 60);