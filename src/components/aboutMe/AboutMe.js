import {AboutMeContainer} from "../UI/AboutMe/AboutMeContainer"
import MyPhoto from "../UI/images/my_image";
import myImage from "../../assets/photos/my_photo.jpg"

const AboutMe = () => {
    return (
        <AboutMeContainer>
            <MyPhoto src={myImage}/>
        </AboutMeContainer>
    )
}

export default AboutMe;