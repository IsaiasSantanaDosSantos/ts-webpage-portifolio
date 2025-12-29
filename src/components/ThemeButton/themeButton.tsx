import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/themeContext';

import * as S from './themeButton.styles';

const ThemeButton = () => {
  const { themeMode, toggleTheme } = useTheme();
  return (
    <S.Container onClick={toggleTheme} title="Alterar tema">
      <FontAwesomeIcon
        icon={themeMode === 'light' ? faMoon : faSun}
        style={{ fontSize: '30px', width: '40px' }}
      />
    </S.Container>
  );
};

export default ThemeButton;
