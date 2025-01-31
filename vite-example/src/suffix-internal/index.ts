import cssFile from "./style.css?url";
import jsFile from "./js.js?url";
import workerFile from "./js.js?worker&url";

console.log("=======> Internal CSS path", cssFile);
console.log("=======> Internal JS URL asset", jsFile);
console.log("=======> Internal JS WORKER URL asset", workerFile);
