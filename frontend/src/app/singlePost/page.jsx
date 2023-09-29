import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

const BlogPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col px-5">
      {/* HEADER */}

      <header className="border h-12 w-full flex items-center justify-between">
        <div className="w-28">
          <nav className="border flex items-center">
            <div className="h-8 w-8 rounded-[50%] flex justify-center items-center bg-blue-600 text-white font-semibold text-lg">
              C
            </div>
            <span className="ml-2 font-semibold text-lg">coca</span>
          </nav>
        </div>

        <div>
          <button className="w-20 h-8 rounded-md text-sm font-semibold bg-[#F2F4FC]">
            Sign In
          </button>
        </div>
      </header>
      {/* ------------------------- */}

      <section className="w-full h-auto flex flex-col items-center mt-24">
        <span>Jul 20, 2022</span>
        <p>Consectures Dummy Content Velit officia cons is enim velit mollit</p>

        <div className="w-[1127px] h-[507px] border">
          <img src="" alt="" />
        </div>

        <div className="w-[962px] border h-auto flex flex-col">
          <h3>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here
          </h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose.
          </p>

          <div className="w-full border border-blue-500">
            <p>
              “There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour”
            </p>
          </div>

          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
      </section>

      <footer className="w-[90%] self-center h-[605px] flex flex-col ">
        <div className="w-full flex justify-between items-center">
          <div className="h-10 w-10 rounded-[50%] flex justify-center items-center bg-blue-600 text-white font-semibold text-lg">
            C
          </div>

          <div className="flex items-center gap-5">
            <span className="text-[#808D9E]">Ready to get started?</span>
            <button className="w-[175px] h-[48px] bg-blue-600 text-white font-semibold rounded-lg">
              Get Started
            </button>
          </div>
        </div>

        <div className="bg-[#E9ECF2] w-full h-[1px] mt-5"></div>

        <div className="w-full flex">
          <div className="flex flex-col">
            <h3>Subscribe to our newsletter</h3>
            <div className="flex w-[289px] h-[51px]">
              <input
                type="text"
                placeholder="Email address"
                className=" border-bottom px-2"
              />
              <button className="w-[50px] bg-blue-600 rounded-md text-white">{">"}</button>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-blue-600">Services</span>

            <span>Email Marketing</span>
            <span>Campaigns</span>
            <span>Branding</span>
            <span>Offline</span>
          </div>

          <div className="flex flex-col">
            <span className="text-blue-600 font-semibold">About</span>

            <span>Our Story</span>
            <span>Benefits</span>
            <span>Tearn</span>
            <span>Careers</span>
          </div>

          <div className="flex flex-col">
            <span className="text-blue-600 font-semibold">Help</span>

            <span>FAQs</span>
            <span>Contact Us</span>
          </div>
        </div>

        <div className="w-full flex items-center justify-between">
          <p>©2022 - Coca by Sans Design</p>

          <div className="flex gap-5">
            <GrFacebookOption  className=""/>
            <IoLogoTwitter />
            <FaInstagram />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;