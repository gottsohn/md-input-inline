# md-input-inline

[![Build Status](https://travis-ci.org/gottsohn/md-input-inline.svg?branch=master)](https://travis-ci.org/gottsohn/md-input-inline)
[![Typescript Version][typescript-image]][typescript-url]
[![Angular Version][ng2-image]][ng2-url]
[![Angular Material Version][ng-md-image]][ng-md-url]
[![NPM Version][npm-image]][npm-url]
[![License][license-image]][license-url]


A custom input field that allows inline editing of the md-input field from Angular Material 2.
This module requires Angular Material design 2 to run.


### How to use

`npm install --save md-input-inline`


Import `MdInputInlineModule` from `md-input-inline` and add to your App Module imports.


```ts
…
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MdInputInlineModule } from 'md-input-inline';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdInputInlineModule,
    MaterialModule.forRoot()
  ],
  …
```

The component is used as a tag like so:
```html
<md-input-inline label="Email address" [(ngModel)]="user.email" name="user.email">
</md-input-inline>
```

### Preview

Here's a screenshot of how the module looks.

#### Editing the Phone number
![Editing](./demo/assets/editing.png)

#### Viewing the Phone number

![Editing](./demo/assets/viewing.png)



[typescript-image]: https://img.shields.io/badge/Typescript-blue.svg
[typescript-url]: https://www.typescriptlang.org
[npm-image]: https://img.shields.io/npm/v/md-input-inline.svg
[npm-url]: https://npmjs.org/package/md-input-inline
[ng2-image]: https://img.shields.io/badge/Angular-2.0.0-red.svg
[ng2-url]: https://angular.io/
[ng-md-image]: https://img.shields.io/badge/Angular--MD-2.0.0-red.svg
[ng-md-url]: https://github.com/angular/material2
[license-image]: https://img.shields.io/badge/License-MIT-red.svg
[license-url]: LICENSE
