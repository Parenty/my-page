import Header from "../UI/Header/Header";

const AppHeader = () => {
    return (
        <Header>
            <h1 >
                <a href="#">
                    <span>Моя страничка</span>
                </a>
            </h1>
            <nav >
                <ul>
                    <li>
                        <a href="#">Обо мне</a>
                    </li>
                    <li>
                        <a href="#">Мой опыт</a>
                    </li>
                    <li>
                        <a href="#">Хобби</a>
                    </li>
                </ul>
            </nav>
        </Header>
    )
}

export default AppHeader;