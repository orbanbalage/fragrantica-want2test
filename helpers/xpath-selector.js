function $x(path) {
  const results = document.evaluate(path, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
  const elements = [];
  for (let i = 0; i < results.snapshotLength; i++) {
    elements.push(results.snapshotItem(i));
  }
  return elements;
}

// Now you can safely use it anywhere in your script:
const headers = $x("//h1");
