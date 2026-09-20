
wardrobeUrl = "https://www.fragrantica.com/@orbanbalage#wardrobe";

if (window.location.href !== wardrobeUrl) {
  window.location.href = wardrobeUrl;
}

window.perfumesLinks = document.querySelectorAll('#wardrobe-shelf-want div.shelf-element a');

const iterations = 30;
Array.from({ length: iterations }).forEach((_, index) => {
  console.log(`Iteration number: ${index + 1}`);
  open(perfumesLinks[index].href, `_blank_${index}`);
});
