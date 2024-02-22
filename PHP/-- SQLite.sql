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
    kryckor BOOLEAN,
    rullator BOOLEAN,
    rullstol BOOLEAN,
    manuell_rullstol_hjälpmotor BOOLEAN,
    elmoped BOOLEAN,
    permobil BOOLEAN,
    annat_hjälpmedel TEXT
);

DROP TABLE hjälpmedel;

SELECT * FROM hjälpmedel;

CREATE TABLE hjälpmedel (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    kryckor BOOLEAN,
    rullator BOOLEAN,
    rullstol BOOLEAN,
    manuell_rullstol_hjälpmotor BOOLEAN,
    elmoped BOOLEAN,
    permobil BOOLEAN,
    annat_hjälpmedel TEXT,
    kryckor_till_fordon BOOLEAN,
    rullator_till_fordon BOOLEAN,
    rullstol_till_fordon BOOLEAN,
    hjälpmotor_till_fordon BOOLEAN,
    elmoped_till_fordon BOOLEAN,
    permobil_till_fordon BOOLEAN
);

CREATE TABLE fordon (
    id INTEGER PRIMARY KEY,
    anpassad_bil INTEGER,
    forare_passagerare TEXT,
    mindre_personbil INTEGER,
    storre_personbil INTEGER,
    suv INTEGER,
    mindre_transportbil INTEGER,
    amerikansk_golvsanktbil INTEGER,
    minibuss INTEGER,
    annat_fordon TEXT,
    vet_ej INTEGER
);



SELECT * FROM fordon;

DROP TABLE fordon;

CREATE TABLE IF NOT EXISTS din_tabell (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fnamn TEXT,
    enamn TEXT,
    telnr TEXT,
    mail TEXT,
    styrka_höger_arm INTEGER,
    styrka_vänster_arm INTEGER,
    styrka_höger_ben INTEGER,
    styrka_vänster_ben INTEGER,
    styrka_höger_hand INTEGER,
    styrka_vänster_hand INTEGER,
    kryckor BOOLEAN,
    rullator BOOLEAN,
    rullstol BOOLEAN,
    manuell_rullstol_hjälpmotor BOOLEAN,
    elmoped BOOLEAN,
    permobil BOOLEAN,
    annat_hjälpmedel TEXT,
    kryckor_till_fordon BOOLEAN,
    rullator_till_fordon BOOLEAN,
    rullstol_till_fordon BOOLEAN,
    hjälpmotor_till_fordon BOOLEAN,
    elmoped_till_fordon BOOLEAN,
    permobil_till_fordon BOOLEAN,
    anpassad_bil INTEGER,
    forare_passagerare TEXT,
    mindre_personbil INTEGER,
    storre_personbil INTEGER,
    suv INTEGER,
    mindre_transportbil INTEGER,
    amerikansk_golvsanktbil INTEGER,
    minibuss INTEGER,
    annat_fordon TEXT,
    vet_ej INTEGER
);

DROP TABLE din_tabell;

SELECT * FROM din_tabell;