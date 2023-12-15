import { Route, Routes } from 'react-router-dom';

import gensek from './assets/data/genseks.json';
import imperors from './assets/data/imperors.json';
import tsars from './assets/data/tsars.json';
import { PageWithBlocks } from './PageWithBlocks';
import { MainPage } from './MainPage';
import { BlockProps } from './Block';

const we: BlockProps[] = [
    {
        title: 'О создателях проекта',
        leaders: [
            {
                name: 'Титаренко Арсений',
                years: 'БПИ2310',
                image: './assets/img/Titarenko.jpg',
                info: [
                    'tg: @fresh_4_you'
                ]
            },
            {
                name: 'Печенев Платон',
                years: 'БПИ2310',
                image: './assets/img/Pechenev.jpg',
                info: [
                    'tg: @bibbob'
                ]
            },
            {
                name: 'Калинин Владислав',
                years: 'БПИ2310',
                image: './assets/img/Kalinin.jpg',
                info: [
                    'tg: @Vlad_Kalinin_0'
                ]
            },
            {
                name: 'Панкратов Владислав',
                years: 'БПИ2310',
                image: './assets/img/Pankratov.jpg',
                info: [
                    'tg: @sundayti'
                ]
            },
            {
                name: 'Шелков Андрей',
                years: 'БПИ2310',
                image: './assets/img/Shelkov.jpg',
                info: [
                    'tg: @fuzska'
                ]
            }
        ]
    }
]
function App() {
    return <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tsars" element={
            <>
                <PageWithBlocks blocks={tsars} />
                <title>Цари</title>
            </>
        } />
        <Route path="/imperors" element={
            <>
                <PageWithBlocks blocks={imperors} />
                <title>Императоры</title>
            </>
        } />
        <Route path="/gensek" element={
            <>
                <PageWithBlocks blocks={gensek} />
                <title>Руководители СССР</title>
            </>
        } />
        <Route path="/creators" element={
            <>
                <PageWithBlocks blocks={we} />
                <title>О создателях</title>
            </>
        } />
    </Routes>
}

export default App;
