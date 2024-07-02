import styled from 'styled-components';
import menuIcon from '../../../assets/icons/menu_24dp.svg'


const Header = styled.header`

    position: fixed;
    box-sizing: border-box;
    left: 0;
    top: 0;
    width: 100%;
    background-color: white;
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 5px 10px #2b6370;
    margin-bottom: 40px;
    border-radius: 0px 0px 10px 10px;
    z-index: 1;

    /* @media (max-width: 576px) { 
       
       position: fixed;
       display: flex;
       flex-direction: column;
       justify-content: start;
       top: 0;
       left: 0;
       width: 220px;
       height: 100%;
       border-top-right-radius: 16px;
       border-bottom-right-radius: 16px;
       

       
   } */

    h1 {
        margin-left: 48px;
        font-size: 24px;
        @media (max-width: 576px) {
            /* margin: 0 auto; */
            margin: 20px 10px 10px 10px;
            font-size: 24px;
        }
    }

    a {
        color: #8ccddb;
        text-decoration: none;
        &:hover {
            color: #80b6c2
                }
        }
    
    nav {
        margin-right: 48px;

        &.header__nav__active {
            transform: translateX(100%);
        }
        
        ul {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            font-size: 22px;
            line-height: 32px;
            li {
                list-style-type: none;
                margin: 0;
                padding: 0;
                margin: 0 24px;


                @media (max-width: 576px) { 
            
                    margin: 30px 10px;
                    font-size: 22px;

   
                }
            }
            

            @media (max-width: 576px) { 
            
                flex: 1;
                display:flex;
                flex-direction: column;
                justify-content: start;
                margin: 0 auto;
                padding-top: 100px;
                /* padding-left: 40px; */
       
            }
        }

        @media (max-width: 576px) {

            position: fixed;
            display: flex;
            left: -225px;
            flex-direction: column;
            background-color: white;
            box-shadow: 0px 5px 10px #2b6370;
            /* justify-content: start; */
            top: 0;
            width: 220px;
            height: 100%;
            border-top-right-radius: 16px;
            border-bottom-right-radius: 16px;
            transition: all 0.3s linear;


        }


    }

    button {
        display: none;

        @media (max-width: 576px) {
            display: block;
            margin-left: auto;
            width: 24px;
            height: 24px;
            background-color: transparent;
            background-image: url(${menuIcon});
            background-repeat: no-repeat;
            padding: 0;
            border: 0;
        }
    }


    
    `


export default Header;