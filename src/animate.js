import { sineInOut } from "svelte/easing";

export const fadeIn = () => ({
  duration: 200,
  easing: sineInOut,
  css: (t) => {
    return `
        opacity: ${t};
        transform: translate3d(0, ${(1 - t) * 100}px, 0);
        position: absolute;
        width: 100%;
        `;
    },
});

export const fadeOut = () => ({
    duration: 200,
    easing: sineInOut,
    css: (t) => {
        return `
        opacity: ${t};
        transform: translate3d(0, ${(1 - t) * 100}px, 0);
        position: absolute;
        width: 100%;
    `;
  },
});
