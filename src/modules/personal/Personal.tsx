import { useAppSelector } from "../../app/hooks";
import { Button } from "../../ui";

const Personal = () => {
    const { data } = useAppSelector((state) => state.profileReducer);

    return (
        <div className="profile-personal">
            <div className="profile-personal__row">
                {Object.values(data).map((item, index) => (
                    <section key={index} className={`profile-personal__item profile-personal__item--${item.name}`}>
                        <h3 className="profile-personal__title">{item.title}</h3>
                        <ul className="profile-personal__data-list">
                            {Object.values(item.fields).map((field, j) => (
                                <li key={j} className="profile-personal__data-item">{field}</li>
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