import { Link } from "react-router-dom";
import Form from "../components/CheckOut/Form";
import Summary from "../components/CheckOut/Summary";

const CheckOutPage = () => {
  return (
    <>
      <div className="bg-0003 md:pb-[121px]">
        <div className="container">
          <div className="md:pt-[79px] md:pb-[38px] sm:pt-12 sm:pb-6 pt-4 pb-6">
            <Link to="/">Go Back</Link>
          </div>
          <div className="flex md:flex-row flex-col justify-between md:gap-[30px] gap-8">
            <Form />
            <Summary />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
