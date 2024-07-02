import { useState } from "react";
import Header from "../UI/Header/Header";

const AppHeader = () => {
    const [isOpen, setOpen] = useState();

    return (
        <Header>
            <h1 >
                <a href="#">
                    <span>Моя страничка</span>
                </a>
            </h1>
            <nav className={`header__nav${isOpen ? '__active' : ''}`}>
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
            <button onClick={() => setOpen(!isOpen)}></button>
        </Header>
    )
}

export default AppHeader;