import { ButtonType } from "../../enums/ButtonType";
import { FieldType } from "../../enums/FieldType";
import { Button } from "../../ui";
import FormAgree from "../form-agree/FormAgree";
import FormItem from "../form-item/FormItem";

const FeedbackForm = () => {
    return (
        <form action="#" className="feedback-form">
            <div className="feedback-form__inner">
                <FormItem className="feedback-form__item" placeholder="Имя" label="Имя" name="name" />
                <FormItem className="feedback-form__item" placeholder="Телефон" label="Телефон" name="phone" fieldType={FieldType.Tel} />
                <FormItem className="feedback-form__item" placeholder="E-mail" label="E-mail" name="email" fieldType={FieldType.Email} />
                <FormItem className="feedback-form__item feedback-form__item--text" placeholder="Комментарий" name="comment" fieldType={FieldType.Textarea} />
                <Button className="feedback-form__btn" text="Отправить" type={ButtonType.Submit} />
                <FormAgree className="feedback-form__agree" />
            </div>
        </form>
    );
};

export default FeedbackForm;