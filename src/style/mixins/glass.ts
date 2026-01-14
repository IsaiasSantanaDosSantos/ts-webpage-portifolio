import { css } from "styled-components";
import { globalColor } from "../theme";

type GlassOptions = {
  position?: "relative" | "absolute" | "fixed" | "sticky";
  blur?: number;
  radius?: string;
  withWillChange?: boolean;
  border?: "none" | "all" | "bottom";
};

export const glassEffect = ({
  position = "relative",
  blur = 5,
  radius = globalColor.radius,
  withWillChange = false,
  border = "all",
}: GlassOptions = {}) => css`
  position: ${position};

  background: ${({ theme }) =>
    theme.background === "#fff"
      ? "rgba(255, 255, 255, 0.15)"
      : "rgba(18, 18, 18, 0.35)"};

  backdrop-filter: blur(${blur}px);
  -webkit-backdrop-filter: blur(${blur}px);

  ${withWillChange &&
  css`
    will-change: backdrop-filter;
  `}

  ${border !== "none" &&
  css`
    border: 1px solid transparent;
  `}

  ${border === "bottom" &&
  css`
    border: none;
    border-bottom: 1px solid transparent;
  `}

  ${border !== "none" &&
  css`
    background-clip: padding-box;
  `}

  ${radius !== "none" &&
  css`
    border-radius: ${radius};
  `}

  // position: ${position};

  ${border !== "none" &&
  css`
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      padding: 1px;
      border-radius: inherit;

      background: linear-gradient(
        135deg,
        ${globalColor.primaryColor},
        rgba(255, 255, 255, 0.6),
        ${globalColor.secondaryColor}
      );

      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;

      pointer-events: none;
    }
  `}

  ${border === "bottom" &&
  css`
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 1px;

      background: linear-gradient(
        90deg,
        transparent,
        ${globalColor.primaryColor},
        transparent
      );
    }
  `}

  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
`;
