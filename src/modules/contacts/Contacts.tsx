import { useAppSelector } from "../../app/hooks";
import { Button } from "../../ui";
import { formatPhone } from "../../utils/formatPhone";

const Contacts = () => {
    const { phones, address, schedule, shop_address, email } = useAppSelector((state) => state.contactsReducer.data);
    const { index, city, street } = address;

    return (
        <section id="contacts">
            <div className="row">
                <div className="col-4">
                    <h2>Контакты</h2>
                </div>
                <div className="col-8">
                    <address>
                        <dl className="row row--7">
                            <div className="col-3">
                                <dt>Телефон отдела продаж:</dt>
                                <dd>
                                    {phones.map((phone) => (
                                        <a href={`tel:${formatPhone(phone)}`}>{phone}</a>
                                    ))}
                                </dd>
                            </div>
                            <div className="col-3">
                                <dt>Адрес производства:</dt>
                                <dd>
                                    <span>{index}, г.&nbsp;{city}</span>
                                    <span>{street}</span>
                                </dd>
                            </div>
                            <div className="col-3">
                                <dt>Режим работы интернет магазина:</dt>
                                <dd>
                                    {schedule.map((item, index) => (
                                        <span key={index}>{item}</span>
                                    ))}
                                </dd>
                            </div>
                            <div className="col-3">
                                <dt>Адрес склада интернет-магазина:</dt>
                                <dd>
                                    <span>{shop_address.street}</span>
                                </dd>
                            </div>
                            <div className="col-3">
                                <dd>
                                    <Button href={`mailto:${email}`} text={email} style="link" />
                                </dd>
                            </div>
                        </dl>
                    </address>
                </div>
            </div>
        </section>
    );
};

export default Contacts;