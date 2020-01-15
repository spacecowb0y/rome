import { css, Global } from "@emotion/core"
import React from "react"

export default () => (
  <Global
    styles={css`
      :root {
        --imgSize: 80vh;
        --baseline: 1.5rem;
        --green: #11362e;
        --peach: #c9a587;
        --foreground: var(--green);
        --background: var(--peach);
      }

      @media (prefers-color-scheme: dark) {
        :root {
          --foreground: var(--peach);
          --background: var(--green);
        }
      }

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        position: relative;
      }

      html {
        -webkit-text-size-adjust: none;
        background-color: var(--background);
        color: var(--foreground);
        font: 100%/1.5 "Work Sans", sans-serif;
        font-weight: 500;
        height: 100%;
        overflow: hidden;
      }

      body {
        display: flex;
        height: 100%;
        align-items: center;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
      }

      @media (orientation: portrait) {
        html {
          overflow: initial;
        }

        body {
          height: auto;
        }
      }

      @media (max-width: 40rem) {
        html {
          font-size: 87.5%;
        }
      }

      a {
        color: inherit;
        text-decoration-color: rgba(255, 255, 255, 0.5);
        text-decoration-skip-ink: auto;
        transition: 0.2s ease;
        transition-property: color, text-decoration-color;
      }

      a:hover,
      a:focus {
        text-decoration-color: currentColor;
      }

      p {
        margin-bottom: calc(var(--baseline) / 2);
      }

      .frac {
        font-variant-numeric: diagonal-fractions;
      }

      .caps {
        font-variant-caps: all-small-caps;
      }

      .site-title {
        font-weight: inherit;
        font-size: 1rem;
      }

      #__next {
        display: flex;
        flex-flow: column nowrap;
        padding-bottom: calc(var(--baseline) * 2);
      }

      .site-content {
        flex: 1 0 auto;
        display: flex;
        max-height: var(--imgSize);
      }

      .pane {
        flex: 1 0 auto;
        width: auto;
        vertical-align: top;
        padding: calc(var(--baseline) / 2);
        display: flex;
        flex-direction: column;
      }

      @media (orientation: portrait) {
        .site-root {
          flex-flow: column wrap;
          max-width: 100%;
          max-height: unset;
        }

        .site-content {
          flex-direction: column;
        }

        .pane {
          height: auto;
          width: auto;
          margin: auto;
        }
      }

      .pane--text {
        align-self: flex-start;
        flex: 0 0 35rem;
      }

      .pane--image {
        transition: 0.5s ease;
        transition-property: transform, opacity;
      }

      @media (orientation: portrait) {
        .pane--text {
          flex-basis: auto;
        }
      }

      .pane__image {
        display: flex;
        flex: 1 1 100%;
        margin-bottom: calc(var(--baseline) / 2);
      }

      .image__img {
        display: block;
        max-width: 100%;
        height: auto;
        flex: 0 0 100%;
        object-fit: cover;
        max-height: var(--imgSize);

        transition: 0.3s ease opacity;
        opacity: 1;
      }

      .image__img.is-not-loaded {
        height: 0;
        position: absolute;
      }

      .placeholder,
      .image__img.ssr {
        --aspect-ratio: 1;
        background-color: rgba(0, 0, 0, 0.1);
        max-height: var(--imgSize);
        height: var(--imgSize);
        width: calc(var(--imgSize) * var(--aspect-ratio));
      }

      @media (orientation: portrait) {
        .placeholder,
        .image__img.ssr {
          --width: calc(100vw - var(--baseline));
          width: var(--width);
          height: calc(var(--width) / var(--aspect-ratio));
        }
      }

      .image__img.is-not-loaded {
        opacity: 0;
      }
    `}
  />
)
