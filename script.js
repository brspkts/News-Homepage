function myFunction() {
    const x = document.getElementById("navbar");
    if (x.className === "bar") {
      x.className += " responsive";
    } else {
      x.className = "bar";
    }
  }