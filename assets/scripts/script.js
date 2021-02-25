function getfocus(elm) {
  document.getElementById(elm).focus();
}

function showDetails() {
  setPosition();
  disableScroll();
  document.getElementById("First").style.display = "Flex";
  document.getElementById("First-back").style.display = "block";
}

function setPosition() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, \
  window.scrollTo(0, 0)
}


function disableScroll() { 
  // Get the current page scroll position 
  scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
        
  // if any scroll is attempted, set this to the previous value 
  window.onscroll = function() { 
    window.scrollTo(scrollLeft, scrollTop); 
  }; 
}

function closeDetails() {
  enableScroll();
  document.getElementById("First").style.display = "none";
  document.getElementById("First-back").style.display = "none";
}

function enableScroll() { 
  window.onscroll = function() {}; 
}

    