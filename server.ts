import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";

const app = new Application();

const SPOTIFY_PLAYLIST =
  `https://open.spotify.com/playlist/0d1TPvnEGO3mGsLupY1teE?si=98a3b49f7e9b45df`;

app.use((ctx) => {
  ctx.response.redirect(SPOTIFY_PLAYLIST);
});

app.listen({ port: 8000 });
