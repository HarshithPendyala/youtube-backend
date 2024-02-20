import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

const app = express();
app.use(cors());

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log("Server is running at :", port);
});

dotenv.config();

app.get("/search/:query?", (req, res) => {
	console.log(req.params.query);
	fetch(
		"https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
			req.params.query
	)
		.then((data) => data.json())
		.then((json) => res.send(json));
});
