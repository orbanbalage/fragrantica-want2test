function $x(path) {
  const results = document.evaluate(path, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
  const elements = [];
  for (let i = 0; i < results.snapshotLength; i++) {
    elements.push(results.snapshotItem(i));
  }
  return elements;
}

const wantElementXpath = '//span[contains(text(),"I want it")]/.';
const forTestElementXpath = '//span[contains(text(),"For Test")]/.'
const start = Date.now();

if ((window.wantElement = $x(wantElementXpath)).length > 0 && (window.forTestElement = $x(forTestElementXpath)).length > 0) {
  console.log('found', window.wantElement.length, window.wantElement);
  console.log('found', window.forTestElement.length, window.forTestElement);

  console.log("Clicking on 'I want it' button: ", wantElement[0])
  wantElement[0].click()
} else {
  throw new Error('Could not find "I want it" or "For Test" button');
}

setTimeout(() => {
  const closeButtonXpath = '//h4[contains(text(),"Please, rate this fragrance.")]/../../..//button'

  if ((window.closeButtonElement = $x(closeButtonXpath)).length > 0) {
    console.log('found', window.closeButtonElement.length, window.closeButtonElement);
    console.log("Clicking on close button: ", closeButtonElement[0])
    closeButtonElement[0].click()
  } else {
    console.log("Could not find close button");
  }
}, 1000);


const forTestEnabledElementXpath = '//span[contains(text(),"For Test")]/..//*[name()="svg"]//*[local-name()="path"][@fill-rule="evenodd"]'

if ((window.forTestEnabledElement = $x(forTestEnabledElementXpath)).length === 0) {
  console.log("Clicking on 'For Test' button: ", forTestElement[0])
  forTestElement[0].click()
} else {
  console.log("'For Test' button is already enabled: ", forTestEnabledElement[0])
}
