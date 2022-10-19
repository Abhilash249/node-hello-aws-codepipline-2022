const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Welocme to NewYork\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec diam scelerisque, lacinia justo vel, elementum enim. Praesent at pharetra justo. Cras quis odio quis diam auctor hendrerit non vel ipsum. Mauris posuere augue nec orci hendrerit vulputate. Proin luctus interdum ante in interdum. Nulla facilisi. Quisque rhoncus magna urna, sed ornare ipsum pharetra nec. Cras convallis vehicula ex, eu sodales nisi consectetur viverra.!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
