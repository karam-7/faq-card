const icons = document.querySelectorAll(".icon");

icons.forEach(icon => {
  icon.addEventListener("click", function() {
    const infoPara = this.nextElementSibling;
    const iconImg = this.querySelector(".icon-img");
    const infoH2 = this.querySelector(".info-h2");

    if (infoPara.style.display === "block") {
      infoPara.style.display = "none";
      iconImg.style.transform = "rotate(0)";
      infoH2.classList.remove("info-active");
    } else {
      const openInfoParas = document.querySelectorAll(".info-para");
      const openIconImgs = document.querySelectorAll(".icon-img");
      const openInfoH2s = document.querySelectorAll(".info-active");

      openInfoParas.forEach(openInfoPara => {
        openInfoPara.style.display = "none";
      });

      openIconImgs.forEach(openIconImg => {
        openIconImg.style.transform = "rotate(0)";
      });

      openInfoH2s.forEach(openInfoH2 => {
        openInfoH2.classList.remove("info-active");
      });

      infoPara.style.display = "block";
      iconImg.style.transform = "rotate(180deg)";
      infoH2.classList.add("info-active");
    }
  });
});