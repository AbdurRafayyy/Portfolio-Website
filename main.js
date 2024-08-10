const canvas = document.getElementById('matrix');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const binaryNumbers = "01";
        const fontSize = 18;
        const columns = canvas.width / fontSize;

        const drops = Array.from({ length: columns }).fill(1);

        function draw() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.08)"; // 0.15
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#5f7d1e";
            ctx.font = `${fontSize}px monospace`;

            drops.forEach((y, i) => {
                const text = binaryNumbers[Math.floor(Math.random() * binaryNumbers.length)];
                ctx.fillText(text, i * fontSize, y * fontSize);

                if (y * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            });
        }

        setInterval(draw, 33);

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });