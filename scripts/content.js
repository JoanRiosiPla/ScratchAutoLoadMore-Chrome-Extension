setInterval(() => {
    buttons = Array.from(document.getElementsByClassName("load-more-wh"));

    if (buttons) {
      tap(buttons)
    }
}, 100)

setInterval(() => {
  buttons = Array(document.querySelectorAll('[data-control=\"load-more\"]')[0]);

  if (buttons) {
    tap(buttons)
  }
}, 1000)


function tap(elements) {
    elements.forEach(element => {
        if (isElementVisible(element)) {
            element.click()
            console.log("clicked")
        }
    });
}

function isElementVisible(element) {
  if (element) {
    var rect = element.getBoundingClientRect();

    if (element.style.display == "none") {
      return false;
    }
    
    // Check if the element is within the viewport
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  return false;
}