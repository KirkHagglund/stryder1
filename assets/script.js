function toggleContent(index) {
  var contents = document.querySelectorAll(".content");
  contents.forEach(function (content) {
    content.classList.remove("active");
  });
  document.getElementById("content" + (index + 1)).classList.add("active");
}
