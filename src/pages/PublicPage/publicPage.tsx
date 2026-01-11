import NavBar from '../../components/NavBar/navBar';
import Hero from '../../features/Hero/hero';


import * as S from './publicPage.style'
export default function PublicPage() {
    return (
        <S.Container>
            <NavBar />
            <Hero />
        </S.Container>
    );
}