-- SQLite slider 
CREATE TABLE slider_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    styrka_höger_arm INTEGER,
    styrka_vänster_arm INTEGER,
    styrka_höger_ben INTEGER,
    styrka_vänster_ben INTEGER,
    styrka_höger_hand INTEGER,
    styrka_vänster_hand INTEGER
);
DROP TABLE slider_data;

INSERT INTO slider_data (styrka_höger_arm, styrka_vänster_arm, styrka_höger_leg, styrka_left_leg, styrka_right_hand, styrka_left_hand)


SELECT * FROM slider_data WHERE styrka_höger_arm = 25

-- SQLite kontaktinfo
CREATE TABLE kontaktinfo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fnamn TEXT,
    enamn TEXT,
    telnr TEXT,
    mail TEXT
);

DROP TABLE kontaktinfo;

SELECT * FROM kontaktinfo;

CREATE TABLE hjälpmedel(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    kryckor TEXT,
    rullator TEXT,
    rullstol TEXT,
    manuell_rullstol_hjälpmotor TEXT,
    elmoped TEXT,
    permobil TEXT
);

SELECT * FROM hjälpmedel;