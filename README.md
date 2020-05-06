# Web-Workers-Angular
Web Workers with angular 9 are a simple means for web content to run scripts in background threads.<br/>
The worker thread can perform tasks without interfering with the user interface.<br/>
-Create a worker by new Worker(scriptURL, options).<br/>
-Using postMessage as a way to send data to the worker or a way to return data from the worker and handled where onmessage is called. <br/>
-Using terminate when you want to stop web workers and free browser resources. 

# Web Browser Support
Check web browser support for web worker
https://caniuse.com/#search=webworker

# File explanation
-app.component.ts            -: contains the api call,web worker and template(html). <br/>
-service/serverapiService    -: contains the service api. <br/>
-worker/app.worker           -: contains the web worker which runs in the background.  <br/>


# WebWorker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


