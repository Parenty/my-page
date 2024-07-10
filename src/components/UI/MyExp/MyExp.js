import styled from 'styled-components';

import {SectionWrapper} from '../SectionWrapper/SectionWrapper';
import  MyExpSlider  from '../Slider/MyExpSlider';

const MyExpSection = styled(SectionWrapper)`



`

const Title = styled.h1`
    font-weight: 300px;
`

const Text = styled.p`
    margin-top: 0px;
    font-size: inherit;
    text-align: inherit;
    /* text-indent: 15%; */
`

const MyExpWrapper = styled.div`

        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        /* align-items: center; */
        /* justify-content: space-between; */
        box-shadow: 0px 5px 10px #2b6370;
        border-radius: 10px;
        max-width: inherit;

        @media (max-width: 1280px) {
            display: flex;
            /* flex-direction: column; */
            /* max-width: 768px; */
            margin: 0 auto;
            padding-top: 40px;
        }

        @media (max-width: 768px) {
            display: flex;
            /* flex-direction: column; */
            max-width: inherit;
            /* max-height: inherit; */
            margin: 0 auto;
            padding-top: 0px;
        }

`


const TextWrapper = styled.div`
    max-width: 100%;
    padding: 35px ;
    font-size: 20px;
    text-align: justify;

    @media (max-width: 1280px) {
        max-width: 600px;
        margin: 0 auto;
        text-align: justify;
        padding: 0px;
    }

    @media (max-width: 768px) {
        width: 90%;
        text-align: justify;
        font-size: 16px;
        padding-top: 16px;
        margin: 0 auto;
    }
`

export const MyExpContainer = () => (
    <MyExpSection>
        <Title>Мой опыт</Title>
        <MyExpWrapper>

            <TextWrapper>
                <Text>
                    Работаю в тестировании уже почти 7 лет. За это время прошел путь от стажера-тестировщика до техлида направления и
                    приобрел множество полезных навыков: теория тестирования, тестирование API, автоматизация тестирования (преимущественно
                    на Python, но также сейчас автоматизирую на связке JS+Playwright; в рамках своих увлечений также изучал C#, так что
                    при необходимости смогу писать и на нем), тестирование мобильных приложений, интеграция автотестов с таск-трекиноговыми
                    системами, настройка CI, работа с Git и снифферами трафика. Также в целом мне интересно все, что касается сферы IT и 
                    всегда хочется погрузиться в задачи как можно глубже - поэтому также закончил курс по фронтенду (начиная с нативного js и
                    заканчивая React + Redux).

                </Text>
                <Text>
                    Безусловно, старался развиваться не только в хардах, но и прокачивал свои софт-скиллы. За более чем 2 года в роли техлида QA
                    провел бесчетное количество 1-1. Также регулярно проводил комьюнити встречи и обучение разному инструментарию для ребят в 
                    компании. Участвовал в масштабных мероприятях, которые касались переработки матрицы компетенций, процесса поставки, проработки
                    и исследованию софт-скиллов, которые актуальны именно для нашей компании. Провел большое количество собеседований и отвечал за
                    бесперебойную работу команд в плане закрытия целей по качеству.
                </Text>
            </TextWrapper>
            <MyExpSlider></MyExpSlider>

        </MyExpWrapper>
    </MyExpSection>
);