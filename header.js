document.addEventListener("DOMContentLoaded", function () {
  const openPdfButton = document.getElementById("resumeBtn");

  openPdfButton.addEventListener("click", function () {
    let pdfUrl = "SebastianDavid_301241956_COOP421_SEC401_Resume2024.pdf";

    window.open(pdfUrl, "_blank");
  });
});
