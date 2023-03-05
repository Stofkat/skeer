import sqlite3 from "sqlite3";

let dbInstance = null;

export default class Database {
  constructor() {
    if (!dbInstance) {
      dbInstance = new sqlite3.Database('products.sqlite');
    }
    return dbInstance;
  }

}
