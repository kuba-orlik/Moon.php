DROP TABLE users;
DROP TABLE muscle_parts;
DROP TABLE exercises;
DROP TABLE set_types;
DROP TABLE log_entry;
DROP TABLE log_entry_regular;
DROP TABLE sets;
DROP TABLE log_entry_custom;

CREATE table users(
	id INT PRIMARY KEY AUTO_INCREMENT,
	google_id VARCHAR(40),
	username varchar(40) NOT NULL,
	created DATE,
	negative_combo_from DATE,
	name varchar(20),
	surname varchar(30),
	timer int DEFAULT 300,
	email varchar(60) NOT NULL,
	login_token text
);

CREATE TABLE muscle_parts(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(30),
	user_id varchar(40),
	FOREIGN KEY (user_id) References users(user_id)
);

CREATE TABLE exercises(
	id INT PRIMARY KEY AUTO_INCREMENT,
	muscle_part_id INT NOT NULL,
	Foreign key (muscle_part_id) REFERENCES muscle_parts(muscle_part_id),
	name varchar(40) NOT NULL,
	user_id varchar(30),
	paused int,
	graphable int,
	outdoor int,
	recom int,
	Foreign key (user_id) REFERENCES users(user_id)
);

CREATE TABLE set_types(
	name varchar(20) NOT NULL,
	exercise_id INT,
	Foreign key (exercise_id) REFERENCES exercises(exercise_id),
	orderL int,
	PRIMARY KEY (exercise_id, orderL),
	unit varchar(25)
);

CREATE TABLE log_entry(
	id INT PRIMARY KEY  AUTO_INCREMENT,
	begin_time TIMESTAMP NOT NULL,
	duration_s INT,
	type varchar(10),
	rel_id INT,
	legacy int
);

CREATE TABLE log_entry_regular(
	id INT PRIMARY KEY  AUTO_INCREMENT,
	exercise_id INT,
	FOREIGN KEY (exercise_id) REFERENCES exercises(exercise_id)
);

CREATE TABLE sets(
	set_type_id INT,
	FOREIGN KEY (set_type_id) REFERENCES set_types(set_type_id),
	log_entry_id INT,
	FOREIGN KEY (log_entry_id) REFERENCES log_entry_regular(log_entry_id),
	result varchar(15),
	PRIMARY KEY (set_type_id, log_entry_id)
);

CREATE TABLE log_entry_custom(
	id INT PRIMARY KEY  AUTO_INCREMENT,
	name varchar(60) NOT NULL,
	result varchar(50) NOT NULL,
	muscle_part_id INT,
	FOREIGN KEY (muscle_part_id) REFERENCES muscle_parts(muscle_part_id)
)

