import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function HomeRight({ FormType, goToMessage, goto }) {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alter1, setAlert1] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [selectedProfession, setSelectedProfession] = useState("engineer");
  const navigate = useNavigate();

  const blankAlert1 = useCallback(() => {
    setTimeout(() => {
      setAlert1("");
    }, 2000);
  }, []);

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();

      console.log("submite handler called");
      if (FormType === "Signup") {
        if (phoneNumber.length < 10) {
          setAlert1("Mobile number should be 10 digits");
          blankAlert1();
          return;
        }
        if (password.length < 8) {
          setAlert1("Password Length should not be lessthan 8");
          blankAlert1();
          return;
        }

        const user = {
          username,
          email,
          password,
          phoneNumber,
          selectedProfession,
        };
        // console.log("user is", user);
        localStorage.setItem("userData", JSON.stringify(user));
        navigate("/login");
      } else {
        const userData = JSON.parse(localStorage.getItem("userData"));
        console.log(username, userData.username);
        if (userData.email === email) {
          if (userData.password === password) {
            navigate("/dashboard");
          } else {
            setAlert1("Enter Correct Password");
          }
        } else {
          setAlert1("User not found, Please enter the correct email");
        }
      }
    },
    [
      FormType,
      username,
      email,
      password,
      phoneNumber,
      selectedProfession,
      blankAlert1,
      navigate,
    ]
  );

  return (
    <>
      <div className="md:w-full h-screen  bg-[url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center  w-full p-2">
        <div className="py-2  w-full h-full">
          <h1 className="text-center  text-purple-700 font-bold  text-3xl">
            {FormType} Page
          </h1>
          <p className="bg-red-600 text-center  my-2 text-black rounded-lg ">
            {alter1}
          </p>
          <div className=" h-full  flex flex-col   mt-10 items-center ">
            <form className="flex md:w-[50%] w-[90%] flex-col  ">
              {FormType === "Signup" && (
                <div className="w-full  border border-black bg-none mb-5 rounded-md">
                  <input
                    required
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full text-black  h-full p-2 bg-transparent outline-none rounded-md"
                  />
                </div>
              )}
              <div className="w-full  border border-black bg-none mb-5  rounded-md">
                <input
                  required
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-black  h-full p-2 bg-transparent outline-none rounded-md"
                />
              </div>
              {FormType === "Signup" && (
                <div className="flex justify-between flex-col md:flex-row">
                  <div className="md:w-[49%] w-full border border-black bg-none mb-5  rounded-md">
                    <input
                      required
                      type="number"
                      placeholder="Enter Mobile Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full text-black  h-full p-2 bg-transparent outline-none rounded-md"
                    />
                  </div>
                  <div className="md:w-[49%] w-full border border-black bg-none mb-5  rounded-md">
                    <select
                      id="profession"
                      className="text-black  w-full  p-2 bg-transparent outline-none rounded-md"
                      value={selectedProfession}
                      onChange={(e) => {
                        console.log(e.target.value);

                        setSelectedProfession(e.target.value);
                      }}
                    >
                      <option defaultValue="enineer" value="engineer">
                        Engineer
                      </option>
                      <option value="doctor">Doctor</option>
                      <option value="teacher">Teacher</option>
                      <option value="artist">Artist</option>
                      <option value="student">Student</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="relative  w-full  border border-black bg-none mb-5  rounded-md">
                <input
                  required
                  type={!show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={
                    FormType === "Signup" ? "Create password" : "Enter Password"
                  }
                  className="w-full text-black  h-full p-2 bg-transparent outline-none rounded-md"
                />
                <span
                  className="absolute top-2 right-2 cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  {show ? (
                    <i className="fa-solid  fa-eye"></i>
                  ) : (
                    <i className="fa-solid  fa-eye-slash"></i>
                  )}{" "}
                </span>
              </div>

              <div className={`w-full   text-center py-2  bg-none`}>
                <button
                  type="submit"
                  onClick={submitHandler}
                  className={` px-2 py-1 text-white hover:bg-purple-600  bg-purple-700 border rounded-md `}
                >
                  {FormType}
                </button>
              </div>
            </form>
            <div className="text-purple-500  mt-10 hover:text-black text-lg  font-bold transition-all duration-300">
              <span>
                <Link to={goto} className="underline  underline-offset-2">
                  {goToMessage}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeRight;
