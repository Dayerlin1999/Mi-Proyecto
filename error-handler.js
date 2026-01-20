function inicializarApp() {
    const audio = document.getElementById('arteAudio');
    const video = document.getElementById('arteVideo');
    const canvas = document.getElementById('arteCanvas');
    const colorText = document.getElementById('colorText');
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.section');
    
    function manejarAudio() {
        try {
            document.getElementById('playBtn').addEventListener('click', () => audio.play());
            document.getElementById('pauseBtn').addEventListener('click', () => audio.pause());
            document.getElementById('stopBtn').addEventListener('click', () => {
                audio.pause();
                audio.currentTime = 0;
            });
            document.getElementById('volUpBtn').addEventListener('click', () => {
                if (audio.volume < 1) audio.volume += 0.1;
            });
            document.getElementById('volDownBtn').addEventListener('click', () => {
                if (audio.volume > 0) audio.volume -= 0.1;
            });
        } catch (error) {
            console.log("Error en controles de audio");
        }
    }
    
    function manejarVideo() {
        try {
            document.getElementById('playVideoBtn').addEventListener('click', () => video.play());
            document.getElementById('pauseVideoBtn').addEventListener('click', () => video.pause());
        } catch (error) {
            console.log("Error en controles de video");
        }
    }
    
    function manejarCanvas() {
        try {
            const ctx = canvas.getContext('2d');
            let drawing = false;
            let currentColor = '#8B4513';
            
            canvas.addEventListener('mousedown', () => drawing = true);
            canvas.addEventListener('mouseup', () => drawing = false);
            canvas.addEventListener('mousemove', function(e) {
                if (!drawing) return;
                ctx.fillStyle = currentColor;
                ctx.fillRect(e.offsetX - 5, e.offsetY - 5, 10, 10);
            });
            
            document.getElementById('clearCanvas').addEventListener('click', () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            });
            
            document.getElementById('changeColor').addEventListener('click', () => {
                const colors = ['#8B4513', '#D2691E', '#CD853F', '#A0522D'];
                currentColor = colors[Math.floor(Math.random() * colors.length)];
            });
        } catch (error) {
            console.log("Error en canvas");
        }
    }
    
    function iniciarAnimacionColores() {
        try {
            const colors = ['#8B4513', '#D2691E', '#CD853F'];
            let index = 0;
            
            setInterval(() => {
                index = (index + 1) % colors.length;
                colorText.style.color = colors[index];
            }, 2000);
        } catch (error) {
            console.log("Error en animación de colores");
        }
    }
    
    function configurarScroll() {
        try {
            window.addEventListener('scroll', () => {
                const element = document.getElementById('scrollAnimation');
                if (window.scrollY > 100) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        } catch (error) {
            console.log("Error en scroll");
        }
    }
    
    function configurarNavegacion() {
        try {
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                    
                    const target = this.getAttribute('data-section');
                    sections.forEach(section => {
                        section.classList.remove('active');
                    });
                    document.getElementById(target).classList.add('active');
                });
            });
        } catch (error) {
            console.log("Error en navegación");
        }
    }
    
    function animarCards() {
        try {
            setTimeout(() => {
                const cards = document.querySelectorAll('.period-card');
                cards.forEach(card => {
                    card.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                        card.style.transform = 'scale(1)';
                    }, 300);
                });
            }, 1000);
        } catch (error) {
            console.log("Error en animación de cards");
        }
    }
    
    function simularPromesa() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const exito = Math.random() > 0.2;
                if (exito) {
                    resolve("Datos cargados correctamente");
                } else {
                    reject("Error: Fallo en la carga de datos");
                }
            }, 1500);
        });
    }
    
    function manejarPromesa() {
        simularPromesa()
            .then(mensaje => {
                console.log(mensaje);
            })
            .catch(error => {
                console.log("Promesa fallida: " + error);
            });
    }
    
    function verificarElementos() {
        try {
            if (!audio) throw new Error("Elemento de audio no encontrado");
            if (!video) throw new Error("Elemento de video no encontrado");
            if (!canvas) throw new Error("Elemento canvas no encontrado");
        } catch (error) {
            console.log("Verificación: " + error.message);
        }
    }
    
    function iniciarModulos() {
        manejarAudio();
        manejarVideo();
        manejarCanvas();
        iniciarAnimacionColores();
        configurarScroll();
        configurarNavegacion();
        animarCards();
        manejarPromesa();
        verificarElementos();
    }
    
    document.addEventListener('DOMContentLoaded', iniciarModulos);
}

inicializarApp();