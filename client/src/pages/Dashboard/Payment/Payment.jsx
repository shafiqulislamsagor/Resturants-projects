import {loadStripe} from '@stripe/stripe-js';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import {Elements} from '@stripe/react-stripe-js';
import CheckOut from './CheckOut';

const stripePromise = loadStripe(import.meta.env.VITE_payment)

const Payment = () => {
    return (
        <div>
            <SectionTitle heading='payment' subHeading='Please send money..!'/>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOut/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;