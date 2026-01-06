import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import '../i18n';
import * as S from './main.style';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <S.Container>
      <App />
    </S.Container>
  </StrictMode>
);
