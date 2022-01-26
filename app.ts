import { serve } from "https://deno.land/std@0.122.0/http/server.ts";

serve(() => new Response("Hello World\n"));
