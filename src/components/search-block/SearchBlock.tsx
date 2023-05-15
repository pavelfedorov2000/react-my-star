import { Button, Field } from "../../ui";
import { SearchIcon } from "../../ui/icons";

const SearchBlock = () => {
    return (
        <form action="#" className="search-block header__search">
            <div className="search-block__form">
                <Field className="search-block" name="search" placeholder="Поиск" />
                <span className="search-block__placeholder">Поиск</span>
                <Button className="search-block__form-btn" icon={<SearchIcon />} aria-label="Начать поиск" transparent />
            </div>
        </form>
    );
};

export default SearchBlock;