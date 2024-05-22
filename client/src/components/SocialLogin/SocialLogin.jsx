import { FaGoogle } from "react-icons/fa";
const SocialLogin = ({googlehandle}) => {
  return (
    <div>
      <div>
        <button onClick={googlehandle} className="btn">
          <FaGoogle/>
          Button
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
