// index.js

document.addEventListener("DOMContentLoaded", function() {
    var textElement = document.querySelector(".neon-text");
    if (textElement) {
      var textContent = textElement.innerText;
      textElement.innerText = ""; // Clear the original text
      
      // Loop through each character
      for (var i = 0; i < textContent.length; i++) {
        // Create a span element for each character
        var charSpan = document.createElement("span");
        charSpan.innerText = textContent.charAt(i);
        charSpan.style.opacity = 0; // Initially hide the character
        // Append the span to the text element
        textElement.appendChild(charSpan);
        // Apply delay using setTimeout to reveal characters gradually
        setTimeout(function(span) {
          span.style.opacity = 1; // Make the character visible
        }, i * 200, charSpan); // Adjust the delay here (in milliseconds)
      }
    } else {
      console.error("Element with class 'neon-text' not found.");
    }
  });
  
