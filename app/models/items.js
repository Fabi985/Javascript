import { db } from "../db.js";

export function getItems() {
    return db.prepare(`SELECT * FROM items;`).all();
}

export function addItem(newItem) {
    db.prepare(`INSERT INTO items (label) VALUES (?)`).run(newItem);
}