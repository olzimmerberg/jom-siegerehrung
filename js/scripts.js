var START_TIME = '2020-10-25 16:00:00';
// var START_TIME = '2020-10-24 15:23:00'; // TODO: FIX

var RANGLISTE = {
    "D10": [
        "user",
        "11xx-D10",
        "11xx-D10",
        "11xx-D10",
        "11xx-D10",
        "user",
    ],
    "H10": [
        "user",
        "11xx-H10",
        "11xx-H10",
        "11xx-H10",
        "11xx-H10",
        "user",
    ],
    "D12": [
        "user",
        "11xx-D12",
        "11xx-D12",
        "11xx-D12",
        "11xx-D12",
        "user",
    ],
    "H12": [
        "user",
        "11xx-H12",
        "11xx-H12",
        "11xx-H12",
        "11xx-H12",
        "user",
    ],
    "D14": [
        "user",
        "11xx-D14",
        "11xx-D14",
        "11xx-D14",
        "11xx-D14",
        "user",
    ],
    "H14": [
        "user",
        "11xx-H14",
        "11xx-H14",
        "11xx-H14",
        "11xx-H14",
        "user",
    ],
    "D16": [
        "user",
        "11xx-D16",
        "11xx-D16",
        "11xx-D16",
        "11xx-D16",
        "user",
    ],
    "H16": [
        "user",
        "11xx-H16",
        "11xx-H16",
        "11xx-H16",
        "11xx-H16",
        "user",
    ],
    "D18": [
        "user",
        "11xx-D18",
        "11xx-D18",
        "11xx-D18",
        "11xx-D18",
        "user",
    ],
    "H18": [
        "user",
        "11xx-H18",
        "11xx-H18",
        "11xx-H18",
        "11xx-H18",
        "user",
    ],
};

