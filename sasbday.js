  // Trigger confetti on page load
    window.onload = () => {
      const confettiCanvas = confetti.create(null, { resize: true });
      const confettiDuration = 7000; // Total duration of confetti in milliseconds (7 seconds)
      const fadeDuration = 2000;    // Fade-out duration (2 seconds)
      const end = Date.now() + confettiDuration;

      // Create the confetti animation
      (function frame() {
        confettiCanvas({
          particleCount: 50,
          startVelocity: 30,
          spread: 360,
          origin: { x: Math.random(), y: Math.random() - 0.2 },
          colors: ['#bb0000', '#ffffff', '#ffbb00', '#00bb00', '#0000bb'],
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        } else {
          // Gradually fade out the canvas and confetti
          let opacity = 1;
          const fadeOutInterval = setInterval(() => {
            opacity -= 0.02;  // Reduce opacity
            if (opacity <= 0) {
              clearInterval(fadeOutInterval);  // Stop when fully faded
            }
            const canvas = document.querySelector("canvas");
            canvas.style.opacity = opacity;
          }, 50);  // Every 50ms decrease opacity
        }
      })();
    };

     
    