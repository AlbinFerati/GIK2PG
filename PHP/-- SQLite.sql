-- SQLite slider 
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
    gåförmåga INTEGER,
    längd INTEGER,
    vikt INTEGER,
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
    vet_ej INTEGER,
    svg_content BLOB,  -- Här sparas det komprimerade SVG-innehållet
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM din_tabell;

DROP TABLE din_tabell;

SELECT * FROM din_tabell WHERE svg_content = 1;


CREATE TABLE admin (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT
);

INSERT INTO admin (username, password) VALUES ('adminseb', 'abc123');

SELECT * FROM admin;