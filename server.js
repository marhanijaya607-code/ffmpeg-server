const express = require('express');
const app = express();

// Middleware biar bisa baca JSON
app.use(express.json());

// Route utama
app.get('/', (req, res) => {
  res.send('Server ffmpeg jalan bro 🚀');
});

// Contoh API
app.get('/api', (req, res) => {
  res.json({
    status: 'success',
    message: 'API aktif!'
  });
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running di port ${PORT}`);
});
