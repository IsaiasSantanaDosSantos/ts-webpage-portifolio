import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import '../i18n';
import * as S from './main.style';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <S.Container>
      <App />
    </S.Container>
    </BrowserRouter>
  </StrictMode>
);
