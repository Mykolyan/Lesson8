document.addEventListener("DOMContentLoaded", function () {
    // get elements by their id
  let audio = document.getElementById("Audio1");
  let image = document.getElementById("img1");

  if (audio && image) {
    audio.controls = false; // hiding audio control elements

    function playAudio() {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    }

    // Adding event handlers for the image
    image.addEventListener("click", playAudio);

      // Add an event handler to end playback
    audio.addEventListener("ended", function () {
      audio.currentTime = 0;
    });
  }
});

// Домашнє завдання
// -----1-----
// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
// та прочитати його значення.
 let elementWithWidgetName = document.querySelector('[data-widget-name]');

if (elementWithWidgetName) {
    let widgetNameValue = elementWithWidgetName.dataset.widgetName;
    
    console.log(widgetNameValue);
} else {
    console.log('No items with attribute data-widget-name were found.');
}
    