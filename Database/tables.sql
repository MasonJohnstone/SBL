CREATE TABLE Region (
    ID INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Teams (
    ID INT PRIMARY KEY,
    name VARCHAR(24) NOT NULL,
    abbreviation VARCHAR(5),
    elo FLOAT DEFAULT 1000.0,
    reputation INT DEFAULT 0
);

CREATE TABLE Lineups (
    ID INT PRIMARY KEY
);

CREATE TABLE Players (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(24) NOT NULL,
    abbreviation VARCHAR(5),
    pwhash VARCHAR(255) NOT NULL,
    region INT,
    elo FLOAT DEFAULT 1000.0,
    reputation FLOAT DEFAULT 0,
    team INT,
    digits VARCHAR(2) NOT NULL,

    FOREIGN KEY (region) REFERENCES Region(ID),
    FOREIGN KEY (team) REFERENCES Teams(ID)
);

CREATE TABLE Members (
    team INT NOT NULL,
    player INT NOT NULL,
    proprietor BOOLEAN DEFAULT FALSE,
    administrator BOOLEAN DEFAULT FALSE,

    PRIMARY KEY (team, player),
    FOREIGN KEY (team) REFERENCES Teams(ID),
    FOREIGN KEY (player) REFERENCES Players(ID)
);

CREATE TABLE Linees (
    lineup INT NOT NULL,
    player INT NOT NULL,

    PRIMARY KEY (lineup, player),
    FOREIGN KEY (lineup) REFERENCES Lineups(ID),
    FOREIGN KEY (player) REFERENCES Players(ID)
);

CREATE TABLE Games (
    ID INT PRIMARY KEY,
    gamemode INT NOT NULL,
    season INT NOT NULL,
    start_time TIMESTAMP,
    end_time TIMESTAMP
);

CREATE TABLE Entities (
	game INT NOT NULL,
    entity INT NOT NULL, -- player, team, lineup or another entity depending on game mode
    score INT NOT NULL, -- generic score field that can work with any game mode and determine winner / placement using queeries

    PRIMARY KEY (game, entity),
    FOREIGN KEY (game) REFERENCES Games(ID)
);