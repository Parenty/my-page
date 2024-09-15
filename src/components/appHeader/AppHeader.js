import { useState, useRef } from "react";
import Header from "../UI/Header/Header";
import { useClickOutside } from "../../hooks/useClickOutside";

const AppHeader = () => {
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if (isOpen) {
            setTimeout(() => setOpen(false), 50);
        }
        setOpen(false);
    })

    return (
        <Header data-testid="header">
            <h1 >
                <a href="#">
                    <span>Моя страничка</span>
                </a>
            </h1>
            <nav className={`header__nav${isOpen ? '__active' : ''}`} ref={menuRef}>
                <ul>
                    <li>
                        <a href="#about_me">Обо мне</a>
                    </li>
                    <li>
                        <a href="#my_exp">Мой опыт</a>
                    </li>
                    <li>
                        <a href="#my_hobby">Хобби</a>
                    </li>
                </ul>
            </nav>
            <button onClick={() => setOpen(!isOpen)}></button>
        </Header>
    )
}

export default AppHeader;