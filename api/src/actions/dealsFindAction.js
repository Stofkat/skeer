import moment from "moment";
import Database from "../database/Database.js";

export default function dealsFindAction(products, stores) {
  return new Promise((resolve, reject)=> {

    const db = new Database();
    const weekNumber = "" + moment().week();

    // Prepare database query
    const placeholders = products.map(() => '(name LIKE ? OR description LIKE ?)').join(' OR ');
    const storePlaceholders = stores.map(() => '?').join(', ');

    const query = `
      SELECT * FROM products
      WHERE week = ${weekNumber}
      AND store IN (${storePlaceholders})
      AND (${placeholders})
    `;
  
    const params = [...stores, ...products.flatMap(p => [`%${p}%`, `%${p}%`])];
  
    db.all(query, params, (error, rows) => {
      if (error) {
        console.error(error.message);
        reject(error);
      } else {
        resolve(rows);
      }
    
    });
  });



}