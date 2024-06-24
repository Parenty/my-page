import styled from 'styled-components';
import myImage from "../../../assets/photos/my_photo.jpg"

const AboutMeSection = styled.section`

    max-width: 1280px;
    margin: 0 auto;
`


const Title = styled.h1`
    font-weight: 300px;
`

const Text = styled.p`
    margin-top: 0px;
    font-size: 20px;
    text-align: left;
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
`

const MyPhoto = styled.img`

    display: block;
    max-width: 600px;
    border-radius: 10px 0px 0px 10px;
    /* height: 480px; */
    /* width: 480px; */


`

const PhotoWrapper = styled.div`
    border-radius: inherit;
    flex-basis: 400px;
`

const TextWrapper = styled.div`
    max-width: 600px;
    padding-top: 0px;
`

export const AboutMeContainer = () => (
    <AboutMeSection>
        <Title>Обо мне</Title>
        <AboutMeWrapper>
            <PhotoWrapper>
            <MyPhoto   MyPhoto src={myImage} alt='my photo'></MyPhoto>
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