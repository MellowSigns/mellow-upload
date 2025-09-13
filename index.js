const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check (necessário para Railway)
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    port: PORT 
  });
});

// Rota principal
app.get('/', (req, res) => {
  res.send(`
    <h1>🎨 Mellow Signs - Sistema Upload</h1>
    <p><strong>Status:</strong> ✅ Online</p>
    <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
    <p><strong>Port:</strong> ${PORT}</p>
    <hr>
    <p>Sistema pronto para receber configurações!</p>
  `);
});

// API placeholder
app.get('/api/status', (req, res) => {
  res.json({ 
    message: 'API funcionando',
    services: {
      imagekit: 'aguardando configuração',
      airtable: 'aguardando configuração'
    }
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
});
