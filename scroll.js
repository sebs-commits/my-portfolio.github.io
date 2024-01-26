const rightContent = document.querySelector(".right-content");

rightContent.addEventListener("scroll", function () {
  if (
    rightContent.scrollTop + rightContent.clientHeight >=
    rightContent.scrollHeight - 20
  ) {
    document.body.style.overflowY = "auto";
  } else if (rightContent.scrollTop <= 20) {
    document.body.style.overflowY = "auto";
  } else if (
    rightContent.scrollTop + rightContent.clientHeight >=
    rightContent.scrollHeight * 0.8
  ) {
    document.body.style.overflowY = "auto";
  } else {
    document.body.style.overflowY = "hidden";
  }
});
// script disables after 800px
const mediaQuery = window.matchMedia("(max-width: 800px)");

const handleViewportChange = (event) => {
  const scriptSrc = "/scripts/scroll.js";
  const scriptElement = document.querySelector(`script[src="${scriptSrc}"]`);

  if (event.matches) {
    // Disable your script here or take appropriate action
    console.log("Script disabled.");
    if (scriptElement) {
      scriptElement.remove();
    }
  } else {
    // Enable your script or take appropriate action
    console.log("Script enabled.");
    if (!scriptElement) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      document.head.appendChild(script);
    }
  }
};

mediaQuery.addEventListener("change", handleViewportChange);
handleViewportChange(mediaQuery);
