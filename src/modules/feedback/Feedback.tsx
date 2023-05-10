import { FeedbackForm } from "../../components";

const Feedback = () => {
    return (
        <section>
            <div className="row">
                <div className="col-4">
                    <h2>Форма обратной связи</h2>
                </div>
                <div className="col-8">
                    <FeedbackForm />
                </div>
            </div>
        </section>
    );
};

export default Feedback;