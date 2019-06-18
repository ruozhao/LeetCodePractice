-- solution1
SELECT
    d.Name AS Department,
    e.Name AS Employee,
    e.Salary
FROM
    Employee AS e,
    Department AS d,
    (SELECT
       DepartmentId, MAX(Salary) AS Salary
    FROM
       Employee
       GROUP BY DepartmentId) AS s
WHERE
    e.Salary = s.Salary AND
    e.DepartmentId = d.Id AND
    e.DepartmentId = s.Id AND

-- solution2
select
    d.Name Department,
    e.Name Employee,
    e.Salary
from
    Department d,
    Employee e,
    (select max(Salary) Salary,DepartmentId
    from Employee
    group by DepartmentId) z
where
    e.DepartmentId=d.Id &&
    e.DepartmentId=z.DepartmentId &&
    e.Salary=z.Salary;