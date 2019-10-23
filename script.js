

// $(document).ready(function() {});

$(function() {
    // nameSpacing
    const flagApp = {};

    // individual flag boxes, to put into the gamepage
    flagApp.gameBox = [
        {
            country: "canada",
            image: '<img src="./styles/assets/1canada.png" alt="flag of ca" srcset="">',
            answers: [
                "peru", 
                "canada", 
                "australia",
                "united kingdom",
            ]
        }, 
        {
            country: "china",
            image: '<img src="./styles/assets/2china.png" alt="flag of cn" srcset="">',
            answers: [
                "vietnam", 
                "turkey", 
                "china",
                "sinapore",
            ]
        }, 
        {
            country: "united states",
            image: '<img src="./styles/assets/3united-states.png" alt="flag of us" srcset="">',
            answers: [
                "united states", 
                "liberia", 
                "malaysia",
                "united kingdom",
            ]
        }, 
        {
            country: "japan",
            image: '<img src="./styles/assets/4japan.png" alt="flag of jp" srcset="">',
            answers: [
                "japan", 
                "vietnam", 
                "bangladesh",
                "south korea",
            ]
        }, 
        {
            country: "south korea",
            image: '<img src="./styles/assets/5korea.png" alt="flag of kr" srcset="">',
            answers: [
                "south korea", 
                "north korea", 
                "laos",
                "japan",
            ]
        }, 
        {
            country: "chad",
            image: '<img src="./styles/assets/6chad.png" alt="flag of td" srcset="">',
            answers: [
                "romania", 
                "chad", 
                "armenia",
                "russia",
            ]
        }, 
        {
            country: "belgium",
            image: '<img src="./styles/assets/7belgium.png" alt="flag of be" srcset="">',
            answers: [
                "germany", 
                "romania", 
                "belgium",
                "netherlands",
            ]
        }, 
        {
            country: "cote d'ivoire",
            image: '<img src="./styles/assets/8cote-d-ivoire.png" alt="flag of ci" srcset="">',
            answers: [
                "hungary", 
                "ireland", 
                "italy",
                "cote d'ivoire",
            ]
        }, 
        {
            country: "norway",
            image: '<img src="./styles/assets/9norway.png" alt="flag of no" srcset="">',
            answers: [
                "norway", 
                "iceland", 
                "sweden",
                "denmark",
            ]
        }, 
        {
            country: "indonesia",
            image: '<img src="./styles/assets/10indonesia.png" alt="flag of id" srcset="">',
            answers: [
                "austria", 
                "indonesia", 
                "poland",
                "monaco",
            ]
        }, 
        {
            country: "new zealand",
            image: '<img src="./styles/assets/11new-zealand.png" alt="flag of nz" srcset="">',
            answers: [
                "united kingdom", 
                "australia", 
                "croatia",
                "new zealand",
            ]
        }, 
        {
            country: "honduras",
            image: '<img src="./styles/assets/12honduras.png" alt="flag of hn" srcset="">',
            answers: [
                "honduras", 
                "argentina", 
                "nicaragua",
                "el salvador",
            ]
        }, 
        {
            country: "senegal",
            image: '<img src="./styles/assets/13senegal.png" alt="flag of sn" srcset="">',
            answers: [
                "senegal", 
                "burkina faso", 
                "suriname",
                "são tomé and príncipe",
            ]
        }, 
        {
            country: "syria",
            image: '<img src="./styles/assets/14syria.png" alt="flag of sy" srcset="">',
            answers: [
                "afghanistan", 
                "egypt", 
                "syria",
                "iraq",
            ]
        }, 
        {
            country: "united kingdom",
            image: '<img src="./styles/assets/15united-kingdom.png" alt="flag of uk" srcset="">',
            answers: [
                "united kingdom", 
                "england", 
                "australia",
                "new zealand",
            ]
        }, 
        {
            country: "paraguay",
            image: '<img src="./styles/assets/16paraguay.png" alt="flag of py" srcset="">',
            answers: [
                "slovenia", 
                "paraguay", 
                "slovakia",
                "croatia",
            ]
        }, 
        {
            country: "slovenia",
            image: '<img src="./styles/assets/17slovenia.png" alt="flag of si" srcset="">',
            answers: [
                "russia", 
                "venezuela", 
                "slovakia",
                "slovenia",
            ]
        }, 
        {
            country: "ghana",
            image: '<img src="./styles/assets/18ghana.png" alt="flag of gh" srcset="">',
            answers: [
                "ghana", 
                "ethiopia", 
                "myanmar",
                "bolivia",
            ]
        }, 
        {
            country: "liechtenstein",
            image: '<img src="./styles/assets/19liechtenstein.png" alt="flag of li" srcset="">',
            answers: [
                "liechtenstein", 
                "haiti", 
                "serbia",
                "andorra",
            ]
        }, 
        {
            country: "ecuador",
            image: '<img src="./styles/assets/20ecuador.png" alt="flag of ec" srcset="">',
            answers: [
                "venezuela", 
                "colombia", 
                "armenian",
                "ecuador",
            ]
        }, 
        {
            country: "tuvalu",
            image: '<img src="./styles/assets/21tuvalu.png" alt="flag of tv" srcset="">',
            answers: [
                "new zealand", 
                "fiji", 
                "tuvalu",
                "naru",
            ]
        }, 
        {
            country: "andorra",
            image: '<img src="./styles/assets/22andorra.png" alt="flag of ad" srcset="">',
            answers: [
                "moldova", 
                "romania", 
                "andorra",
                "chad",
            ]
        }, 
        {
            country: "costa rica",
            image: '<img src="./styles/assets/23costa-rica.png" alt="flag of cr" srcset="">',
            answers: [
                "thailand", 
                "costa rica", 
                "yugoslavia",
                "netherlands",
            ]
        }, 
        {
            country: "yemen",
            image: '<img src="./styles/assets/24yemen.png" alt="flag of ye" srcset="">',
            answers: [
                "iraq", 
                "belgium", 
                "yemen",
                "estonia",
            ]
        }, 
        {
            country: "palau",
            image: '<img src="./styles/assets/25palau.png" alt="flag of pw" srcset="">',
            answers: [
                "palau", 
                "nauru", 
                "bangladesh",
                "tuvalu",
            ]
        }, 
        {
            country: "montenegro",
            image: '<img src="./styles/assets/26montenegro.png" alt="flag of me" srcset="">',
            answers: [
                "cyprus", 
                "montenegro", 
                "north macedonia",
                "albania",
            ]
        }, 
        {
            country: "papua new guinea",
            image: '<img src="./styles/assets/27papua-new-guinea.png" alt="flag of pg" srcset="">',
            answers: [
                "nepal", 
                "brunei", 
                "belize",
                "papua new guinea",
            ]
        }, 
        {
            country: "western sahara",
            image: '<img src="./styles/assets/28western-sahara.png" alt="flag of eh" srcset="">',
            answers: [
                "western sahara", 
                "sudan", 
                "jordan",
                "united arab emirates",
            ]
        }, 
        {
            country: "vanuatu",
            image: '<img src="./styles/assets/29vanuatu.png" alt="flag of vu" srcset="">',
            answers: [
                "vanuatu", 
                "mozambique", 
                "kuwait",
                "antigua and barbuda",
            ]
        }, 
        {
            country: "denmark",
            image: '<img src="./styles/assets/30denmark.png" alt="flag of dk" srcset="">',
            answers: [
                "denmark", 
                "switzerland", 
                "sweden",
                "finland",
            ]
        }, 
        {
            country: "lebanon",
            image: '<img src="./styles/assets/31lebanon.png" alt="flag of lb" srcset="">',
            answers: [
                "san marino", 
                "latvia", 
                "lebanon",
                "laos",
            ]
        }, 
        {
            country: "panama",
            image: '<img src="./styles/assets/32panama.png" alt="flag of pa" srcset="">',
            answers: [
                "panama", 
                "honduras", 
                "guatemala",
                "burkina faso",
            ]
        }, 
        {
            country: "philippines",
            image: '<img src="./styles/assets/33philippines.png" alt="flag of ph" srcset="">',
            answers: [
                "philippines", 
                "cuba", 
                "puerto rico",
                "catalonia",
            ]
        }, 
        {
            country: "kyrgyzstan",
            image: '<img src="./styles/assets/34kyrgyzstan.png" alt="flag of kg" srcset="">',
            answers: [
                "kazakhstan", 
                "uzbekistan", 
                "kyrgyzstan",
                "turkmenistan",
            ]
        }, 
        {
            country: "vatican city",
            image: '<img src="./styles/assets/35vatican-city.png" alt="flag of va" srcset="">',
            answers: [
                "malta", 
                "georgia", 
                "san marino",
                "vatican city",
            ]
        }, 
        {
            country: "jamaica",
            image: '<img src="./styles/assets/36jamaica.png" alt="flag of jm" srcset="">',
            answers: [
                "jamaica", 
                "kenya", 
                "south africa",
                "zimbabwe",
            ]
        }, 
        {
            country: "bahamas",
            image: '<img src="./styles/assets/37bahamas.png" alt="flag of bs" srcset="">',
            answers: [
                "fiji", 
                "tahiti", 
                "bahamas",
                "maldives",
            ]
        }, 
        {
            country: "seychelles",
            image: '<img src="./styles/assets/38seychelles.png" alt="flag of sc" srcset="">',
            answers: [
                "comoros", 
                "madagascar", 
                "cape verde",
                "seychelles",
            ]
        }, 
        {
            country: "bhutan",
            image: '<img src="./styles/assets/39bhutan.png" alt="flag of bt" srcset="">',
            answers: [
                "mongolia", 
                "bhutan", 
                "brunei",
                "taiwan",
            ]
        }, 
        {
            country: "brazil",
            image: '<img src="./styles/assets/40brazil.png" alt="flag of br" srcset="">',
            answers: [
                "brazil", 
                "mexico", 
                "new zealand",
                "chile",
            ]
        }, 
        {
            country: "qatar",
            image: '<img src="./styles/assets/41qatar.png" alt="flag of qa" srcset="">',
            answers: [
                "qatar", 
                "bahrain", 
                "oman",
                "saudi arabia",
            ]
        }, 
        {
            country: "mauritius",
            image: '<img src="./styles/assets/42mauritius.png" alt="flag of mu" srcset="">',
            answers: [
                "kiribati", 
                "tonga", 
                "madagascar",
                "mauritius",
            ]
        }, 
        {
            country: "mali",
            image: '<img src="./styles/assets/43mali.png" alt="flag of ml" srcset="">',
            answers: [
                "senegal", 
                "mali", 
                "benin",
                "malawi",
            ]
        }, 
        {
            country: "guinea",
            image: '<img src="./styles/assets/44guinea.png" alt="flag of gn" srcset="">',
            answers: [
                "zambia", 
                "benin", 
                "eritrea",
                "guinea",
            ]
        }, 
        {
            country: "niger",
            image: '<img src="./styles/assets/45niger.png" alt="flag of ne" srcset="">',
            answers: [
                "niger", 
                "nigeria", 
                "india",
                "bangladesh",
            ]
        }, 
        {
            country: "singapore",
            image: '<img src="./styles/assets/46singapore.png" alt="flag of sg" srcset="">',
            answers: [
                "turkey", 
                "singapore", 
                "sunisia",
                "pakistan",
            ]
        }, 
        {
            country: "france",
            image: '<img src="./styles/assets/47france.png" alt="flag of fr" srcset="">',
            answers: [
                "netherlands", 
                "france", 
                "acadia",
                "ireland",
            ]
        }, 
        {
            country: "austria",
            image: '<img src="./styles/assets/48austria.png" alt="flag of at" srcset="">',
            answers: [
                "austria", 
                "indonesia", 
                "poland",
                "monaco",
            ]
        }, 
        {
            country: "israel",
            image: '<img src="./styles/assets/49israel.png" alt="flag of il" srcset="">',
            answers: [
                "malta", 
                "bahrain", 
                "israel",
                "luxembourg",
            ]
        }, 
        {
            country: "eswatini",
            image: '<img src="./styles/assets/50eswatini.png" alt="flag of eswatini" srcset="">',
            answers: [
                "saint lucia", 
                "uganda", 
                "eswatini",
                "zambia",
            ]
        }, 
    ]


// randomizing //////////////////////////////////////////////
    
    // temporary variables
    flagApp.tempAnswers = [];
    flagApp.randIndex = 0;
    flagApp.tempGameBox = [];
    flagApp.currentFlagIndex = 0;
    flagApp.currentAnswersIndex = 0;

    // shuffle function
    flagApp.shuffle = function(tempArray, originalArray) {
        while (tempArray.length < originalArray.length) {
            this.randIndex = Math.floor(Math.random() * originalArray.length);
            if (tempArray.includes(originalArray[this.randIndex]) === false) {
                tempArray.push(originalArray[this.randIndex]);
            }
        }
    }

    // call function to shuffle tempGameBox and then use it to replace gameBox
    flagApp.shuffle(flagApp.tempGameBox, flagApp.gameBox);
    flagApp.gameBox = flagApp.tempGameBox.slice(0);

    // currentFlag starts from 0 of the shuffled gameBox array
    flagApp.currentFlag = flagApp.gameBox[flagApp.currentFlagIndex];
    // console.log(flagApp.gameBox);

    // call function to shuffle the answers of the current Flag
    // then replace the current flag answers with the shuffled answers
    flagApp.shuffle(flagApp.tempAnswers, flagApp.currentFlag.answers);
    flagApp.currentFlag.answers = flagApp.tempAnswers.slice(0);
    // console.log(flagApp.currentFlag);

////////////////////////////////////////////////////////////////

// HTML variables //////////////////////////////////////////////
    // form variables
    flagApp.refreshFlagForm = $('form');
    flagApp.flagImageBox = $('.flag');
    flagApp.radioInput = $(':radio');
    flagApp.radioInputLabelA = $("label[for='choiceA']");
    flagApp.radioInputA = $("#choiceA");
    flagApp.radioInputLabelB = $("label[for='choiceB']");
    flagApp.radioInputB = $("#choiceB");
    flagApp.radioInputLabelC = $("label[for='choiceC']");
    flagApp.radioInputC = $("#choiceC");
    flagApp.radioInputLabelD = $("label[for='choiceD']");
    flagApp.radioInputD = $("#choiceD");

    // other variables
    flagApp.landingPage = $(".landingPage");
    flagApp.section = $("section");
    flagApp.countryTitle = $(".countryTitle");
    flagApp.box = $(".box");
    flagApp.timer = $(".timer");
    flagApp.endPage = $(".endPage");
    flagApp.points = 0;

    // timer variables
    flagApp.seconds = 60;
////////////////////////////////////////////////////////////////


// inGame Functions ///////////////////////////////////////////

    // match new randomized answer set to labels and values of the radio form details
    flagApp.radioDetails = function() {
        flagApp.radioInputLabelA.text(flagApp.currentFlag.answers[0]);
        flagApp.radioInputA.val(flagApp.currentFlag.answers[0]);
        // console.log(flagApp.radioInputA.val())
        flagApp.radioInputLabelB.text(flagApp.currentFlag.answers[1]);
        flagApp.radioInputB.val(flagApp.currentFlag.answers[1]);
        // console.log(flagApp.radioInputB.val())
        flagApp.radioInputLabelC.text(flagApp.currentFlag.answers[2]);
        flagApp.radioInputC.val(flagApp.currentFlag.answers[2]);
        // console.log(flagApp.radioInputC.val())
        flagApp.radioInputLabelD.text(flagApp.currentFlag.answers[3]);
        flagApp.radioInputD.val(flagApp.currentFlag.answers[3]);
        // console.log(flagApp.radioInputD.val())
    }

    // timer functions
    flagApp.gameTimer = function () {
        setInterval(function() {
            let secondsDisplayed = flagApp.seconds;

            flagApp.seconds = Number(flagApp.seconds) - 1;
            flagApp.seconds = "" + flagApp.seconds + "";

            if (Number(flagApp.seconds) === 0) {
                flagApp.endGameDetails();
            } else {
                secondsDisplayed = `
                    <h3>
                        ${flagApp.seconds}
                    </h3>
                `;
                flagApp.timer.html(secondsDisplayed);
            }
        }, 1000); 
    }

    // function for change that occurs once landing page is clicked
    flagApp.landingPage.on("click", function() {
        flagApp.section.toggleClass("invisible");
        flagApp.timer.removeClass("invisible");
        const currentImage = flagApp.currentFlag.image;
        flagApp.flagImageBox.html(currentImage);
        flagApp.radioDetails();
        flagApp.radioInput.prop('checked',false);
        flagApp.gameTimer();
    });

    // function that determines what goes inside last page
    flagApp.endGameDetails = function () {
        flagApp.endPage.append(`
        <h3>
            ${flagApp.points} points
        </h3>
        <h2>
            click anywhere to play again
        </h2>
        `);
        flagApp.box.toggleClass("invisible");
    }

    // function for the actions that occur once the form is submitted
    flagApp.refreshFlagForm.on('submit', function(e) {
        e.preventDefault();

        // store userAnswer and collect points, lowest points possible is 0
        let userAnswer = $("input[name='multipleChoice']:checked").val()
        if (userAnswer === flagApp.currentFlag.country) {
            flagApp.points+=357;
            console.log(flagApp.points);
            flagApp.countryTitle.html("Amazing!");
        } else {
            flagApp.countryTitle.html(`The correct answer was : "${flagApp.currentFlag.country.toUpperCase()}"`);
            console.log(flagApp.currentFlag.country);
            if (flagApp.points <= 0) {
                flagApp.points = 0;
                console.log(flagApp.points);
            } else {
            flagApp.points-=123;
            console.log(flagApp.points);
            }
        }

        // swapping between different flags until array ends or timer runs out
        if (flagApp.currentFlagIndex < flagApp.gameBox.length - 1) {
            flagApp.currentFlagIndex++;
        } else {
            flagApp.endGameDetails();
        }

        // display current flag image
        flagApp.currentFlag = flagApp.gameBox[flagApp.currentFlagIndex];
        const currentImage = flagApp.currentFlag.image;
        flagApp.flagImageBox.html(currentImage);

        // display shuffled answers that belong to current flag
        flagApp.tempAnswers = [];
        flagApp.shuffle(flagApp.tempAnswers, flagApp.currentFlag.answers);
        flagApp.currentFlag.answers = flagApp.tempAnswers.slice(0);

        // calling randomized radio button, and clearing once form submits
        flagApp.radioDetails();
        flagApp.radioInput.prop('checked',false);

    });

    // function to restart game 
    flagApp.endPage.on("click", function() {
        location.reload();
    });





});