import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;
app.listen(3000,    ()=>{
console.log("Server running on port 3000")}
);
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
let data;
const hairStatusJSON = `[{"level":0,"message":"First touch. All good. Hair still living its best life.","gif":"/assets/adventure-time-finn.gif","sound":"/sounds/good-hair_1.mp3"},{"level":1,"message":"Second touch. Slightly suspicious, but acceptable.","gif":"/assets/suspicious-2.gif","sound":"/sounds/sus.mp3"},{"level":2,"message":"Okay… oil production has entered the chat.","gif":"/assets/the-office-no-god-please-no-3.gif","sound":"/sounds/no-god.mp3"},{"level":3,"message":"Hands off. We are dangerously close to greasy territory.","gif":"/assets/michaenyu-sana4.gif","sound":"/sounds/greasy-territory.mp3"},{"level":4,"message":"This is no longer hair. This is a lifestyle choice. Stop.","gif":"/assets/muppetwiki-muppet-wiki5.gif","sound":"/sounds/stop.mp3"},{"level":5,"message":"Congratulations. Hair ruined. No refunds.","gif":"/assets/fuckyou-fuck6.gif","sound":"/sounds/fucked-it-up.mp3"},{"level":6,"message":"","gif":"/assets/blank-stare-really.gif","sound":"/sounds/duvet.mp3"}]`;
app.get("/", (req, res) => {
  res.render("index", { result: null });
});
let currentLevel = -1;
app.post("/checkHair", (req, res) => {
    currentLevel++;

    if (currentLevel > 6) {
      currentLevel = 6;
    }

    const hairData = JSON.parse(hairStatusJSON)[currentLevel];

    res.render("index", {
      result: hairData,
    });
});
