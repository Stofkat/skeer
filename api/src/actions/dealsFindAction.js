import moment from "moment";
import Database from "../database/Database.js";

export default function dealsFindAction(products, supermarkets) {

  return new Promise((resolve, reject)=> {
    const db = new Database();

    const weekNumber = "" + moment().week();
    const productsPartial = [];

    products.forEach((product)=>{
      const productParts = product.split(" ");
      productsPartial.push(...productParts);
    });
    const placeholders = productsPartial.map(() => '(name LIKE ? OR description LIKE ?)').join(' OR ');
    const supermarketPlaceholders = supermarkets.map(() => '?').join(', ');
    console.log("productsPartial", productsPartial);
    const query = `
      SELECT * FROM products
      WHERE week = ${weekNumber}
      AND supermarket IN (${supermarketPlaceholders})
      AND (${placeholders})
    `;
  
    const params = [...supermarkets, ...productsPartial.flatMap(p => [`%${p}%`, `%${p}%`])];
  
    db.all(query, params, (err, rows) => {
      if (err) {
        console.error(err.message);
        reject(err);
      } else {
        resolve(rows);
      }
      
    
    });
  });



}