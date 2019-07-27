import { Injectable } from '@angular/core';

@Injectable()
export

class Globals {
  apiRoot = 'http://localhost:8080/';

  localStorageTokenName = 'access_token';
  localStorageUser = 'user';
}
