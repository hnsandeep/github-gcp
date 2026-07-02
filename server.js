const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Congratulations All Devops Lab Experiments are Completed'));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server listening on port ${port}`));
