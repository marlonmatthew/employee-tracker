use employees;

INSERT INTO department
    (name)
VALUES
    ('Information Technology'),
    ('Human Resources'),
    ('Marketing'),
    ('Architecture');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Director', 100000, 1),
    ('Technician', 60000, 1),
    ('Vice President', 150000, 2),
    ('Supervisor', 55695, 2),
    ('Account Coordinator', 45000, 3),
    ('Brand Manager', 65000, 3),
    ('Senior Architect', 110000, 4),
    ('Architect I', 70000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('David', 'Wilson', 1, 1),
    ('Chris', 'Sorensen', 2, NULL),
    ('Wendy', 'Black', 3, 2),
    ('Charles', 'Perrone', 4, 3),
    ('Gabriel', 'Knight', 5, NULL),
    ('Karen', 'Peters', 6, 4),
    ('Rachel', 'Givens', 7, 5),
    ('Claudia', 'Coronado', 8, NULL);
