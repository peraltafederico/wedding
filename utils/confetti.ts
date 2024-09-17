import confetti from 'canvas-confetti';

function fire(particleRatio: number, opts?: confetti.Options) {
  confetti({
    origin: { y: 0.5 },
    colors: ['#A2A27C'],
    particleCount: Math.floor(500 * particleRatio),
    ...opts,
  });
}

export function triggerConfetti(opts?: confetti.Options) {
  fire(0.25, {
    spread: 100,
    startVelocity: 55,
    ...opts,
  });
  fire(0.2, {
    spread: 60,
    ...opts,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    ...opts,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    ...opts,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    ...opts,
  });
}
