// #region Global Imports
import next from "next";
import express from "express";
import path from "path";
import nextI18NextMiddleware from "next-i18next/middleware";
import fs from "fs";
// #endregion Global Imports
// #region Local Imports
import nextI18next from "./i18n";
import routes from "./routes";
// #endregion Local Imports

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
    const server = express();

    app.setAssetPrefix(process.env.STATIC_PATH);
    server.use(express.static(path.join(__dirname, "../public/static")));
    server.use(nextI18NextMiddleware(nextI18next));

    server.get("/feed", async (request, response) => {
        const filePath = path.join(__dirname, "./data/sample.json");
        const file = fs.readFileSync(filePath, { encoding: "utf8" });
        response.send(JSON.parse(file));
    });

    server.all("*", (req, res) => handler(req, res));

    server.listen(port);

    // eslint-disable-next-line no-console
    console.log(
        `> Server listening at http://localhost:${port} as ${
            dev ? "development" : process.env.NODE_ENV
        }`
    );
});
