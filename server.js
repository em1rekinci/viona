const express = require('express');
const app = express();

app.use((req, res, next) => {
  if (req.headers.host === 'vionasoft.com') {
    return res.redirect(301, 'https://www.vionasoft.com' + req.url);
  }
  next();
});

app.use(express.static('.'));
app.listen(process.env.PORT || 3000);
