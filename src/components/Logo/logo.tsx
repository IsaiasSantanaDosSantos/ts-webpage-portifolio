import { useTheme } from '../../context/themeContext';

import logoLightVideo from '../../assets/video/animateSantanaWebDeveloper.mp4';
import logoDarkVideo from '../../assets/video/blackWebDeveloperLogoAnimation.mp4';
import logoImg from '../../../public/img/logo-512.png';

import * as S from './logo.styled';
import { Link } from 'react-scroll';

export const Logo = () => {
  // const { theme } = useTheme();
  const { themeMode } = useTheme();

  const videoSrc = themeMode === 'dark' ? logoDarkVideo : logoLightVideo;

  const isVideoSupported = () => {
    const videoElement = document.createElement('video');
    return Boolean(videoElement.canPlayType);
  };

  return (
    <Link to="home" spy={true} smooth={true} offset={-70} duration={800}>
      <S.LogoBox>
        {isVideoSupported() ? (
          <video autoPlay loop muted key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support video in HTML5
          </video>
        ) : (
          <img src={logoImg} alt="Santana's logo" />
        )}
      </S.LogoBox>
    </Link>
  );
};

// import { Link } from 'react-scroll';

// import logoVideo from '../../assets/video/animateSantanaWebDeveloper.mp4';
// import logoImg from '../../../public/img/logo-512.png';

// import * as S from './logo.styled';

// export const Logo = () => {
//   const isVideoSupported = () => {
//     const videoElement = document.createElement('video');
//     return Boolean(videoElement.canPlayType);
//   };

//   return (
//     <Link
//       activeClass="actived"
//       to="home"
//       spy={true}
//       smooth={true}
//       offset={-70}
//       duration={800}
//     >
//       <S.LogoBox>
//         {isVideoSupported() ? (
//           <video autoPlay loop muted>
//             <source src={logoVideo} type="video/mp4" />
//             Your browser does not support video in HTML 5
//           </video>
//         ) : (
//           <img src={logoImg} alt="Santana's logo" />
//         )}
//       </S.LogoBox>
//     </Link>
//   );
// };
