const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(
    `\n%cApp express server listen : ${PORT}\n`,
    'margin-bottom:4px;color:#1ab394;font-size:14px;font-weight:bold;line-height:1.2em;border-bottom:2px solid #1ab394',
  )
})