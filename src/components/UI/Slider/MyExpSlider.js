import { useEffect, useState, Children, cloneElement, useRef } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import productStar from "../../../assets/portfolio/Screenshot_1.png"
import stepikCert from "../../../assets/portfolio/Screenshot_5.png"
import slurmCert from "../../../assets/portfolio/slurm-certificate-Docker.png"
import productStarMob from "../../../assets/portfolio/mobile/Screenshot_1_mob.png"
import stepikCertMob from "../../../assets/portfolio/mobile/Screenshot_5_mob.png"
import slurmCertMob from "../../../assets/portfolio/mobile/slurm-mob.png"




const StyledSliderContainer = styled.div`

    /* height: 150px;
    width: 450px; */
    display: flex;
    /* flex-wrap: wrap; */
    align-items: center;
    margin: 0 auto;

    .arrow {
        cursor: pointer;
    }

    
`

const SliderTitle = styled.h2`

`

const SliderMainContainer = styled.div`

    margin: 0 auto;

`

const StyledWindow = styled.div`

    height: 424px;
    width: 600px;
    /* height: 100%;
    width: 100%; */
    overflow: hidden;
    /* border: 3px solid orange; */
    box-shadow: 0px 0px 10px #2b6370;
    border-radius: 10px;
    /* background-color: blue; */

    @media (max-width: 768px) {
        max-width: 280px;
        max-height: 198px;
        
    }
`

const AllItemsContainer = styled.div`

    height: 100%;
    display: flex;
    flex-direction: row;

    transition: translate;
    transition-property: transform;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;

`

const StyledCert = styled.picture`
    display: flex;
    align-items: center;
    object-fit: contain;

`

const Slider = ({children}) => {

    // let delta = 0;
    // const screenWidth = window.screen.width
    // if (screenWidth >=768) {
    //     delta = 600
    // } else {
    //     delta = 280
    // }
    // const delta = 600;
    const [slides, setSlides] = useState([]);
    const [offset, setOffset] = useState(0);
    const [width, setWidth] = useState(600);

    const windowElRef = useRef();


    useEffect(() => {

        const resizeHandler = () => {
            const _width = windowElRef.current.offsetWidth;
            setWidth(_width)
            setOffset(0);
    
        }
        resizeHandler();
        window.addEventListener('resize', resizeHandler)

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [])

    const handleLeftArrowClick = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset+width
            console.log(newOffset);
            return Math.min(newOffset, 0);
        })
        console.log('left');
    }

    const handleRightArrowClick = () => {
        console.log('right');
        setOffset((currentOffset) => {
            const newOffset = currentOffset - width
            console.log(newOffset);
            const maxOffset = -(width * (slides.length-1))
            return Math.max(newOffset, maxOffset);
        })
    }


    useEffect(() => {
        setSlides(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: '100%',
                        maxWidth: '100%',
                    }
                })
            })
        )
    // eslint-disable-next-line
    }, [])

    return (
        <SliderMainContainer>
        <SliderTitle>Мои сертификаты</SliderTitle>
        <StyledSliderContainer>
            <FaChevronLeft className="arrow" onClick={handleLeftArrowClick}/>
            <StyledWindow ref={windowElRef}>
                <AllItemsContainer style={
                    {transform: `translateX(${offset}px)`}
                }>{slides}</AllItemsContainer>
            </StyledWindow>
            <FaChevronRight className="arrow" onClick={handleRightArrowClick}/>
        </StyledSliderContainer>
        </SliderMainContainer>

    )

}




const StyledDiv = styled.div`

    display: flex;
    flex-wrap: wrap;
    

`

// const StyledDiv2 = styled.div`

// `

// const StyledDiv3 = styled.div`

// `


const MyExpSlider = () => (
    <Slider>
        <StyledDiv>
            <StyledCert >
                <source media="(min-width: 768px)" srcSet={productStar}/>
                <source media="(max-width: 768px)" srcSet={productStarMob}/>
                <img src={productStar} alt="Продуктстар"/>
            </StyledCert>
        </StyledDiv>
        <StyledDiv>
            <StyledCert>
                <source media="(min-width: 768px)" srcSet={stepikCert}/>
                <source media="(max-width: 768px)" srcSet={stepikCertMob}/>
                <img src={stepikCert} alt="Степик"/>
            </StyledCert>
        </StyledDiv>
        <StyledDiv>
            <StyledCert>
                <source media="(min-width: 768px)" srcSet={slurmCert}/>
                <source media="(max-width: 768px)" srcSet={slurmCertMob}/>
                <img src={slurmCert} alt="Слерм"/>
            </StyledCert>
        </StyledDiv>
    </Slider>
    

)

export default MyExpSlider;