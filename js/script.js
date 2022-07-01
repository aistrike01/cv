/// Переключение меню бургера и блокировка скролла

const headerBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");

headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("active");
    headerMenu.classList.toggle("active");
    document.body.classList.toggle("lock");
});

/// Подсчет времени работы

function timeCounter(date, language) {
    const dateArray = date.split(".");
    const newDate = new Date(dateArray[2], --dateArray[1], dateArray[0]);
    const days = Math.ceil(Math.abs(newDate.getTime() - Date.now()) / (1000 * 3600 * 24));
    const years = Math.floor(days / 365);
    let months = Math.floor((days - years * 365) / 30);
    months === 0 ? (months = 1) : (months = months);

    let monthWord;
    let yearWord;

    if (months === 1) {
        language === "ua" ? (monthWord = "місяць") : (monthWord = "month");
    }

    if (months > 1 && months < 5) {
        language === "ua" ? (monthWord = "місяці") : (monthWord = "months");
    }

    if (months > 4) {
        language === "ua" ? (monthWord = "місяців") : (monthWord = "months");
    }

    if (years === 1) {
        language === "ua" ? (yearWord = "рік") : (yearWord = "year");
    }

    if (years > 1 && years < 5) {
        language === "ua" ? (yearWord = "роки") : (yearWord = "years");
    }

    if (years > 4) {
        language === "ua" ? (yearWord = "років") : (yearWord = "years");
    }

    return `${years} ${yearWord} ${months} ${monthWord}`;
}

const employmentDate = document.querySelector(".information-experience__date")
    ? document
          .querySelector(".information-experience__date")
          .textContent.match(/(0?[1-9]|[12][0-9]|3[01])[\.](0?[1-9]|1[012])[\.]\d{4}/g)[0]
    : "03.03.2022";

const employmentTimeUa = timeCounter(employmentDate, "ua");
const employmentTimeEn = timeCounter(employmentDate, "en");

/// Переключение языка

const languagesArray = {
    title: {
        ua: "Артем Аніськін | Резюме",
        en: "Artem Aniskin | CV",
    },
    header: {
        ua: "Головна",
        en: "Main",
    },
    works: {
        ua: "Роботи",
        en: "Works",
    },
    lastname: {
        ua: "Аніськін",
        en: "Aniskin",
    },
    name: {
        ua: "Артем",
        en: "Artem",
    },
    surname: {
        ua: "Олексійович",
        en: "Alekseevich",
    },
    description: {
        ua: "Front-end програміст зі стажем. Пишу сайти та веб-додатки на JavaScript та TypeScript. Використовую як нативний JavaScript, так і різні JS фреймворки.",
        en: "Front-end developer with experience. I write websites and web applications in JavaScript and TypeScript. I use both native JavaScript and various JS frameworks.",
    },
    contacts: {
        ua: "Контакти",
        en: "Contacts",
    },
    experience: {
        ua: "Досвід роботи",
        en: "Experience",
    },
    job: {
        ua: 'АТ "НЗФ", м. Нікополь – 03.03.2021 - Теперішній час',
        en: 'JSC "NFP", Nikopol – 03.03.2021 - Present',
    },
    date: {
        ua: employmentTimeUa,
        en: employmentTimeEn,
    },
    jobDescription: {
        ua: "Працював над документообігом. Технології: TypeScript, React, MUI React. Займався розробкою елементів управління системи та її відображення, всю лицьову частину проекту робив самотужки.",
        en: "I worked on document management. Technologies: TypeScript, React, MUI React. I was engaged in the development of system control elements and display, I did the entire front part of the project by myself.",
    },
    skills: {
        ua: "Навички",
        en: "Skills",
    },
    technologies: {
        ua: "Технології",
        en: "Technologies",
    },
    basic: {
        ua: "Основні:",
        en: "Basic:",
    },
    regex: {
        ua: "Пишу та розумію регулярні вирази на базовому рівні.",
        en: "I write and understand regular expressions at a basic level.",
    },
    frameworks: {
        ua: "Фреймворки:",
        en: "Frameworks:",
    },
    libraries: {
        ua: "Бібліотеки:",
        en: "Libraries:",
    },
    languages: {
        ua: "Мови",
        en: "Languages",
    },
    english: {
        ua: "Англійська",
        en: "English",
    },
    ukrainian: {
        ua: "Українська",
        en: "Ukrainian",
    },
    education: {
        ua: "Освіта",
        en: "Education",
    },
    college: {
        ua: "Коледж Сучасного Управління",
        en: "College of Modern Management",
    },
    middle: {
        ua: "Середнє спеціальне",
        en: "Associate's degree",
    },
    technician: {
        ua: "Прикладна інформатика – Технік-програміст",
        en: "Software – Technician Engineer",
    },
    academy: {
        ua: "Національна металургійна академія України",
        en: "National Metallurgical Academy of Ukraine",
    },
    bachelor: {
        ua: "Бакалавр",
        en: "Bachelor's degree",
    },
    engineer: {
        ua: "Прикладна інформатика – Інженер-програміст",
        en: "Software – Software Engineer",
    },
    noworks: {
        ua: "Немає робіт",
        en: "No works",
    },
};

const languagesButton = document.querySelector(".header__language");

// Sets value on load
if (localStorage.getItem("language")) {
    changeLanguage(localStorage.getItem("language"));
} else {
    changeLanguage("ua");
}

function changeLanguage(language) {
    if (language === "en" || language === "ua") {
        languagesButton.style.backgroundImage = `url(../img/languages/${language}.jpg)`;
        localStorage.setItem("language", language);

        document.querySelector("title").innerHTML = languagesArray["title"][language];
        for (let key in languagesArray) {
            if (key != "title") {
                const elem = document.querySelector(".lng-" + key);
                if (elem) {
                    elem.innerHTML = languagesArray[key][language];
                }
            }
        }
    } else {
        changeLanguage("ua");
    }
}

function switchLanguage() {
    const language = localStorage.getItem("language");

    if (language === "ua") {
        changeLanguage("en");
    } else {
        changeLanguage("ua");
    }
}

languagesButton.addEventListener("click", switchLanguage);
