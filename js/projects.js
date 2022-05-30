const works = document.querySelector(".works");
const alert = document.querySelector(".works-alert");

/// Запрос репозиториев с GitHub API и добавление их на страницу

function addWork(name, url) {
    const work = document.createElement("div");
    const workLink = document.createElement("a");
    work.classList.add("work");
    workLink.href = url;
    workLink.textContent = name;
    work.append(workLink);
    works.append(work);
}

async function getRepos() {
    const reposList = await fetch(`https://api.github.com/users/aistrike01/repos`, {
        method: "GET",
    }).then(function (response) {
        if (!response.ok) {
            throw console.error(response.error);
        }
        return response.json();
    });

    if (reposList.length === 0) {
        alert.classList.add("active");
    }

    for (let i = 0; i < reposList.length; i++) {
        const element = reposList[i];
        addWork(element.full_name, element.html_url);
    }
}

getRepos();
