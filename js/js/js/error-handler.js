// Módulo de efectos visuales
const EffectsController = {
    changeColor: function() {
        try {
            const colorBox = document.getElementById('colorBox');
            const colors = ['#8B4513', '#A0522D', '#D2691E', '#CD853F'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            colorBox.style.backgroundColor = randomColor;
            console.log("Color cambiado a:", randomColor);
            this.updateConsole("Color cambiado");
        } catch (error) {
            console.error("Error al cambiar color:", error);
            this.updateConsole("Error: " + error.message);
        }
    },

    activateTimeout: function() {
        try {
            this.updateConsole("Timeout iniciado (3s)");
            
            setTimeout(() => {
                try {
                    this.updateConsole("Timeout completado");
                    console.log("Timeout ejecutado");
                } catch (innerError) {
                    console.error("Error en timeout:", innerError);
                }
            }, 3000);
            
        } catch (error) {
            console.error("Error en activateTimeout:", error);
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