var DATA_BY_ID = {
    "user": {"name": "Testperson mit Bild", "club": "OLG Muster"},
    "11xx-D10": {"name": "Testperson D10", "club": "OLG Muster"},
    "11xx-H10": {"name": "Testperson H10", "club": "OLG Muster"},
    "11xx-D12": {"name": "Testperson D12", "club": "OLG Muster"},
    "11xx-H12": {"name": "Testperson H12", "club": "OLG Muster"},
    "11xx-D14": {"name": "Testperson D14", "club": "OLG Muster"},
    "11xx-H14": {"name": "Testperson H14", "club": "OLG Muster"},
    "11xx-D16": {"name": "Testperson D16", "club": "OLG Muster"},
    "11xx-H16": {"name": "Testperson H16", "club": "OLG Muster"},
    "11xx-D18": {"name": "Testperson D18", "club": "OLG Muster"},
    "11xx-H18": {"name": "Testperson H18", "club": "OLG Muster"},

    "1100-H10": {"name": "Matteo Schlienger", "club": "OLG Säuliamt"},
    "1100-H14": {"name": "Urs Truninger", "club": "OLG Schaffhausen"},

    "1101-D16": {"name": "Lea Stöcklin", "club": "OLC Kapreolo"},
    "1101-H12": {"name": "Nicola Schlienger", "club": "OLG Säuliamt"},
    "1101-H16": {"name": "Nils Hindermann", "club": "OLG Stäfa"},

    "1102-D10": {"name": "Joelle Hinder", "club": "OLC Winterthur"},
    "1102-D14": {"name": "Laura Tiemann", "club": "OLG Stäfa"},

    "1103-D12": {"name": "Jonna Mohn", "club": "OLC Kapreolo"},
    "1103-D18": {"name": "Karla Kraus", "club": "OLC Winterthur"},
    "1103-H18": {"name": "Pascal Schärer", "club": "OLG Pfäffikon"},

    "1104-H10": {"name": "Jon Gürtler", "club": "OLC Winterthur"},
    "1104-H14": {"name": "Laurin Schlienger", "club": "OLG Säuliamt"},

    "1105-D16": {"name": "Anna Stüdeli", "club": "OLG Säuliamt"},
    "1105-H12": {"name": "Pierre Geiges", "club": "OLG Stäfa"},
    "1105-H16": {"name": "Leon Frei", "club": "OLC Winterthur"},

    "1106-D10": {"name": "Nadine Rudolf", "club": "OLG Stäfa"},
    "1106-D14": {"name": "Corina Pünter", "club": "OLG Stäfa"},

    "1107-D12": {"name": "Nora Tschopp", "club": "OLG Dachsen"},
    "1107-D18": {"name": "Marion Gysel", "club": "OLC Kapreolo"},
    "1107-H18": {"name": "Janne Tantanini", "club": "OLK Rafzerfeld"},

    "1108-H10": {"name": "Rémi Geiges", "club": "OLG Stäfa"},
    "1108-H14": {"name": "Nils Deuber", "club": "OLC Winterthur"},

    "1109-D16": {"name": "Manon Fäh Sokoloff", "club": "OLC Kapreolo"},
    "1109-H12": {"name": "Jorin Mohn", "club": "OLC Kapreolo"},
    "1109-H16": {"name": "Lucas Brogle", "club": "OLG Schaffhausen"},

    "1110-D10": {"name": "Alina Tiemann", "club": "OLG Stäfa"},
    "1110-D14": {"name": "Sanjana Klieber", "club": "OL Zimmerberg"},

    "1111-D12": {"name": "Alexandra Köhle", "club": "OLG Stäfa"},
    "1111-D18": {"name": "Aline Wyder", "club": "OLC Kapreolo"},
    "1111-H18": {"name": "Tobias Schulthess", "club": "OLC Kapreolo"},

    "1112-H10": {"name": "Dominic Graf", "club": "OLK Rafzerfeld"},
    "1112-H14": {"name": "Giulian Roth", "club": "OLG Schaffhausen"},

    "1113-D16": {"name": "Viviane Seiz", "club": "O-Motion"},
    "1113-H12": {"name": "Andrin Baumberger", "club": "OLG Zürich"},
    "1113-H16": {"name": "Valentin Fritschi", "club": "OLG Welsikon"},

    "1114-D10": {"name": "Elin Gürtler", "club": "OLC Winterthur"},
    "1114-D14": {"name": "Rachel Cotting", "club": "OLG Stäfa"},

    "1115-D12": {"name": "Sanna Schulthess", "club": "OLC Kapreolo"},
    "1115-D18": {"name": "Lena Gasser", "club": "OL Zimmerberg"},
    "1115-H18": {"name": "Martin Köhle", "club": "O-Motion"},

    "1116-H10": {"name": "Bence Cormier", "club": "OLC Kapreolo"},
    "1116-H14": {"name": "Jann Talbot", "club": "OLG Stäfa"},

    "1117-D16": {"name": "Anna Rettich", "club": "OL Zimmerberg"},
    "1117-H12": {"name": "Janis Tiemann", "club": "OLG Stäfa"},
    "1117-H16": {"name": "Simon Wolfensberger", "club": "OLC Winterthur"},

    "1118-D10": {"name": "Eva Castenetto", "club": "OLG Zürich"},
    "1118-D14": {"name": "Ladina Baur", "club": "OLC Kapreolo"},

    "1119-D12": {"name": "Naja Krauer", "club": "OLG Säuliamt"},
    "1119-D18": {"name": "Lea Rettich", "club": "OL Zimmerberg"},
    "1119-H18": {"name": "Benjamin Wey", "club": "OLG Zürich"},

    "1120-H10": {"name": "Nils Winteler", "club": "OLG Stäfa"},
    "1120-H14": {"name": "Flurin Rettich", "club": "OL Zimmerberg"},

    "1121-D16": {"name": "Seline Sannwald", "club": "OLG Stäfa"},
    "1121-H12": {"name": "Leandro Obrist", "club": "OLC Kapreolo"},
    "1121-H16": {"name": "Leander Wylenmann", "club": "OLG Pfäffikon"},

    "1122-D10": {"name": "Elin Lefèvre", "club": "OLC Kapreolo"},
    "1122-D14": {"name": "Malu Schweizer", "club": "OLG Stäfa"},

    "1123-D12": {"name": "Seraina Baer", "club": "O-Motion"},
    "1123-D18": {"name": "Patrizia Sieber", "club": "OLC Winterthur"},

    "1124-H10": {"name": "Maurice Schulthess", "club": "OLC Kapreolo"},
    "1124-H14": {"name": "Tim Frei", "club": "OLG Dachsen"},

    "1125-D16": {"name": "Anna Gasser", "club": "O-Motion"},
    "1125-H12": {"name": "Valerio Obrist", "club": "OLC Kapreolo"},
    "1125-H16": {"name": "Silvan Ghirlanda", "club": "OL Zimmerberg"},

    "1126-D10": {"name": "Seline Widler", "club": "OLG Weisslingen"},
    "1126-D14": {"name": "Elena Maurer", "club": "OLG Welsikon"},

    "1127-D12": {"name": "Marlen Wälti", "club": "OLC Winterthur"},
    "1127-D18": {"name": "Annick Meister", "club": "OLG Dachsen"},

    "1128-H10": {"name": "Jakob Wälti", "club": "OLC Winterthur"},
    "1128-H14": {"name": "Aurelius Kasper", "club": "OL Zimmerberg"},

    "1129-D16": {"name": "Paulina Radzikowski", "club": "O-Motion"},
    "1129-H12": {"name": "Florian Frank", "club": "OLC Kapreolo"},
    "1129-H16": {"name": "Manuel Baur", "club": "OLC Kapreolo"},

    "1130-D10": {"name": "Leana Heiner", "club": "OLG Pfäffikon"},
    "1130-D14": {"name": "Verena Köhle", "club": "O-Motion"},

    "1131-D12": {"name": "Bigna Hotz", "club": "OL Zimmerberg"},

    "1132-H10": {"name": "Emanuel Schmucki", "club": "OLG Stäfa"},
    "1132-H14": {"name": "Lorenz Fritschi", "club": "OLG Welsikon"},

    "1133-H12": {"name": "Mark Kraus", "club": "OLC Winterthur"},
    "1133-H16": {"name": "Lukas Cotting", "club": "OLG Stäfa"},

    "1134-D10": {"name": "Kira Maurer", "club": "OLG Welsikon"},
    "1134-D14": {"name": "Andrina Hotz", "club": "OL Zimmerberg"},

    "1135-D12": {"name": "Mira Werder", "club": "OLG Säuliamt"},

    "1136-H10": {"name": "Nils Heilmeier", "club": "OLC Winterthur"},
    "1136-H14": {"name": "Gian Rettich", "club": "OL Zimmerberg"},

    "1137-H12": {"name": "Robin Kraut", "club": "OLC Kapreolo"},
    "1137-H16": {"name": "David Baumberger", "club": "OLG Zürich"},

    "1138-D14": {"name": "Emma Wälti", "club": "OLC Winterthur"},

    "1139-D12": {"name": "Aline Geiges", "club": "OLG Stäfa"},

    "1140-H10": {"name": "Cyrill Kuhn", "club": "OLG Pfäffikon"},
    "1140-H14": {"name": "Janis Kuhn", "club": "OLG Pfäffikon"},

    "1141-H12": {"name": "Loïc Fäh Sokoloff", "club": "OLC Kapreolo"},
    "1141-H16": {"name": "Laurin Maurer", "club": "OLC Kapreolo"},

    "1142-D14": {"name": "Minna Senn", "club": "O-Motion"},

    "1143-D12": {"name": "Fiona Gasser", "club": "O-Motion"},

    "1144-H10": {"name": "Ilian Flühmann", "club": "OLG Pfäffikon"},
    "1144-H14": {"name": "Lukas Gasser", "club": "OL Zimmerberg"},

    "1145-H12": {"name": "Laurin Kuhn", "club": "OLG Pfäffikon"},

    "1146-D14": {"name": "Coralie Waldner", "club": "OLG Pfäffikon"},

    "1148-H10": {"name": "Luc Frei", "club": "OLG Dachsen"},
    "1148-H14": {"name": "Nicolas Mohn", "club": "OLC Kapreolo"},

    "1149-H12": {"name": "Romeo Böhi", "club": "OL Zimmerberg"},

    "1150-D14": {"name": "Ladina Gasser", "club": "O-Motion"},

    "1152-H14": {"name": "Stefan Zölly", "club": "OLG Stäfa"},

    "1153-H12": {"name": "Yannick Widler", "club": "OLG Weisslingen"},

    "1154-D14": {"name": "Henriette Radzikowski", "club": "O-Motion"},

    "1156-H14": {"name": "Gratian Böhi", "club": "OL Zimmerberg"},

    "1157-H12": {"name": "Manuel Gasser", "club": "OL Zimmerberg"},
};

var CLASSES = [
    "D10",
    "H10",
    "D12",
    "H12",
    "D14",
    "H14",
    "D16",
    "H16",
    "D18",
    "H18",
];

var ORDINALS = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
];

var clockElem = document.getElementById('clock');
var countdownElem = document.getElementById('countdown');
var countdownAudio = document.getElementById('countdown-audio');
var anspracheElem = document.getElementById('ansprache');
var anspracheIframe = document.getElementById('ansprache-iframe');
var siegerehrungElem = document.getElementById('siegerehrung');
var fanfareAudio = document.getElementById('fanfare-audio');

function startCountdown() {
    console.log('COUNTDOWN');
    anspracheElem.style.pointerEvents = "none";
    siegerehrungElem.style.pointerEvents = "none";
    countdownElem.style.opacity = 1;
    anspracheElem.style.opacity = 0;
    siegerehrungElem.style.opacity = 0;
    countdownAudio.setAttribute('class', 'active');
    fanfareAudio.setAttribute('class', 'inactive');
    startPlaying(countdownAudio);
    countDown();
    var remaining = Date.parse(START_TIME) - Date.now();
    var reloadInterval = remaining - 5 * 60 * 1000;
    if (reloadInterval > 100) {
        setTimeout(() => window.location.reload(), reloadInterval);
    }
}

