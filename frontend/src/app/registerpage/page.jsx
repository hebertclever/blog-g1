import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <form className="w-[90%] h-[650px] md:w-[600px] md:p-10 md:border flex flex-col gap-5">
        <h2 className="self-start mb-5 font-semibold text-xl">Register</h2>
        <div className="w-full flex flex-col gap-2">
          <span>Name</span>
          <input
            className="border h-12 px-2"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <span>Email</span>
          <input
            className="border h-12 px-2"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <span>Password</span>
          <input
            className="border h-12 px-2"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        <input
          type="submit"
          value="Register"
          className="border h-12 bg-blue-500 mb-12 text-white mt-10"
        />
        <span>
          Do you already have an account?{" "}
          <Link href="/loginpage" className="text-blue-500 underline">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterPage;
