        // Download button
        $('#downloadBtn').click(function() {
            if (confirm('Do you want to download BarnyWarp?')) {
                if (prompt('Type "Yes" to continue.' = "Yes")) {
                    alert('The webpage is installing the .zip folder for BarnyWarp.');
                    window.location.href="https://github.com/arancia313/BarnyWarp/releases/download/get2/BarnyWarp.2.5.zip";
                } else {
                    alert("Download was cancelled.")
                };
            } else {
                window.location.href="https://arancia313.github.io/BarnyShare";
            };
        });