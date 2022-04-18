loadLanguagePref();

function checkBrowserLanguage() {
    var lang = navigator.language;

    changeLanguage(lang);
}

function saveLanguagePref(langSelected) {
    localStorage.setItem('selectedLanguage', langSelected);
}

function loadLanguagePref() {

    if (localStorage.getItem('selectedLanguage')) {
        var langSaved = localStorage.getItem('selectedLanguage');

        changeLanguage(langSaved);
    }
    else {
        checkBrowserLanguage();
    }
}

function changeLanguage(langSelected) {
    var lang = langSelected;

    // Add a var for each language you want to support
    var langTxt = document.getElementsByClassName('lang');
    var enTxt = document.getElementsByClassName('en');
    var frTxt = document.getElementsByClassName('fr');

    for (var i = 0; i < langTxt.length; i++) {
        langTxt[i].style.display = 'none';
    }

    // Add the new languages to the fail-safe to make sure all variants will be shown correctly
    if (lang.includes('en')) {
        lang = 'en';
    }
    else if (lang.includes('fr')) {
        lang = 'fr';
    }

    // Add the new languages to switch the shown texts
    switch (lang) {
        case 'fr':
            for (var i = 0; i < frTxt.length; i++) {
                frTxt[i].style.display = 'block';
            }
            break;
        case 'en':
        default:
            for (var i = 0; i < enTxt.length; i++) {
                enTxt[i].style.display = 'block';
            }
            break;
    }

    document.getElementById('lang-switch').value = lang;
    document.documentElement.lang = lang;

    saveLanguagePref(lang);
}
