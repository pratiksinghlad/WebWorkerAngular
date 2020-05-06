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
-app.component.ts         -: contains the api call,web worker and template(html).
-service/serverapiService -: contains the service api.
-worker/app.worker        -: contains the web worker which runs in the background. 


