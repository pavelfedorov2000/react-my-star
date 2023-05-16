import { Pages } from "../../enums/Page";
import { EmptyBlock as EmptyBlockType } from "../../interfaces/EmptyBlock";
import { Button } from "../../ui";

const EmptyBlock = ({ text }: EmptyBlockType) => {
    return (
        <div className="empty-block">
            <div className="empty-block__text">{text}</div>
            <Button href={Pages.Catalog.path} className="empty-block__btn" text="Перейти в каталог" />
        </div>
    );
};

export default EmptyBlock;