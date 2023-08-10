import { useAppSelector } from "../../app/hooks";
import { Button } from "../../ui";

const mainClass = 'profile-personal';

const Personal = () => {
    const { data } = useAppSelector((state) => state.profileReducer);

    return (
        <div className={mainClass}>
            <div className={`${mainClass}__row`}>
                {Object.values(data).map((item, index) => (
                    <section key={index} className={`${mainClass}__item ${mainClass}__item--${item.name}`}>
                        <h3 className={`${mainClass}__title`}>{item.title}</h3>
                        <ul className={`${mainClass}__data-list`}>
                            {Object.values(item.fields).map((field, j) => (
                                <li key={j} className={`${mainClass}__data-item`}>{field}</li>
                            ))}
                        </ul>
                        <Button style="link" text={`Изменить ${index === 2 ? 'пароль' : ''}`} />
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Personal;

//<small class="profile-personal__info">* при изменении E-mail автоматически изменяется Логин для входа в Личный кабинет</small>