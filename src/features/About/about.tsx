import * as S from "./about.styles"

const About = () => {
    return (
        <S.AboutContainer className="aboutContainer" id="about">
            <S.AboutSubTitle>About me</S.AboutSubTitle>
            <S.AboutTitle>Conheça me mais</S.AboutTitle>
            <S.AboutContent>
                <S.AboutContentLeft>
                    <S.aboutContentLeftSubTitle>
                        Olá, sou <span className="textBold yellowUnderline">Isaias Santana</span>
                    </S.aboutContentLeftSubTitle>
                    <S.AboutText>Desenvolver interfaces não é apenas escrever código — é criar experiências que fazem sentido para quem está do outro lado da tela. É com essa mentalidade que atuo                      <S.TextBold>há 4 anos como Desenvolvedor Front-end</S.TextBold> , especializado no ecossistema JavaScript, com foco em <S.TextBold>React</S.TextBold> .</S.AboutText>
                    <S.AboutText>Ao longo da minha trajetória, construí desde <S.TextBold>landing pages interativas</S.TextBold>  até <S.TextBold>dashboards complexos, sempre priorizando performance, acessibilidade, responsividade e clareza na experiência do usuário</S.TextBold> . Gosto de pensar no front-end como a ponte entre a regra de negócio e a percepção do usuário — e faço questão de que essa ponte seja sólida, rápida e agradável de atravessar.</S.AboutText>
                    <S.AboutText>Trabalho <S.TextBold>fortemente com componentização, arquitetura de interfaces e integração com APIs</S.TextBold> , utilizando tecnologias como <S.TextBold>React, TypeScript, Angular, Vite e Tailwind/Sass</S.TextBold> . Também tenho experiência com <S.TextBold>testes unitários, pipelines de CI/CD</S.TextBold>  e colaboração próxima com design, garantindo fidelidade visual e entregas consistentes.</S.AboutText>
                    <S.AboutText>Além da interface, possuo conhecimentos em <S.TextBold>back-end (Node.js, Firebase e SQL)</S.TextBold> , o que me permite construir soluções mais coesas e tomar decisões técnicas com visão de produto. Atuo ainda com <S.TextBold>Google Tag Manager, Google Analytics 4 e Reportei</S.TextBold> , criando <S.TextBold>tags, acionadores, eventos, testes A/B e integrações para análise</S.TextBold>  centralizada de dados, sempre orientado por métricas reais.</S.AboutText>
                    <S.AboutText>Sou movido por desafios, aprendizado contínuo e pela busca constante por <S.TextBold>interfaces modernas, escaláveis e bem arquitetadas</S.TextBold> .</S.AboutText>
                    <S.AboutText>Fora do código, sou casado, pai de dois filhos e acredito que organização, responsabilidade e empatia — tanto na vida quanto no trabalho — fazem toda a diferença na construção de produtos de qualidade.</S.AboutText>
                </S.AboutContentLeft> 
                <S.AboutContentRight>
                    <S.YearNumberExpeience><span className="yearNumberCicly"></span>23</S.YearNumberExpeience>
                    <S.YearTextExperience>Anos de <S.TextBold>Experiência</S.TextBold></S.YearTextExperience>
                    <S.AboutImg src="https://isaiassantana.com.br/assets/isaias-black_t-shirt-df130492.webp" alt="Isaias photo" />
                </S.AboutContentRight>
            </S.AboutContent>
            <S.AboutInfo>
                <S.AboutInfoGroup>
                    <S.AboutLabel>Nome:</S.AboutLabel>                     
                    <p className="aboutText boldText">Isaias Santana dos Santos</p>                 
                </S.AboutInfoGroup> 
                <S.AboutInfoGroup> 
                    <S.AboutLabel>E-mail:</S.AboutLabel>                     
                    <S.AboutLink href="mailto:santanawebdev@gmail.com" area-label="santanawebdev@gmail.com" target="_blank" rel="noopener noopener noreferrer" className="aboutLink aboutText boldText">santanawebdev@gmail.com</S.AboutLink>                 
                </S.AboutInfoGroup>
                <S.AboutInfoGroup>
                    <S.AboutLabel>Operando de:</S.AboutLabel>                     
                    <S.AboutLink href="https://maps.app.goo.gl/vMDWGhnajHh3TTLo6" target="_blank" rel="noopener noreferrer" area-label="São José dos Campos, SP, BR"  className="aboutLink boldText">São José dos Campos, SP, BR</S.AboutLink>                 
                </S.AboutInfoGroup> 
            </S.AboutInfo>          
        </S.AboutContainer>
    )
}
 
export default About 