// server.js
Deno.serve(async (req) => {
  const file = await Deno.readTextFile("./index.html");
  return new Response(file, {
    headers: { "content-type": "text/html" },
  });
});
