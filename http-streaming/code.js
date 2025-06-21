const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Transfer-Encoding", "chunked");

  // Step 1: Send the shell
  res.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Streaming Demo</title>
    </head>
    <body>
      <div id="root">
        <!--$-->
        <div>Loading...</div>
        <!--/$-->
  `);

  // Simulate delay (e.g. server rendering or data fetching)
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Step 2: Stream content chunk
  res.write(`
        <template id="S:0"><div><strong>Loaded from server!</strong></div></template>
        <script>
          (function() {
            const tpl = document.getElementById("S:0");
            const root = document.getElementById("root");

            let start = null;
            let end = null;
            let node = root.firstChild;

            while (node) {
              if (node.nodeType === 8) {
                if (node.data === "$") start = node;
                if (node.data === "/$") {
                  end = node;
                  break;
                }
              }
              node = node.nextSibling;
            }

            if (start && end) {
              // Remove all nodes between start and end
              let current = start.nextSibling;
              while (current && current !== end) {
                const next = current.nextSibling;
                root.removeChild(current);
                current = next;
              }

              // Insert streamed content
              while (tpl.content.firstChild) {
                root.insertBefore(tpl.content.firstChild, end);
              }
            }
          })();
        </script>
      </div>
    </body>
    </html>
  `);

  // Done
  res.end();
});

app.listen(3000, () => {
  console.log("🌐 Listening on http://localhost:3000");
});
