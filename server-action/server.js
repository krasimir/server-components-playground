// server.js
const http = require("http");
const { parse } = require("querystring");

const port = 3000;

http
  .createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
      // Initial HTML page
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write(`
      <!DOCTYPE html>
      <html>
      <head><title>Flight-like Demo</title></head>
      <body>
        <h1>Counter Demo</h1>
        <div id="counter">Count: 0</div>
        <form id="incrementForm" method="POST" action="/increment">
          <input type="hidden" name="count" value="0" id="countInput">
          <button type="submit">+1</button>
        </form>

        <script>
          document.getElementById('incrementForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            const count = parseInt(document.getElementById('countInput').value, 10);
            const res = await fetch('/increment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: 'count=' + encodeURIComponent(count)
            });
            const data = await res.json();

            // Simulated Flight patch: simple instruction
            if (data.type === 'patch' && data.target === 'counter') {
              document.getElementById(data.target).textContent = data.content;
              document.getElementById('countInput').value = data.nextValue;
            }
          });
        </script>
      </body>
      </html>
    `);
      res.end();
    } else if (req.method === "POST" && req.url === "/increment") {
      // Parse POST body
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        const { count } = parse(body);
        const nextCount = parseInt(count || "0", 10) + 1;

        // Return a JSON response that simulates a React Flight patch
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            type: "patch",
            target: "counter",
            content: `Count: ${nextCount}`,
            nextValue: nextCount
          })
        );
      });
    } else {
      res.writeHead(404);
      res.end("Not found");
    }
  })
  .listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
