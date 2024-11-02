import { CiSearch } from 'react-icons/ci';
import { HiRocketLaunch, HiOutlineBuildingLibrary } from 'react-icons/hi2';
import {
  MdOutlineCloud,
  MdOutlineManageSearch,
  MdOutlineApartment,
} from 'react-icons/md';

import LogoChatGPT from '../../assets/logo-chatgpt.jpg';
import { InfoTopItem } from '../../components/InfoTopItem';
import { TestCardItem } from '../../components/TestCardItem';
import {
  MainBackground,
  MainContainer,
  MainInputContainer,
  SearchButton,
  MainMostSearchs,
  MostSearchItem,
  AdvancedSearchItem,
  SectionIAs,
  MostAcessIAContainer,
  SectionInfoCentralIA,
  InfoTopContainer,
  InfoBottomContainer,
  InfoTopItems,
  InfoTopText,
  InfoTopSubtitle,
  InfoBottomIconContainer,
  InfoBottomCardItems,
  TextInfoBottom,
  InfoMidText,
} from './styles';

export default function Home() {
  return (
    <div>
      <MainBackground>
        <MainContainer>
          <h2>
            PESQUISE PELA INTELIGÊNCIA ARTIFICAL DESJEADA PARA TER ACESSO A{' '}
            <br /> FERRAMENTAS, TUTORIAIS E SOLUÇÕES
          </h2>

          <MainInputContainer>
            <input placeholder="OQUE VOCÊ DESEJA FAZER?" />

            <SearchButton type="button">PESQUISAR</SearchButton>
          </MainInputContainer>

          <MainMostSearchs>
            <span>Mais Buscados:</span>

            <MostSearchItem href="/">
              <CiSearch />
              Editor de Imagens
            </MostSearchItem>

            <MostSearchItem href="/">
              <CiSearch />
              Como remover fundo de imagem
            </MostSearchItem>

            <MostSearchItem href="/">
              <CiSearch />
              Editor de Texto
            </MostSearchItem>

            <AdvancedSearchItem href="/">
              <MdOutlineManageSearch />
              Pesquisa Avançada
            </AdvancedSearchItem>
          </MainMostSearchs>
        </MainContainer>
      </MainBackground>

      <SectionIAs>
        <MostAcessIAContainer>
          <h3>IAs mais acessadas</h3>

          <ul>
            <li>
              <img src={LogoChatGPT} alt="imagem da IA" />
              <div>
                <span>CHAT GPT</span>
                <p>OpenIA</p>
              </div>
            </li>

            <li>
              <img src={LogoChatGPT} alt="imagem da IA" />
              <div>
                <span>CHAT GPT</span>
                <p>OpenIA</p>
              </div>
            </li>

            <li>
              <img src={LogoChatGPT} alt="imagem da IA" />
              <div>
                <span>CHAT GPT</span>
                <p>OpenIA</p>
              </div>
            </li>

            <li>
              <img src={LogoChatGPT} alt="imagem da IA" />
              <div>
                <span>CHAT GPT</span>
                <p>OpenIA</p>
              </div>
            </li>

            <li>
              <img src={LogoChatGPT} alt="imagem da IA" />
              <div>
                <span>CHAT GPT</span>
                <p>OpenIA</p>
              </div>
            </li>
          </ul>

          <button type="button">Ver todas</button>
        </MostAcessIAContainer>

        <MostAcessIAContainer>
          <h3>IAs Recentes</h3>

          <ul>
            <li>
              <img src={LogoChatGPT} alt="imagem da IA" />
              <div>
                <span>CHAT GPT</span>
                <p>OpenIA</p>
              </div>
            </li>

            <li>
              <img src={LogoChatGPT} alt="imagem da IA" />
              <div>
                <span>CHAT GPT</span>
                <p>OpenIA</p>
              </div>
            </li>

            <li>
              <img src={LogoChatGPT} alt="imagem da IA" />
              <div>
                <span>CHAT GPT</span>
                <p>OpenIA</p>
              </div>
            </li>

            <li>
              <img src={LogoChatGPT} alt="imagem da IA" />
              <div>
                <span>CHAT GPT</span>
                <p>OpenIA</p>
              </div>
            </li>

            <li>
              <img src={LogoChatGPT} alt="imagem da IA" />
              <div>
                <span>CHAT GPT</span>
                <p>OpenIA</p>
              </div>
            </li>
          </ul>

          <button type="button">Ver todas</button>
        </MostAcessIAContainer>

        <MostAcessIAContainer>
          <h3>Categorias mais acessadas</h3>

          <ul>
            <li>
              <img src={LogoChatGPT} alt="imagem da IA" />
              <div>
                <span>CHAT GPT</span>
                <p>OpenIA</p>
              </div>
            </li>

            <li>
              <img src={LogoChatGPT} alt="imagem da IA" />
              <div>
                <span>CHAT GPT</span>
                <p>OpenIA</p>
              </div>
            </li>

            <li>
              <img src={LogoChatGPT} alt="imagem da IA" />
              <div>
                <span>CHAT GPT</span>
                <p>OpenIA</p>
              </div>
            </li>

            <li>
              <img src={LogoChatGPT} alt="imagem da IA" />
              <div>
                <span>CHAT GPT</span>
                <p>OpenIA</p>
              </div>
            </li>

            <li>
              <img src={LogoChatGPT} alt="imagem da IA" />
              <div>
                <span>CHAT GPT</span>
                <p>OpenIA</p>
              </div>
            </li>
          </ul>

          <button type="button">Ver todas</button>
        </MostAcessIAContainer>
      </SectionIAs>

      <SectionInfoCentralIA>
        <InfoTopContainer>
          <h2>Central IA</h2>
          <InfoTopSubtitle>Quem pode utilizá-lo?</InfoTopSubtitle>
          <InfoTopText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Amet dicta non sunt saepe esse explicabo officiis nobis ipsam itaque{' '}
            <br />
            cupiditate ab fugit a, sapiente eaque sed expedita. Praesentium,
            veritatis iusto?
          </InfoTopText>

          <InfoTopItems>
            <InfoTopItem
              title="Startups"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro natus harum, nesciunt rerum hic, ex ad facilis, minus quasi doloribus corrupti molestiae quod ipsam saepe magni illo suscipit quo."
              icon={<HiRocketLaunch />}
            />

            <InfoTopItem
              title="Comércio Eletrônico"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro natus harum, nesciunt rerum hic, ex ad facilis, minus quasi doloribus corrupti molestiae quod ipsam saepe magni illo suscipit quo."
              icon={<MdOutlineCloud />}
            />

            <InfoTopItem
              title="Agências"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro natus harum, nesciunt rerum hic, ex ad facilis, minus quasi doloribus corrupti molestiae quod ipsam saepe magni illo suscipit quo."
              icon={<MdOutlineApartment />}
            />

            <InfoTopItem
              title="Empresas"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro natus harum, nesciunt rerum hic, ex ad facilis, minus quasi doloribus corrupti molestiae quod ipsam saepe magni illo suscipit quo."
              icon={<HiOutlineBuildingLibrary />}
            />
          </InfoTopItems>
        </InfoTopContainer>

        <InfoMidText>
          Veja os resultados desde o primeiro dia. <br />
          <span>Preços que se pagam a si próprios.</span>
        </InfoMidText>

        <InfoBottomContainer>
          <InfoBottomIconContainer>
            <TextInfoBottom>Mensal</TextInfoBottom>
            <TextInfoBottom isAnual>Anual (25% OFF)</TextInfoBottom>
          </InfoBottomIconContainer>

          <InfoBottomCardItems>
            <TestCardItem />
            <TestCardItem />
            <TestCardItem />
            <TestCardItem />
          </InfoBottomCardItems>
        </InfoBottomContainer>
      </SectionInfoCentralIA>
    </div>
  );
}
