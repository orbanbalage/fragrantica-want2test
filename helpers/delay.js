// A helper function to create a delay
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitForElement(selector) {
  // Loop continues until document.querySelector finds the element
  while (document.querySelector(selector) === null) {
    await delay(100); // Check every 100ms
  }
  return document.querySelector(selector);
}

// Usage:
waitForElement('.my-dynamic-element').then((el) => {
  console.log('Element found!', el);
  // Do your work here
});
