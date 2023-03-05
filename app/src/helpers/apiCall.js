import axios from "axios";

export default async function apiCall(url, method = "get", data) {

  const headers = { "Content-Type": "application/json" }

  const { data: resultData } = await axios({ 
    method,
    url, 
    data, 
    headers 
  });

  return resultData;

}