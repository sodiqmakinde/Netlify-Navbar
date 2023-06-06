const topNav = document.querySelector(".top_nav");
const closeBtn = document.querySelector(".close");


const removeNavbar = () => {
  topNav.classList.add("navbarRemover");
};

closeBtn.addEventListener("click", removeNavbar);
