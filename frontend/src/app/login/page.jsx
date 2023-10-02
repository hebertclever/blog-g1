import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <form className="w-[90%] h-[550px] md:w-[600px] md:p-10 md:border flex flex-col gap-5">
        <h2 className="self-start mb-5 font-semibold text-xl">Login</h2>

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
          value="Submit"
          className="border h-12 bg-blue-500 mb-12 text-white mt-10"
        />
        <span>
          Do not you have an account yet?{" "}
          <Link href="/registerpage" className="text-blue-500 underline">
            Register
          </Link>
        </span>
      </form>
    </div>
  );
};

export default LoginPage;