function countDown() {
    var remaining = Date.parse(START_TIME) - Date.now();
    if (remaining < 0) {
        startAnsprache();
        return;
    }
    var hours = Math.floor(remaining / (1000 * 60 * 60));
    var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remaining % (1000 * 60)) / (1000));
    clockElem.innerHTML = String(hours) + ":" + String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
    var miliseconds = remaining % 1000;
    // console.log(hours, minutes, seconds, miliseconds);
    setTimeout(countDown, miliseconds + 10);
} 

var anspracheTimeout = undefined;

function startAnsprache() {
    console.log('ANSPRACHE');
    anspracheElem.style.pointerEvents = "auto";
    siegerehrungElem.style.pointerEvents = "none";
    countdownElem.style.opacity = 0;
    anspracheElem.style.opacity = 1;
    siegerehrungElem.style.opacity = 0;
    countdownAudio.setAttribute('class', 'inactive');
    fanfareAudio.setAttribute('class', 'inactive');
    countdownAudio.pause();
    setTimeout(() => {
        anspracheIframe.src = 'https://www.youtube.com/embed/HMoFgv0_2wQ?&autoplay=1&showinfo=0&controls=0';
    }, 3000);
    anspracheTimeout = setTimeout(startSiegerehrung, 290 * 1000);
}

var afterScrollTimeout = undefined;

function startSiegerehrung() {
    console.log('SIEGEREHRUNG');
    anspracheIframe.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
    clearTimeout(anspracheTimeout);
    anspracheElem.style.pointerEvents = "none";
    siegerehrungElem.style.pointerEvents = "auto";
    countdownElem.style.opacity = 0;
    anspracheElem.style.opacity = 0;
    siegerehrungElem.style.opacity = 1;
    countdownAudio.setAttribute('class', 'inactive');
    fanfareAudio.setAttribute('class', 'active');
    fillInSiegerehrung();
    window.onscroll = () => {
        clearTimeout(afterScrollTimeout);
        afterScrollTimeout = setTimeout(() => {
            var classIndex = Math.floor((window.pageYOffset + window.innerHeight / 2) / window.innerHeight);
            if (classIndex !== currentClass) {
                ehrClass(classIndex);
            }    
        }, 200);
    }
    setTimeout(() => {
        window.scroll(0, 0);
        ehrClass(0);
    }, 3000);
}

function fillInSiegerehrung() {
    for (var className of CLASSES) {
        for (var rank = 1; rank <= ORDINALS.length; rank++) {
            var competitorId = RANGLISTE[className][rank - 1];
            var competitorData = DATA_BY_ID[competitorId];
            // console.log(className, rank, competitorId, competitorData);
            if (competitorData) {
                var classElemSelector = `kat-${className.toLowerCase()}`;
                var ordinal = ORDINALS[rank - 1];
                var imgElem = document.querySelector(`#${classElemSelector} .${ordinal}.img`);
                var nameElem = document.querySelector(`#${classElemSelector} .${ordinal}.name`);
                var clubElem = document.querySelector(`#${classElemSelector} .${ordinal}.club`);
                // console.log(`${classElemSelector} .${ordinal}.name`, nameElem, clubElem);
                if (competitorId === 'user') {
                    imgElem.src = `./img/portraits/user.png`;
                } else {
                    imgElem.src = `./img/portraits/${competitorId}.jpg`;
                }
                nameElem.innerHTML = competitorData.name;
                clubElem.innerHTML = competitorData.club;
            }
        }
    }
}

var timeouts = [];
var currentClass = null;

