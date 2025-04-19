DELIMITER //

CREATE PROCEDURE SignUp(
    IN username VARCHAR(24),
    IN nickname VARCHAR(12),
    IN email VARCHAR(255),
    IN password_hash VARCHAR(64)
)
BEGIN
    -- Check if user already exists
    IF EXISTS (SELECT 1 FROM Users WHERE Users.email = email) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'User already exists';
    ELSE
        -- Insert new player record
        INSERT INTO Users (Users.username, Users.nickname, Users.email, Users.password_hash, Users.elo)
        VALUES (username, nickname, email, password_hash, 1000);
    END IF;
END //

DELIMITER ;