   $(document).ready(function() {
        // Menu toggle
        $('#icon').click(function(){
            $('nav ul').toggleClass('show');
        });

        // Modalità scura
        const storedMode = localStorage.getItem('mode');
        if (storedMode) {
            applyMode(storedMode);
        }
        $('#darkModeToggle').click(function(){
            const isDarkMode = $('body').hasClass('dark-mode');
            const newMode = isDarkMode ? 'light-mode' : 'dark-mode';
            localStorage.setItem('mode', newMode);
            applyMode(newMode);
        });
        function applyMode(mode) {
            $('body, nav, section, footer, .footer-row a').removeClass('dark-mode light-mode').addClass(mode);
        }

        // Ricerca
        function performSearch() {
            var searchQuery = $('#searchBar').val();
            window.open(`https://penguinmod.com/search?q=${searchQuery}`);
        }
        $('#searchIcon').click(performSearch);
        $('#searchBar').keypress(function(e){
            if(e.which === 13){
                performSearch();
            }
        });

        // Aggiungi tab "Troppen" solo se esiste .navTabs
        if ($('.navTabs').length) {
            var newURL = window.location.protocol + "//" + window.location.host + "/p/troppen";
            var newTitle = "Troppen";
            $(".navTabs").append('<li><a href="' + newURL + '" title="' + newTitle + '" id="troppenTab">Troppen</a></li>');
            $("#troppenTab").on("click", function() {
                console.log("Fine della stringa imprevista.");
            });
        }

        // Download button
        $('#downloadBtn').click(function() {
            if (confirm('Do you want to download BarnyWarp 2.5?')) {
                alert('The webpage is installing the .zip folder for BarnyWarp 2.5.');
                window.location.href="https://github.com/arancia313/BarnyWarp/releases/download/get2/BarnyWarp.2.5.zip";
            } else {
                window.location.href="https://arancia313.github.io/BarnyWarp";
            }
        });

        // Carica commit recenti da GitHub API
        $.get('https://api.github.com/repos/arancia313/BarnyWarp/commits?sha=work', function(data) {
            var commitsSection = $("#recentCommits ul");
            data.forEach(function(commit) {
                if (commit.author && commit.author.login.toLowerCase() !== "web-flow") {
                    var commitInfo = commit.author.login;
                    var commitTitle = commit.commit.message;
                    commitsSection.append($('<li>').text(commitInfo + " - " + commitTitle));
                }
            });
        });
    });

    // A warning, because BarnyWarp is still in development.
    console.log('BarnyWarp is currently in development, some clogs may break due to the code changing all the time.');

    document.addEventListener('DOMContentLoaded', function() {
        if (window.location.pathname.includes('/BarnyWarp')) {
            document.body.classList.add('barnywarp-page');
        }
    });

    // A warning in case of people pasting random code here.
			console.log(
				"%cSCAM ALERT! %cDo NOT paste things into here that other people sent you!",
				"color:red;font-family:sans-serif;font-size:2rem;font-weight:900",
				"color:white;font-family:sans-serif;font-size:1.75rem;font-weight:900;-webkit-text-stroke: .5px black"
			);
			console.log("If you don't know what this window does, EXIT NOW! People can use this to upload inappropriate projects under YOUR name, delete YOUR projects, and get YOU banned from BarnyWarp!");

    // Facts. As always.      
            const Barnyfacts = [ // I never used "const" before...
                "BarnyWarp was created by Arancia 3.",
                "BarnyWarp is an extension for BarnyLine that adds server and data management functionalities.",
                "There is an BarnyEditor. A bit more different than Penguinmod's.",
                "BarnyWarp is still in development.",
                "Did you know? BarnyWarp's icon is Orange, with a white B in the middle. Other scratch mods don't have it.", // What a surprise. Copilot just guessed the exact same icon i made!
                "Did you know? Extflashy is BarnyWarp's AI.",
                "Tip: If you code on Masterscript, on the BarnyWarp editor, you can run the project with a FLUIDIFICATED way.",
                "I know this is stupid, but did you know that BarnyWarp's name comes from 'Barnyard'?",
                "BarnyWarp's development started on december 1st, 2024. So, BarnyWarp's birthday is December 1st!",
                "You will never know that one day, BarnyWarp will be successful.",
                "You are looking at a screen.",
                "I LOOVE dark mode!",
                "OrangeRed and Orange are BarnyWarp's natural colors.",
                "Months ago, i added the green update. but... Something went wrong with the branches... so i decided to revert that update.",
                "cOmMiT cAnNoT Be PoSsIbLe CuZ yOu HaVe UnMeRgEd FiLeS",
                "I put the dependabot in a DEEP SLEEP.", // i mean, a deep inserting.
                "BarnyWarp's homepage is made in HTML. The editor, too."
];
            const fact = Barnyfacts[Math.floor(Math.random() * Barnyfacts.length)];
            console.log(`%cBarnyFact: %c${fact}`, "color: orangered; font-size: 1.5em; font-weight: bold;", "color: white; font-size: 1.25rem;"); // AHH copilot.