const express = require('express');
   const app = express();
   const PORT = process.env.PORT || 3000;

   app.get('/', (req, res) => {
     res.send('Mellow Signs Upload System - Working!');
   });

   app.get('/health', (req, res) => {
     res.json({ status: 'ok' });
   });

   app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });
