document.addEventListener('mousemove', function(e) {
    document.body.style.cursor = `url(${e.clientX}.png), auto`;
  });