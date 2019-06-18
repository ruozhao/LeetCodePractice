
-- Get the third salary for every department
-- In Employee, we need to divide every department.
-- We need outer Department Table to transfer departmentId to inner Employee table.
-- The resule can be a new Table to search named topDepartment

(SELECT *,
    IFNULL((SELECT
        DISTINCT e.Salary
    FROM
        Employee AS e
    WHERE e.DepartmentId = Department.Id
    ORDER BY e.Salary DESC
    LIMIT 2, 1),0) AS topSalary                         -- just a number, so should be in SELECT para
FROM
    Department ) AS topDepartment





# Write your MySQL query statement below
SELECT
   topDepartment.Name AS Department,
   e.Name AS Employee,
   e.Salary AS Salary
FROM                                                   -- can connect two any type Table
    Employee AS e,
    (SELECT *,
        IFNULL((SELECT
            DISTINCT e.Salary
        FROM
            Employee AS e
        WHERE e.DepartmentId = Department.Id
        ORDER BY e.Salary DESC
        LIMIT 2, 1),0) AS topSalary
    FROM
        Department) AS topDepartment
WHERE
    e.DepartmentId = topDepartment.Id AND
    e.Salary >= topDepartment.topSalary
ORDER BY e.DepartmentId, e.Salary DESC, e.Id         -- caution the order sequence