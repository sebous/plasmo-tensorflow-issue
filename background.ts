import * as tf from "@tensorflow/tfjs"

// Adds the WASM backend to the global backend registry.
import "@tensorflow/tfjs-backend-wasm"

// Set the backend to WASM and wait for the module to be ready.
tf.setBackend("wasm").then(() => main())
async function main() {
  console.log(tf.getBackend())
}
