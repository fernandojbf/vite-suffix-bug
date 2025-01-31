import cssFile from "./style.css?url";
import jsFile from "./js?url";
import workerFile from "./js?worker&url";

console.log("=======> Internal CSS path", cssFile);
console.log("=======> Internal JS URL asset", jsFile);
console.log("=======> Internal JS WORKER URL asset", workerFile);
