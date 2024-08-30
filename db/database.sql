CREATE DATABASE IF NOT EXISTS utnmantenimiento;

USE utnmantenimiento;

CREATE TABLE IF NOT EXISTS employee (
    id INT(11)  NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
    
    );

    describe employee;

    INSERT INTO employee VALUES
    (1, 'John', 2000),
    (2, 'Jane', 2000),
    (3, 'Mike', 5000),
    (4, 'Emily', 5000);

