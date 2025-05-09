import { Request, Response } from "express";
import path from "path";
import { marked } from "marked";
import { readFile } from "fs/promises";

export async function home(
    _request: Request<never, unknown>,
    response: Response,
) {
    const markdown = await readFile(
        path.join(__dirname, "../../README.md"),
        "utf-8",
    );

    const html = marked(markdown);
    response.send(`
         <!DOCTYPE html>
  <html>
    <head>
      <title>README</title>
      <meta charset="utf-8">
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 2rem;
          line-height: 1.6;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1rem;
        }
        table, th, td {
          border: 1px solid #ccc;
        }
        th, td {
          padding: 0.5rem;
          text-align: left;
        }
        th {
          background-color: #f9f9f9;
        }
        code {
          background-color: #f4f4f4;
          padding: 2px 4px;
          border-radius: 4px;
        }
      </style>
    </head>
    <body>
      ${html}
    </body>
  </html>`);
}
