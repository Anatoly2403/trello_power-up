const cors = require('cors');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({ origin: 'https://trello.com' }));

app.get("*", (_, res) => {
  res.sendFile(`${__dirname}/view/index.html`)
})

app.listen(PORT, () => console.log('listening port on 3000'));