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
            $('body, nav, section, footer, .footer-row a, .section-2, .section-3, .footer-row, button').removeClass('dark-mode light-mode').addClass(mode);
        }

        // Ricercas
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

            // buttons.
            $('#antistress').click(function() {
                console.log("Clicked.")
            });
        
                $('#try').click(function() {
                window.location.href = "https://arancia313.github.io/BarnyShare/editor";
        });

        // Loads Recent changes of this website.
        $.get('https://api.github.com/repos/arancia313/BarnyShare/commits?sha=System', function(data) {
            var commitsSection = $("#recentChanges ul");
            data.forEach(function(commit) {
                if (commit.author && commit.author.login.toLowerCase() !== "web-flow") {
                    var commitInfo = commit.author.login;
                    var commitTitle = commit.commit.message;
                    commitsSection.append($('<ul>').text(commitInfo + ": " + commitTitle));
                }
            });
        });

		// Loads recent changes of the so-called "old" version.
        $.get('https://api.github.com/repos/arancia313/BarnyWarp/commits?sha=intensità', function(data) {
            var commitsSection = $("#recentChanges2 ul");
            data.forEach(function(commit) {
                if (commit.author && commit.author.login.toLowerCase() !== "web-flow") {
                    var commitInfo = commit.author.login;
                    var commitTitle = commit.commit.message;
                    commitsSection.append($('<ul>').text(commitInfo + ": " + commitTitle));
                }
            });
        });
    
    // A warning, because BarnyWarp is still in development.
    console.log('BarnyShare is currently under development, some things may break due to the code changing all the time.');

    document.addEventListener('DOMContentLoaded', function() {
        if (window.location.pathname.includes('/BarnyShare')) {
            document.body.classList.add('barnywarp-page');
        }
    });

    // A warning in case of people pasting random code here.
			console.log(
				"%cSCAM ALERT! %cDo NOT paste things into here that other people sent you!",
				"color:red;font-family:sans-serif;font-size:2rem;font-weight:900",
				"color:white;font-family:sans-serif;font-size:1.75rem;font-weight:900;-webkit-text-stroke: .5px black"
			);
			console.warn("If you don't know what this window does, EXIT NOW! People can use this to upload inappropriate projects under YOUR name, delete YOUR projects, and get YOU banned from BarnyShare, or even on the A3N!");
        (function(){
            const btn = document.getElementById('toggleBtn');
            const content = document.getElementById('toggleContent');
            if (!btn || !content) return;
            // Ensure content starts hidden for browsers that don't support the 'hidden' attribute animation
            content.classList.remove('show');
            content.hidden = true;
            btn.addEventListener('click', function() {
                const isShown = content.classList.toggle('show');
                // Update hidden attribute for semantics
                content.hidden = !isShown;
                // Update aria and button label
                btn.setAttribute('aria-expanded', String(isShown));
                btn.textContent = isShown ? 'Hide Changes of old version' : 'Show Changes of old version';
            });
        })();
    const url = "https://raw.githubusercontent.com/arancia313/Arancia-3-Network/refs/heads/System/net/A3N_Announcements/net_announcements.txt";
    // let's make the response more compact, shall we.
    fetch(url).then(r=>r.text()).then(t=>document.getElementById("id").innerText=t);
    // and ANOTHER const-
    const url2 = "https://raw.githubusercontent.com/arancia313/Arancia-3-Network/refs/heads/System/net/platform_updates/BarnyShare/updates.txt";
    // here.
    fetch(url2).then(r=>r.text()).then(t=>document.getElementById("pa").innerText=t);
    const url3 = "https://raw.githubusercontent.com/arancia313/Arancia-3-Network/refs/heads/System/users.json"