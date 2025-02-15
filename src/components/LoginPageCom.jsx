import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

function LoginPage() {
  return (
    <div>
      <Login />
    </div>
  );
}

const Login = () => {
  return (
    <div className="background">
      <div className="mx-auto flex justify-center px-auto">
        <div className="log shadow-2xl m-auto p-48 m-10">
          <p className=" p-4 mx-5 bg-light rounded-pill">
            <FontAwesomeIcon icon={faBasketShopping} size="2x" />
            <h1 className="fw-bold">- Shopan -</h1>
          </p>
          <h2 id="login" className="fw-bold mx-4 text-white ">
            Login
          </h2>
          <form action="/HomePage">
            <label className="d-flex justify-start fw-bold text-white shadow">
              Email
            </label>
            <input
              type="email"
              className="placeholder bg-light border border-2 rounded w-100 py-2 my-2 px-2 shadow"
              placeholder="email"
              required
            />

            <label className="d-flex justify-start fw-bold text-white shadow">
              Password
            </label>
            <input
              type="password"
              className="placeholder bg-light border border-2 rounded w-100 py-2 my-2 px-2 shadow"
              placeholder="password "
              required
            />

            <button
              type="submit"
              className="submit rounded fw-bold fs-6 px-5 mt-5 bg-purple-600 hover:bg-purple-800 text-white font-bold active:bg-purple-950 transition-all duration-75 shadow"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
