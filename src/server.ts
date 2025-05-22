import * as http from "http";
import * as fs from "fs";
import * as path from "path";
import { PodcastManager } from "./podcastManager";

const podcastManager = new PodcastManager();

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  // Servindo arquivos estáticos
  if (req.method === "GET" && req.url) {
    let filePath = path.join(__dirname, "../public", req.url === "/" ? "index.html" : req.url);
    let extname = path.extname(filePath);
    let contentType = "text/html";

    // Tipo de conteúdo baseado na extensão do arquivo
    switch (extname) {
      case ".js":
        contentType = "text/javascript";
        break;
      case ".css":
        contentType = "text/css";
        break;
      case ".json":
        contentType = "application/json";
        break;
      case ".png":
        contentType = "image/png";
        break;
      case ".jpg":
        contentType = "image/jpg";
        break;
    }

    fs.readFile(filePath, (error, content) => {
      if (error) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Not Found</h1>");
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, "utf-8");
      }
    });
    return;
  }

  // API para criar um podcast
  if (req.method === "POST" && req.url === "/api/podcasts") {
    let body = "";

    req.on("data", (chunk: Buffer) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const { title, description } = JSON.parse(body);
      const newPodcast = podcastManager.addPodcast(title, description);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newPodcast));
    });
    return;
  }

  // API para listar todos os podcasts
  if (req.method === "GET" && req.url === "/api/podcasts") {
    const podcasts = podcastManager.getPodcasts();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(podcasts));
    return;
  }

  // Rota não encontrada
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Rota não encontrada" }));
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});