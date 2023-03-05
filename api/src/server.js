import express from "express";

import stores from "./constants/stores.js";

import dealsFindAction from "./actions/dealsFindAction.js";
import dealsScrapeAction from "./actions/dealsScrapeAction.js";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

setInterval(()=> {
  console.log("Running daily scraper..");
  dealsScrapeAction();
}, 60000 * 60 * 24)


app.post('/deals', async (req, res) => {
  const { products, stores, week } = req.body;
  
  const result = await dealsFindAction(products, stores, week);

  res.json(result);
});

app.get("/stores", async (req, res) => {
  const result = stores.map(({ label, name, img }) => {
    return { name, label, img }
  });
  console.log("result", result);
  res.json(result);
});


app.get("/cron", async (req, res) => {
  dealsScrapeAction();
  res.json({ success: true });
});



app.listen(1337, () => {
  console.log("Server listening on port 1337");
});
