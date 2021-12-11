(function () {
  const sections = document.querySelectorAll("section");
  const sectionOffsets = {};

  Array.prototype.forEach.call(sections, function (section) {
    sectionOffsets[section.id] = section.offsetTop - 200;
  });

  window.onscroll = () => {
    const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (let s in sectionOffsets) {
      if (sectionOffsets[s] <= scrollPosition) {
        document.querySelectorAll(".nav-item-active")?.forEach((item) => {
          console.log(item);
          item.setAttribute("class", "nav-item");
        });
        document.querySelectorAll(".nav-item-colon-active")?.forEach((item) => {
          item.setAttribute("class", "nav-item-colon");
        });

        document.querySelectorAll(`a[href*=${s}]`).forEach((item) => {
          console.log(item);
          item.parentNode.setAttribute("class", "nav-item-active");
        });

        if (s == "section-3") {
          document.querySelectorAll(".nav-item-active").forEach((item) => {
            item.setAttribute("class", "nav-item");
          });
          document.querySelectorAll(`a[href*=${s}]`).forEach((item) => {
            item.parentNode.setAttribute("class", "nav-item-colon-active");
          });
        }
      }
    }
  };
})();
