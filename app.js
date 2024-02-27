const blogs = [
  {
    blogImg: "./img/blog1.png",
    blogDate: "JULY 23, 2022",
    blogTitle: "Blog one",
    blogText:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
  {
    blogImg: "./img/blog2.png",
    blogDate: "Jun 23, 2022",
    blogTitle: "Blog Two",
    blogText:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
  {
    blogImg: "./img/blog3.png",
    blogDate: "Aug 23, 2022",
    blogTitle: "Blog Three",
    blogText:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
];

const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");
const blogContainer = document.querySelector(".blog-container");

menu.addEventListener("click", function () {
  document.querySelector(".menu-bar").classList.remove("hidden");
});
closeMenu.addEventListener("click", function () {
  document.querySelector(".menu-bar").classList.add("hidden");
});

for (let i = 0; i < blogs.length; i++) {
  blogContainer.innerHTML += `
<img src="${blogs[i].blogImg}" alt="" />
<p class="blog-date">${blogs[i].blogDate}</p>
<h2 class="blog-title">${blogs[i].blogTitle}</h2>
<p class="blog-text">${blogs[i].blogText}</p>
</div>
`;
}
