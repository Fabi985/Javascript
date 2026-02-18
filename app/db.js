import { Database } from "@db/sqlite";

export const db = new Database(":memory:");

db.exec(`
    DROP TABLE items;

    CREATE TABLE items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        label TEXT NOT NULL
    );  
    
    INSERT INTO items (label) VALUES 
    ('apples'),
    ('bananas'),
    ('cherries');
`)