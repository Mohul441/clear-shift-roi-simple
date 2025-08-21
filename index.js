const express = require('express');
const app = express();

// Health-check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;

// Only start listening if this file is run directly
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () =>
    console.log(`Server listening on http://localhost:${port}`)
  );
}