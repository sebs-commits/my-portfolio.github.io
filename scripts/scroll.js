const rightContent = document.querySelector(".right-content");
        
        rightContent.addEventListener("scroll", function () {
            if (rightContent.scrollTop + rightContent.clientHeight >= rightContent.scrollHeight - 5) {
                document.body.style.overflowY = "auto";
            } else if (rightContent.scrollTop <= 5) {
                document.body.style.overflowY = "auto";
            } else if (rightContent.scrollTop + rightContent.clientHeight >= rightContent.scrollHeight * 0.8) {
                document.body.style.overflowY = "auto";
            } else {
                document.body.style.overflowY = "hidden";
            }
        });