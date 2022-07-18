# galletita.deno.dev

Redirector to a cool playlist 🦀

## [Oak](https://oakserver.github.io/oak)

I love how simple is to setup an API with Oak 🐿️

```javascript
import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.redirect(SPOTIFY_PLAYLIST);
});

app.listen({ port: 8000 });
```

## Licence

Licensed under the MIT License 📄
