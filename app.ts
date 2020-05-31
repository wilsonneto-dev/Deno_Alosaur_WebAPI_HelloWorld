import { App } from 'https://deno.land/x/alosaur/src/mod.ts';
import { HomeArea } from './modules/example/example.module.ts';

const PORT = 8080;

const app = new App({
  areas: [HomeArea],
});

console.log('Listening on port:' + PORT);
await app.listen('localhost:' + PORT);
