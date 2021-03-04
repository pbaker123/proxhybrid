document.querySelector(".selectors").addEventListener("click", function(event) {
  switch (event.target.id) {
    case "proxBlack":
      document.querySelector("model-viewer").setAttribute("src","assets/Pro-XHybrid-Black.glb");
      break;
    case "proxWhite":
      document.querySelector("model-viewer").setAttribute("src","assets/Pro-XHybrid-White.glb");
      break;
  };
});