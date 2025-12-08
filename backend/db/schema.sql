CREATE DATABASE IF NOT EXISTS upskill CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE upskill;

-- users
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  full_name VARCHAR(255),
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(20),
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

DELIMITER $$
CREATE TRIGGER trg_users_fullname_before_insert
BEFORE INSERT ON users
FOR EACH ROW
BEGIN
  SET NEW.full_name = CONCAT(NEW.first_name, ' ', NEW.last_name);
END$$
CREATE TRIGGER trg_users_fullname_before_update
BEFORE UPDATE ON users
FOR EACH ROW
BEGIN
  SET NEW.full_name = CONCAT(NEW.first_name, ' ', NEW.last_name);
END$$
DELIMITER ;

-- users_contact
CREATE TABLE IF NOT EXISTS users_contact (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  contact_number VARCHAR(50) NOT NULL,
  contact_email VARCHAR(255),
  note TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY ux_user_contact (user_id, contact_number),
  CONSTRAINT fk_uc_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- contact_address
CREATE TABLE IF NOT EXISTS contact_address (
  id INT AUTO_INCREMENT PRIMARY KEY,
  contact_id INT NOT NULL,
  address_line1 VARCHAR(255),
  address_line2 VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(100),
  pincode VARCHAR(20),
  country VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_ca_contact FOREIGN KEY (contact_id) REFERENCES users_contact(id) ON DELETE CASCADE
);

-- users_task
CREATE TABLE IF NOT EXISTS users_task (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  contact_id INT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status ENUM('pending','in_progress','done') DEFAULT 'pending',
  due_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_ut_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_ut_contact FOREIGN KEY (contact_id) REFERENCES users_contact(id) ON DELETE SET NULL
);

-- email_logs
CREATE TABLE IF NOT EXISTS email_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  to_email VARCHAR(255),
  subject VARCHAR(255),
  body TEXT,
  sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
