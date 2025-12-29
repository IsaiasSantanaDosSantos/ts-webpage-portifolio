// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
// import * as S from './themeButton.styles';
// import { useTheme } from '../../context/themeContext';

// const ThemeButton = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <S.Container onClick={toggleTheme} title="Alterar tema">
//       <FontAwesomeIcon
//         icon={theme === 'light' ? faMoon : faSun}
//         style={{ fontSize: '30px', width: '40px' }}
//       />
//     </S.Container>
//   );
// };

// export default ThemeButton;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/themeContext';

import * as S from './themeButton.styles';

// type Props = {
//   currentTheme: 'light' | 'dark';
//   toggleTheme: () => void;
// };

const ThemeButton = () =>
  // { currentTheme, toggleTheme }: Props
  {
    const { themeMode, toggleTheme } = useTheme();
    return (
      <S.Container onClick={toggleTheme} title="Alterar tema">
        <FontAwesomeIcon
          icon={themeMode === 'light' ? faMoon : faSun}
          style={{ fontSize: '30px', width: '40px' }}
        />
        {/* <FontAwesomeIcon
          icon={currentTheme === 'light' ? faMoon : faSun}
          style={{ fontSize: '30px', width: '40px' }}
        /> */}
      </S.Container>
    );
  };

export default ThemeButton;