function ehrClass(index) {
    stopEhringClass();
    currentClass = index;
    startPlaying(fanfareAudio);
    fanfareAudio.currentTime = 0;
    var className = CLASSES[index];
    console.log(`EHR ${className}`);
    if (index >= CLASSES.length) {
        fanfareAudio.pause();
        return;
    }
    var classElemSelector = `kat-${className.toLowerCase()}`;
    document.querySelector(`#${classElemSelector}`).scrollIntoView({behavior: 'smooth'});
    resetCompetitor(classElemSelector, 6);
    resetCompetitor(classElemSelector, 5);
    resetCompetitor(classElemSelector, 4);
    resetCompetitor(classElemSelector, 3);
    resetCompetitor(classElemSelector, 2);
    resetCompetitor(classElemSelector, 1);
    resetPokal(classElemSelector);
    timeouts.push(setTimeout(() => {
        fadeInCompetitor(classElemSelector, 6);
    }, 0));
    timeouts.push(setTimeout(() => {
        fadeInCompetitor(classElemSelector, 5);
    }, 3000));
    timeouts.push(setTimeout(() => {
        fadeInCompetitor(classElemSelector, 4);
    }, 6000));
    timeouts.push(setTimeout(() => {
        fadeInCompetitor(classElemSelector, 3);
    }, 9000));
    timeouts.push(setTimeout(() => {
        fadeInCompetitor(classElemSelector, 2);
    }, 12000));
    timeouts.push(setTimeout(() => {
        fadeInCompetitor(classElemSelector, 1);
    }, 15000));
    timeouts.push(setTimeout(() => {
        fadeInPokal(classElemSelector);
    }, 18000));
    timeouts.push(setTimeout(() => {
        handOutPokal(classElemSelector);
    }, 21000));
    timeouts.push(setTimeout(() => {
        ehrClass(index + 1);
    }, 30000));
}

function stopEhringClass() {
    timeouts.forEach(timeout => {
        clearTimeout(timeout);
    });
    timeouts = [];
}

function resetCompetitor(classElemSelector, rank) {
    var ordinal = ORDINALS[rank - 1];
    var imgElem = document.querySelector(`#${classElemSelector} .${ordinal}.img`);
    var nameElem = document.querySelector(`#${classElemSelector} .${ordinal}.name`);
    var clubElem = document.querySelector(`#${classElemSelector} .${ordinal}.club`);
    imgElem.classList.add('notransition');
    nameElem.classList.add('notransition');
    clubElem.classList.add('notransition');
    imgElem.style.opacity = 0;
    nameElem.style.opacity = 0;
    clubElem.style.opacity = 0;
    imgElem.offsetHeight; // Trigger a reflow, flushing the CSS changes
    nameElem.offsetHeight; // Trigger a reflow, flushing the CSS changes
    clubElem.offsetHeight; // Trigger a reflow, flushing the CSS changes
    imgElem.classList.remove('notransition');
    nameElem.classList.remove('notransition');
    clubElem.classList.remove('notransition');
}

function fadeInCompetitor(classElemSelector, rank) {
    var ordinal = ORDINALS[rank - 1];
    var imgElem = document.querySelector(`#${classElemSelector} .${ordinal}.img`);
    var nameElem = document.querySelector(`#${classElemSelector} .${ordinal}.name`);
    var clubElem = document.querySelector(`#${classElemSelector} .${ordinal}.club`);
    imgElem.style.opacity = 1;
    nameElem.style.opacity = 1;
    clubElem.style.opacity = 1;
}

function resetPokal(classElemSelector) {
    var imgElem = document.querySelector(`#${classElemSelector} .pokal`);
    imgElem.classList.add('notransition');
    imgElem.style.opacity = 0;
    imgElem.style.bottom = '100px';
    imgElem.style.left = '50%';
    imgElem.style.width = '300px';
    imgElem.style.marginLeft = '-200px';
    imgElem.offsetHeight; // Trigger a reflow, flushing the CSS changes
    imgElem.classList.remove('notransition');
}

function fadeInPokal(classElemSelector) {
    var imgElem = document.querySelector(`#${classElemSelector} .pokal`);
    imgElem.style.opacity = 1;
}

function handOutPokal(classElemSelector) {
    var imgElem = document.querySelector(`#${classElemSelector} .pokal`);
    imgElem.style.opacity = 1;
    imgElem.style.bottom = '300px';
    imgElem.style.left = '25%';
    imgElem.style.width = '100px';
    imgElem.style.marginLeft = '-75px';
}

function startPlaying(elem) {
    try {
        elem.play().catch((exc) => handleNoAudio(elem, exc));
    } catch (exc) {
        handleNoAudio(elem, exc);
    }
}

function handleNoAudio(elem, exc) {
    console.log(elem, exc);
    var audioElems = document.getElementsByTagName('audio');
    for (var audioElem of audioElems) {
        audioElem.controls = true;
    }
    alert("Bitte erlaube uns, auf dieser Seite Musik & Video abzuspielen. Klicke dazu ganz unten auf dieser Seite auf das \"Abspielen\"-Symbol");
}

function init() {
    var time = Date.now() - Date.parse(START_TIME);
    console.log(time);

    if (time <= 0) {
        startCountdown();
    } else {
        startAnsprache();
    }
}

init();