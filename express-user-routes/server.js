const express = require('express');
const app = express();

const PORT = 3000;

const dummyUser = {
  id: 1,
  name: "John Doe",
  email: "john@example.com"
};

const dummyUsersList = [
  dummyUser,
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  { id: 3, name: "Bob Smith", email: "bob@example.com" }
];

app.get('/users/get', (req, res) => {
  res.status(200).json(dummyUser);
});


app.get('/users/list', (req, res) => {
  res.status(200).json(dummyUsersList);
});


app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
