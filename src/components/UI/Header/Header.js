import styled from 'styled-components';

const Header = styled.header`

    background-color: white;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 5px 10px #2b6370;
    margin-bottom: 40px;

    h1 {
        margin-left: 48px;
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
        ul {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            font-size: 24px;
            line-height: 32px;
            li {
                list-style-type: none;
                margin: 0;
                padding: 0;
                margin: 0 24px;
            }
        }
    }
    
    `


export default Header;