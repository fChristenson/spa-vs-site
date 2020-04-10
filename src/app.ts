import express from "express";
import * as path from "path";
import { products } from "./products";
import { comments } from "./comments";

export const app = express();

app.use(express.json());

app.set("view engine", "pug");
app.set("views", path.resolve(__dirname, "public", "views"))

const distDir = path.resolve(__dirname, "..", "dist");

app.use(express.static(distDir));

app.get("/shop", (req: express.Request, res: express.Response) => {
  res.render("shop", { products });
});

app.get("/shop/product/:id", (req: express.Request, res: express.Response) => {
  res.render("shop-product", { product: products.find(p => p.id.toString() === req.params.id) });
});

app.get("/api/v1/comments", (req: express.Request, res: express.Response) => {
  res.json(comments);
});

app.get("/blog", (req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve(__dirname, "public", "views", "blog.html"));
});

app.get("/blog/:post", (req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve(__dirname, "public", "views", `${req.params.post}.html`));
});

app.all("*", (req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve(__dirname, "public", "views", "view.html"));
});
