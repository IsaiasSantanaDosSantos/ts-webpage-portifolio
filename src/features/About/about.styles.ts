// import styled from "styled-components";
// import { globalColor } from "../../style/theme";

// export const AboutContainer = styled.div`
//     * {
// box-sizing: border-box;
// margin: 0;
// padding: 0;
// }

// max-width: ${globalColor.maxWidth};
// width: ${globalColor.minWidth};
// background-color: ${({ theme }) => theme.transparent};
// backdrop-filter: ${globalColor.blur};
// border-radius: ${globalColor.radius};
// border: 1px solid ;
// min-height: 500px;
// display:flex;
// justify-content: center;
// align-items: center;
// `;
import styled from "styled-components";
import { glassEffect } from "../../style/mixins/glass";
import { globalColor } from "../../style/theme";

export const AboutContainer = styled.section`
  max-width: ${globalColor.maxWidth};
  width: ${globalColor.minWidth};
  min-height: 500px;

  display: flex;
  justify-content: center;
  align-items: center;

    ${glassEffect({
    position: "relative",
    blur: 5,
    radius: "15px",
    border: "all",
    withWillChange: true,
})}


`;
