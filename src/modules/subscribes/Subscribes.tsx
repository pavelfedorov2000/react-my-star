import { SubscribeCard } from "../../components";

const Subscribes = () => {
    return (
        <ul className="subscribes">
            <SubscribeCard title="Праздничные акции" isSubscribed email sms />
        </ul>
    );
};

export default Subscribes;