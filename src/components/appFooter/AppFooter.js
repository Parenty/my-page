import styled from 'styled-components';

const AppFooter = () => {

    return (
        <Footer>

        <Contacts>Контакты</Contacts>
        <WrapperContacts>

            <Text>Телеграмм:</Text>
            <Text>
                <StyledLink href='https://t.me/Kiritsugo'>@Kiritsugo</StyledLink>
            </Text>
        </WrapperContacts>

        </Footer>
    )

}


const Footer = styled.footer`

    box-sizing: border-box;
    /* left: 0;
    top: 0; */
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 0px 10px;
    padding-bottom: 0px;
    margin-bottom: 0px;
    /* display: flex; */
    /* justify-content: space-between;
    align-items: center; */
    box-shadow: 0px 0px 10px 0px #2b6370;
    margin-top: 40px;
    /* margin-bottom: 40px; */
    border-radius: 10px 10px 0px 0px;
    z-index: 10;
    font-size: 22px;

    @media (max-width: 768px) {
        /* font-size: 14px; */
        /* height: 46px; */
    }
`

const Contacts = styled.h3`

        margin-left: 48px;
        font-size: 20px;
        cursor: default;
        color: #8ccddb;
        @media (max-width: 576px) {
            /* margin: 0 auto; */
            margin: 20px 10px 10px 10px;
            /* font-size: 24px; */
        }

`

const WrapperContacts = styled.div`

        display: flex;
        font-size: 14px;
        margin-left: 48px;
        max-width: 150px;
        justify-content: space-between;

        @media (max-width: 576px) {
            /* margin: 0 auto; */
            margin: 20px 10px 0px 10px;
            /* font-size: 24px; */
        }
`

const Text = styled.p`
    flex-wrap: wrap;
    margin-top: 0px;
    font-size: inherit;
    text-align: inherit;
    /* text-indent: 15%; */
`

const StyledLink = styled.a`

    color: #8ccddb;
    text-decoration: none;
    &:hover {
        color: #80b6c2
            }
    
`

export default AppFooter;