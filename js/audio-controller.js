// Módulo de control de audio
const AudioController = {
    play: function() {
        try {
            const audio = document.getElementById('audioPlayer');
            audio.play();
            console.log("Audio: play ejecutado");
            this.updateConsole("Audio play OK");
        } catch (error) {
            console.error("Error en play:", error);
            this.updateConsole("Error: " + error.message);
        }
    },

    pause: function() {
        try {
            const audio = document.getElementById('audioPlayer');
            audio.pause();
            console.log("Audio: pause ejecutado");
            this.updateConsole("Audio pause OK");
        } catch (error) {
            console.error("Error en pause:", error);
            this.updateConsole("Error: " + error.message);
        }
    },

    stop: function() {
        try {
            const audio = document.getElementById('audioPlayer');
            audio.pause();
            audio.currentTime = 0;
            console.log("Audio: stop ejecutado");
            this.updateConsole("Audio stop OK");
        } catch (error) {
            console.error("Error en stop:", error);
            this.updateConsole("Error: " + error.message);
        }
    },

    updateConsole: function(message) {
        const consoleOutput = document.getElementById('consoleOutput');
        if (consoleOutput) {
            consoleOutput.innerHTML += "<br>" + new Date().toLocaleTimeString() + " - " + message;
        }
    }
};
