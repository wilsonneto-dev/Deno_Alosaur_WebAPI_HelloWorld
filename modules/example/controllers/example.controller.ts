import {
  Controller,
  Get,
  Param,
  QueryParam,
} from 'https://deno.land/x/alosaur/mod.ts';

import { ExampleService } from '../services/example.service.ts';

@Controller('/example')
export class ExampleController {
  constructor(private exampleService: ExampleService) {}

  @Get('/echo/:name')
  public async echo(
    @Param('name') name: string = 'man',
    @QueryParam('greet') greet: string = 'Hi'
  ) {
    return { message: `${greet} - ${name}!!` };
  }
}
