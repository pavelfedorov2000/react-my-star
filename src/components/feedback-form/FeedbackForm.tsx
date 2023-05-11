import { ButtonType } from "../../enums/ButtonType";
import { FieldType } from "../../enums/FieldType";
import { Button, Field } from "../../ui";
import FormAgree from "../form-agree/FormAgree";

const FeedbackForm = () => {
    return (
        <form action="#" className="feedback-form">
            <div className="feedback-form__inner">
                <Field className="feedback-form__item" placeholder="Имя" label="Имя" name="name" />
                <Field className="feedback-form__item" placeholder="Имя" label="Телефон" name="phone" fieldType={FieldType.Tel} />
                <Field className="feedback-form__item" placeholder="Имя" label="E-mail" name="email" fieldType={FieldType.Email} />
                <Field className="feedback-form__item feedback-form__item--text" placeholder="Комментарий" label="Комментарий" name="comment" fieldType={FieldType.Textarea} />
                <Button className="feedback-form__btn" text="Отправить" type={ButtonType.Submit} />
                <FormAgree className="feedback-form__agree" />
            </div>
        </form>
    );
};

export default FeedbackForm;