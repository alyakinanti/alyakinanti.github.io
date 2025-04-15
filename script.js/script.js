function showExample(type) {
    const exampleBox = document.getElementById("example");
    let content = "";
  
    switch (type) {
      case "jpg":
        content = `<h3>JPG Example</h3><img src="example.jpg" alt="JPG Example" width="200" />`;
        break;
      case "png":
        content = `<h3>PNG Example</h3><img src="example.png" alt="PNG Example" width="200" />`;
        break;
      case "gif":
        content = `<h3>GIF Example</h3><img src="example.gif" alt="GIF Example" width="200" />`;
        break;
      case "webp":
        content = `<h3>WEBP Example</h3><img src="example.webp" alt="WEBP Example" width="200" />`;
        break;
      default:
        content = `<p>No example available.</p>`;
    }
  
    exampleBox.innerHTML = content;
  }
  