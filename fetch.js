const userName = "Ewelina765";
const repoList = document.querySelector(".repo-list");
const direction = "desc";

fetch(`https://api.github.com/users/${userName}/repos?direction=${direction}`)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((repo) => {
      const { name, html_url } = repo;
      const element = `<li><a href="${html_url}">${name}</a></li>`;
      repoList.insertAdjacentHTML("beforeend", element);
    });
  })
  .catch((error) => console.error("Error fetching repos:", error));
