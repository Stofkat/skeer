export const BASE_URL = process.env.NODE_ENV === 'development' ?
  "http://localhost:1338" :
  "https://deals.dinnerdeck.app";
  
export const API_URL = `${BASE_URL}`;
export const FILES_URL = BASE_URL;