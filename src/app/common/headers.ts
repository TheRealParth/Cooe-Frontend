import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Authorization', 'Basic ' + 'cG9zdG1hbjpwYXNzd29yZA==');
console.log( btoa('postmanpassword'));
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
console.log(contentHeaders)
