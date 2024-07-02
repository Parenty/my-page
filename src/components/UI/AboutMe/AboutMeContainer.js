import styled from 'styled-components';
import myImage from "../../../assets/photos/my_photo.jpg"

const AboutMeSection = styled.section`


    @media (max-width: 1280px) {

        max-width: 768px;
        margin: 0 auto;

    }

    @media (max-width: 768px) {

        max-width: 480px;
        margin: 0 auto;

    }

    @media (max-width: 768px) {

        max-width: 320px;
        margin: 0 auto;

    }

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

const AboutMeWrapper = styled.div`
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0px 5px 10px #2b6370;
        border-radius: 10px;
        max-width: inherit;

        @media (max-width: 1280px) {
            display: flex;
            flex-direction: column;
            /* max-width: 768px; */
            margin: 0 auto;
            padding-top: 40px;
        }

        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            /* max-width: 480px; */
            margin: 0 auto;
            padding-top: 0px;
        }
`

const MyPhoto = styled.img`

    display: block;
    max-width: 600px;
    border-radius: 10px 0px 0px 10px;
    /* height: 480px; */
    /* width: 480px; */

    @media (max-width: 1280px) {
        border-radius: 10px 10px 10px 10px;

    }

    @media (max-width: 768px) {
        border-radius: 10px 10px 10px 10px;
        max-width: inherit;
    }


`

const PhotoWrapper = styled.div`
    border-radius: inherit;
    /* flex-basis: 400px; */
    margin-bottom: 10px;
    max-width: inherit;
    

    @media (max-width: 768px) {

        max-width: inherit;
    }
`

const TextWrapper = styled.div`
    max-width: 600px;
    padding-top: 0px;
    font-size: 20px;
    text-align: left;

    @media (max-width: 1280px) {
        width: 100%;
        text-align: justify;
    }

    @media (max-width: 768px) {
        width: 90%;
        text-align: justify;
        font-size: 16px;
    }
`

export const AboutMeContainer = () => (
    <AboutMeSection>
        <Title>Обо мне</Title>
        <AboutMeWrapper>
            <PhotoWrapper>
            <MyPhoto src={myImage} alt='my photo'></MyPhoto>
            </PhotoWrapper>
            <TextWrapper>
            <Text>
                Всем привет! Меня зовут Иван и на этой страничке я буду размещать информацию
                о себе, о своем опыте работы и увлечениях. Если кратко - работаю в IT и занимаюсь обеспечением
                качества. Люблю путешествовать, играть в компьютерные игры и смотреть сериалы.
            </Text>

            <Text>
                Также увлекаюсь разработкой и в частности геймдевом. Делал свои (к сожалению довольно сырые)
                проекты на Unity. Планирую изучать Godot.

            </Text>
            </TextWrapper>

        </AboutMeWrapper>
    </AboutMeSection>
);