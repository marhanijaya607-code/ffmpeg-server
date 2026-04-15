const express = require('express');
const { exec } = require('child_process');

const app = express();
app.use(express.json());

app.post('/convert', (req, res) => {
  const { input, output } = req.body;

  exec(`ffmpeg -i ${input} ${output}`, (err, stdout, stderr) => {
    if (err) {
      return res.status(500).send(stderr);
    }
    res.send('Convert selesai!');
  });
});

app.listen(3000, () => {
  console.log('Server jalan di port 3000');
});
