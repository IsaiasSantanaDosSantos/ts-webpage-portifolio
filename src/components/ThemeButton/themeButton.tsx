import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import * as S from './themeButton.styles';

type Props = {
  currentTheme: 'light' | 'dark';
  toggleTheme: () => void;
};

const ThemeButton = ({ currentTheme, toggleTheme }: Props) => {
  return (
    <S.Container onClick={toggleTheme} title="Alterar tema">
      <FontAwesomeIcon
        icon={currentTheme === 'light' ? faMoon : faSun}
        style={{ fontSize: '30px', width: '40px' }}
      />
    </S.Container>
  );
};

export default ThemeButton;
