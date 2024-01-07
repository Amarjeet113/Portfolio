window.addEventListener("load", function() {
   const loader = document.getElementById("loader");
   const content = document.getElementById("content");
 
   setTimeout(function() {
     // Hide loader and show content
     loader.style.display = "none";
     content.style.display = "block";
   }, 2000); // Change 2000 to your preferred duration in milliseconds
 });
 
 