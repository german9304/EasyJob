import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Injectable()
export class StyleService {
  url = '';
  constructor() {}
  set Url(url: string) {
    this.url = url;
  }
  get Url(): string {
    return this.url;
  }
}
