import { Injectable } from 'https://deno.land/x/alosaur/mod.ts';

@Injectable()
export class ExampleService {
  public getExampleString(): string {
    return 'Just a test example of service';
  }
}
