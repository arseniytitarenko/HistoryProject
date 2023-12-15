import { NavBar } from './NavBar';
import gensek from './assets/img/domsovetov.jpg';
import imperors from './assets/img/imperorsback.jpg';
import tsars from './assets/img/tsarsback.jpg';
import './mainPage.css';

export const MainPage = () => {
    return <div>
        <div style={{
            position: 'absolute',
            zIndex: 1000,
            width: '100%'
        }}>
            <NavBar />
        </div>
        <title>asdasd</title>
        <div className="slideshow">
            <div className="slideshow-item">
                <a href="/tsars">
                    <img src={tsars} alt="" />
                    <div className="slideshow-item-text">
                        <h5>Цари</h5>
                        <p>Цари Руси были правителями в средневековой Руси. Они обладали абсолютной властью и считались представителями Божьей воли. Цари Руси управляли страной, принимали важные решения и вели войны. Одним из наиболее известных царей Руси был Иван IV Грозный, который совершил значительные реформы и расширил территорию Русского государства.</p>
                    </div></a>
            </div>
            <div className="slideshow-item">
                <a href="/imperors">
                    <img src={imperors} alt="" />
                    <div className="slideshow-item-text">
                        <h5>Императоры</h5>
                        <p>Императоры Российской империи были правителями в период с 1721 по 1917 год. Императоры обладали абсолютной властью и были верховными главами государства. Они управляли империей, проводили реформы и развивали экономику и культуру. Некоторые известные императоры Российской империи включают Петра I, Екатерину II и Николая II.</p>
                    </div></a>
            </div>
            <div className="slideshow-item">
                <a href="/gensek">
                    <img src={gensek} alt="" />
                    <div className="slideshow-item-text">
                        <h5>Правители СССР</h5>
                        <p>Правители СССР были главами Советского Союза с 1922 по 1991 год. Они не носили титул царя или императора, но обладали высшей властью в стране. Правители СССР, такие как Владимир Ленин, Иосиф Сталин и Михаил Горбачев, руководили страной, проводили политические и экономические реформы, вели войны и влияли на международные отношения. Правители СССР также оказывали значительное влияние на жизнь и культуру советского народа.</p>
                    </div></a>
            </div>
        </div>
    </div>
}