// import { serve } from "https://deno.land/std@0.122.0/http/server.ts";

// serve(() => new Response("Hello World\n"));

import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World from oak!";
});

await app.listen({ port: 8000 });