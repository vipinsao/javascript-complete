// Promisification - is a long word for simple transformation. It's the conversion of a function
//that accepts a callback into function that returns a promise.

//Such transformations are often required in real-life, as many functions and libraries are callback based
//But promises are more convenient, so it makes sense to promisify them.

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, result) => {
        if (error) return reject(error);
        return resolve(result);
      });
    });
  };
}

//without Promise old javascript code
function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;

  script.onLoad = () => callback(null, script);
  script.onerror = (error) => callback(error);

  document.head.appendChild(script);
}

// loadScript("test.js", (error, script) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("script loaded");
//   }
// });

const loadScriptNew = promisify(loadScript);
loadScriptNew("test.js")
  .then(() => console.log("Done"))
  .catch(() => console.log("Error hogya boss"));
