 const windowEl = document.getElementById("myWindow");
    const titleBar = document.getElementById("titleBar");

    let offsetX = 0, offsetY = 0, isDragging = false;

    titleBar.addEventListener("mousedown", (e) => {
      isDragging = true;
      offsetX = e.clientX - windowEl.offsetLeft;
      offsetY = e.clientY - windowEl.offsetTop;
      document.body.style.userSelect = "none"; // Prevent text highlight
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      windowEl.style.left = e.clientX - offsetX + "px";
      windowEl.style.top = e.clientY - offsetY + "px";
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
      document.body.style.userSelect = "auto";
    });