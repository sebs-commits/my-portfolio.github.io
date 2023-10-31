
// the following page is for the scroll up and down function
const rightContent = document.querySelector(".right-content");
        
        rightContent.addEventListener("scroll", function () {
            if (rightContent.scrollHeight <= rightContent.clientHeight) {
                // Enable body scrolling if content is shorter than the viewport
                document.body.style.overflowY = "auto";
            } else if (rightContent.scrollTop + rightContent.clientHeight >= rightContent.scrollHeight - 20) {
                // Enable body scrolling when near the end
                document.body.style.overflowY = "auto";
            } else if (rightContent.scrollTop <= 20) {
                // Enable body scrolling when near the top
                document.body.style.overflowY = "auto";
            } else if (rightContent.scrollTop + rightContent.clientHeight >= rightContent.scrollHeight * 0.8) {
                // Enable body scrolling when scrolled beyond 80% of content
                document.body.style.overflowY = "auto";
            } else {
                // Disable body scrolling in other cases
                document.body.style.overflowY = "hidden";
            }
        });