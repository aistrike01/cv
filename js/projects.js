/// Запрос репозиториев с GitHub API и добавление их на страницу

function addWork(name, url, language) {
    const works = document.querySelector(".works");
    const work = document.createElement("div");
    const workLink = document.createElement("a");
    const img = document.createElement("img");
    const type = language.toLowerCase();

    img.alt = language;
    img.classList.add("work__image");
    if (type === "typescript" || type == "javascript") {
        img.src = `../img/code-languages/${type}.png`;
    }
    work.classList.add("work");
    workLink.href = url;
    workLink.target = "_blank";
    workLink.classList.add("work__link");
    workLink.textContent = name.replace(/aistrike01\//g, "");

    work.append(workLink);
    work.append(img);
    works.append(work);
}

async function getRepos() {
    const alert = document.querySelector(".works-alert");

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
        addWork(element.full_name, element.html_url, element.language);
    }
}

/// Смена языка

function changeLanguage() {}

//! Functions Calling

getRepos();
