import NavBar from '../../components/NavBar/navBar';
import Hero from '../../features/Hero/hero';
import About from '../../features/About/about';


import * as S from './publicPage.style'
export default function PublicPage() {
    return (
        <S.Container>
            <NavBar />
            <Hero />
            <About/>
        </S.Container>
    );
}