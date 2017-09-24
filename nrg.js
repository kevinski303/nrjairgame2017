setTimeout(() => {
    if (stop === true) {
        console.log("DON'T KNOW WHAT TO DO !?!")
    } else {
        let telnr = "0799470000"; //Mobile nr. (0799470000 ersetzen mit Mobilenr)
        let bubblenr = 5; //Bubble # die am ende gewählt werden soll
        prepare();

        let button = document.getElementsByClassName("round-button-circle round-button")[0];
        if (button === undefined && document.getElementsByTagName("h1")[0].innerHTML === "Hinter welchem Energy Air Logo versteckt sich das Ticket?") {
            document.getElementsByClassName("click-bubbles")[bubblenr].click()
        } else if (button === undefined) {
            stop = true;
        } else {
            button = button.innerHTML
            if (button === "LOS GEHTS") {
                var cookies = document.cookie.split(";");

                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    var eqPos = cookie.indexOf("=");
                    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
                }

                document.getElementById("mobile").value = telnr;

                document.getElementById("go").click();
            } else if (button === "WEITER GEHTS!" || button === "neu starten" || button === "Quiz neu starten") {
                document.getElementsByClassName("round-button-circle round-button")[0].click();
            } else {
                quiz();
            }
        }

        function quiz() {
            let question = document.getElementsByTagName("h1")[0].innerHTML;
            let answer = QUESTIONS.get(question);
            answer === undefined ? stop = true : "";


            radio = document.getElementById(answer);
            radio.checked = true;
            document.getElementsByClassName("round-button")[0].click();
        }

        function prepare() {
            QUESTIONS = new Map();
            QUESTIONS.set("Wie viele Tickets werden für das Energy Air verlost?", "option1");
            QUESTIONS.set("Welcher Energy Air Act aus den letzten Jahren stand nur mit seinem Gitarristen auf der Bühne?", "option1");
            QUESTIONS.set("Von welchem ehemaligen Energy Air Act ist der Song «Bilder im Kopf»?", "option1");
            QUESTIONS.set("Welcher Fussballverein ist im Stade de Suisse Zuhause?", "option1");
            QUESTIONS.set("Wie hiess die Energy Air Hymne 2015?", "option1");
            QUESTIONS.set("Wie gross ist die Spielfläche des Stade de Suisse?", "option2");
            QUESTIONS.set("Wie viel kostet ein Energy Air Ticket?", "option1");
            QUESTIONS.set("Wer war der letzte Act am Energy Air 2016?", "option1");
            QUESTIONS.set("Wann fand das Energy Air letztes Jahr statt?", "option1");
            QUESTIONS.set("Wie viele Tage dauert das Energy Air?", "option3");
            QUESTIONS.set("In welchem Jahr stand OneRepublic auf der Bühne des Energy Air?", "option1");
            QUESTIONS.set("Was ist die obere Altersbeschränkung des Energy Air?", "option2");
            QUESTIONS.set("Zum wievielten Mal findet das Energy Air statt? ", "option2");
            QUESTIONS.set("Welcher Act stand NOCH NIE auf der Energy Air Bühne?", "option3");
            QUESTIONS.set("Wann ist die offizielle Türöffnung beim Energy Air?", "option1");
            QUESTIONS.set("Wann fand das erste Energy Air statt?", "option1");
            QUESTIONS.set("Wo kann man Energy Air Tickets kaufen?", "option3");
            QUESTIONS.set("Welcher DJ stand noch nie auf der Energy Air Bühne?", "option2");
            QUESTIONS.set("Wo findet das Energy Air statt?", "option3");
            QUESTIONS.set("Was bedeutet Air auf Deutsch?", "option2");
            QUESTIONS.set("Wer war der letzte Act am Energy Air 2016?", "option1");
            QUESTIONS.set("Welcher Act performte in einem Karton-Hippie-Bus?", "option3");
            QUESTIONS.set("Wann wurde das Stade de Suisse offiziell fertig gestellt?", "option1");
            QUESTIONS.set("Wie lautet der offizielle Energy Air Hashtag?", "option3");
            QUESTIONS.set("Wer war der letzte Act am Energy Air 2016?", "option1");
            QUESTIONS.set("Welche Plätze gibt es am Energy Air? ", "option3");
            QUESTIONS.set("Wie viel kostet die Energy Air App?", "option2");
            QUESTIONS.set("Wie hiess der Energy Air Song im Jahr 2014? ", "option3");
            QUESTIONS.set("Das Energy Air ist ...?", "option1");
            QUESTIONS.set("Mit welchem Künstler stand Schlangenfrau Nina Burri auf der Bühne?", "option1");
            QUESTIONS.set("Wie lautet Manillios bürgerlicher Name?", "option1");
            QUESTIONS.set("Die wievielte Ausgabe des Energy Air findet 2016 statt?", "option2");
            QUESTIONS.set("Wie viele Male standen Dabu Fantastic bereits auf der Energy Air Bühne?", "option2");
            QUESTIONS.set("Von welchem vergangenen Energy Air Act ist der Song «Angelina»?", "option1");
            QUESTIONS.set("Was ist das Energy Air als einziger Energy Event?", "option1");
            QUESTIONS.set("Welcher Pop-Sänger stand in diesem Jahr schon auf der Bühne des Stade de Suisse?", "option1");
            QUESTIONS.set("Welche deutsche Sängerin stand letztes Jahr auf der Energy Air Bühne?", "option1");
            QUESTIONS.set("Wann findet das diesjährige Energy Air statt?", "option2");
            QUESTIONS.set("Ab wann darf man am Energy Air teilnehmen?", "option1");
            QUESTIONS.set("Welche Farben dominieren das Energy Air Logo?", "option3");
            QUESTIONS.set("Welches Stadion ist das grösste der Schweiz?", "option1");
            QUESTIONS.set("Von wem wird das Energy Air durchgeführt?", "option1");
            QUESTIONS.set("Wie heissen die beiden anderen grossen Events von Energy?", "option1");
            QUESTIONS.set("Wie viel kostet die Energy Air App? ", "option2");
            QUESTIONS.set("In welchem Monat findet das Energy Air jeweils statt?", "option2");
            QUESTIONS.set("Wie viele Zuschauer passen ins Stade de Suisse? ", "option1");
            QUESTIONS.set("Wie oft pro Jahr findet das Energy Air statt? ", "option3");
            QUESTIONS.set("Wie hiess das Stade de Suisse früher?", "option1");
            QUESTIONS.set("Welcher Act stand schon einmal auf der Energy Air Bühne?", "option1");
            QUESTIONS.set("Welcher dieser Acts Stand schon auf der Stade de Suisse Bühne?", "option1");
            QUESTIONS.set("Wie viele Tage dauert das Energy Air? ", "option3");
            QUESTIONS.set("Welcher Künstler stand NOCH NIE auf der Energy Air Bühne?", "option1");
            QUESTIONS.set("Ab wann darf man, ohne eine erwachsene Begleitperson, am Energy Air teilnehmen?", "option1");
            QUESTIONS.set("Wie viele Sitzplätze hat das Stade de Suisse bei Sportveranstaltungen?", "option1");
            QUESTIONS.set("In welcher Schweizer Stadt hat Energy KEIN Radiostudio?", "option3");
            QUESTIONS.set("Wie heissen zwei andere grosse Events von Energy?", "option1")
            QUESTIONS.set("Wer hatte den letzten Auftritt am Energy Air 2016? ", "option3")
        }
    }
}, 250);