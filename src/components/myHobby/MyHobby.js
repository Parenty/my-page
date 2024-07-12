import styled from 'styled-components';

import {SectionWrapper} from '../UI/SectionWrapper/SectionWrapper';

const MyHobbySection = styled(SectionWrapper)`



`


const Title = styled.h1`
    font-weight: 300px;

    &::before {
            display: block;
            content: "";
            height: 70px;
            margin: -55px 0 0;
        }
`

const Text = styled.p`
    margin-top: 0px;
    font-size: inherit;
    text-align: inherit;
    /* text-indent: 15%; */
`

const MyHobbyWrapper = styled.div`

        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        /* align-items: center; */
        /* justify-content: space-between; */
        box-shadow: 0px 5px 10px #2b6370;
        border-radius: 10px;
        min-width: 0;
        max-width: inherit;
        /* margin: 0 auto; */

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



const MyHobby = () => {


    return (
        <MyHobbySection>
        <Title id='my_hobby'>Мои увлечения</Title>
        <MyHobbyWrapper>

            <TextWrapper>
                <Text>

                    Так уж сложилось, что очень много моих увлечений в той или иной степени связаны с IT. Ну
                    во-первых, мне нравится изучать что-то новое. У меня в жизни бывали периоды когда я мог несколько
                    месяцев ничего нового не узнавать, но мне это не понравилось - как будто чего то не хватает. Поэтому
                    очень часто я прохожу какие то курсы/уроки, которые напрямую не связаны с моей деятельностью - выхожу
                    за рамки QA. Так я уже проходил курсы Django, по фронтенду и конечно же по геймдеву. У кого из нас не было
                    заветной мечты сделать свою игру? В связи с этим прочитал книжку по разработке на Unity, также прошел курсы
                    по C#. Немного ознакомился с тем как делать анимацию (у меня это было на примере пиксельной графики). Может
                    быть даже прикреплю сюда гифку с примером аниации - они конечно выглядят не очень, но за то сделаны своими руками

                </Text>

                <Text>

                    Конечно же у меня есть и другие увлечения нежели целый день сидеть за курсами. Лююблю также и поиграть. Причем игры
                    абсолютно разные - начиная от сессионок и заканчивая классными играми для соло прохождения. Помимо компьютера есть
                    также плойка, свич и даже VR. Также очень люблю путешествовать, несмотря на то, что пока посетил только 3 страны - Мальдивы,
                    Таиланд и Грузию. Но планов много, так что надеюсь все еще впереди. Также не расстраиваюсь, если удается провести вечер за хорошим фильмом
                    или сериалом.

                </Text>

            </TextWrapper>

        </MyHobbyWrapper>
    </MyHobbySection>
    )
}

export default MyHobby;