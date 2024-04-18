window.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.getElementById('home_link');
    const projectLink = document.getElementById('project_link');
    const infoLink = document.getElementById('info_link');
    const contactLink = document.getElementById('contact_link');

    const homePage = document.getElementById('home_page');
    const projectPage = document.getElementById('project_page');
    const infoPage = document.getElementById('info_page');
    const contactPage = document.getElementById('contact_page');

    homeLink.addEventListener('click', function (event) {
        event.preventDefault();

        homeLink.className = "is-selected";
        projectLink.className = "";
        infoLink.className = "";
        contactLink.className = "";

        homePage.classList.add("active_content");
        homePage.classList.remove('nonactive_content');
        projectPage.classList.remove("active_content");
        projectPage.classList.add("nonactive_content");
        infoPage.classList.remove("active_content");
        infoPage.classList.add("nonactive_content");
        contactPage.classList.remove("active_content");
        contactPage.classList.add("nonactive_content");

        console.log("Home Link clicked");
    });

    projectLink.addEventListener('click', function (event) {
        event.preventDefault();

        homeLink.className = "";
        projectLink.className = "is-selected";
        infoLink.className = "";
        contactLink.className = "";

        projectPage.className.replace("nonactive_content", "active_content" );
        homePage.className.replace("active_content", "nonactive_content");
        infoPage.className.replace("active_content", "nonactive_content");
        contactPage.className.replace("active_content", "nonactive_content");

        homePage.classList.remove("active_content");
        homePage.classList.add("nonactive_content");
        projectPage.classList.add("active_content");
        projectPage.classList.remove('nonactive_content');
        infoPage.classList.remove("active_content");
        infoPage.classList.add("nonactive_content");
        contactPage.classList.remove("active_content");
        contactPage.classList.add("nonactive_content");

        console.log("Link clicked");
    });

    infoLink.addEventListener('click', function (event) {
        event.preventDefault();

        homeLink.className = "";
        projectLink.className = "";
        infoLink.className = "is-selected";
        contactLink.className = "";


        homePage.classList.remove("active_content");
        homePage.classList.add("nonactive_content");
        projectPage.classList.remove("active_content");
        projectPage.classList.add("nonactive_content");
        infoPage.classList.add("active_content");
        infoPage.classList.remove("nonactive_content");
        contactPage.classList.remove("active_content");
        contactPage.classList.add("nonactive_content");

        console.log("Link clicked");
    });

    contactLink.addEventListener('click', function (event) {
        event.preventDefault();

        homeLink.className = "";
        projectLink.className = "";
        infoLink.className = "";
        contactLink.className = "is-selected";

        homePage.classList.remove("active_content");
        homePage.classList.add("nonactive_content");
        projectPage.classList.remove("active_content");
        projectPage.classList.add("nonactive_content");
        infoPage.classList.remove("active_content");
        infoPage.classList.add("nonactive_content");
        contactPage.classList.add("active_content");
        contactPage.classList.remove("nonactive_content");

        console.log("Link clicked");
    })

});
