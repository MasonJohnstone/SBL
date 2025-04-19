DELIMITER //

CREATE PROCEDURE Login(
    IN email VARCHAR(255),
    OUT password_hash VARCHAR(64)
)
BEGIN
    -- Ensure only one row is selected
    SELECT Users.password_hash INTO password_hash
    FROM Users
    WHERE Users.email = email
    LIMIT 1;
END //

DELIMITER ;
