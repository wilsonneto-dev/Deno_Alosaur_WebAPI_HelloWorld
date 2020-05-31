import { ExampleController } from './controllers/example.controller.ts';
import { Area } from 'https://deno.land/x/alosaur/mod.ts';

@Area({
  controllers: [ExampleController],
})
export class HomeArea {}
