# galletita.deno.dev

I love how simple is to setup an API with Oak 🐿️

```
import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.redirect(SPOTIFY_PLAYLIST);
});

app.listen({ port: 8000 });
```
