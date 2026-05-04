import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(
  bodyParser.json({
    type(req) {
      return true;
    },
  })
);
app.use(function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next();
});

const notes = [];
let nextId = 1;

app.get("/notes", (req, res) => {
  res.send(JSON.stringify(notes));
});

app.post("/notes", (req, res) => {
	const newNote = { ...req.body, id: nextId++ };
	notes.push(newNote);
  res.status(201).json(newNote);
  // res.end();
});

app.delete("/notes/:id", (req, res) => {
  const noteId = Number(req.params.id);
  const index = notes.findIndex((o) => o.id === noteId);
  if (index !== -1) {
    notes.splice(index, 1);
  }
  res.status(200).json({ message: `Объект с id ${noteId} удален` });
});

// eslint-disable-next-line no-undef
const port = process.env.PORT || 7070;
app.listen(port, () => console.log(`The server is running on http://localhost:${port}`));
