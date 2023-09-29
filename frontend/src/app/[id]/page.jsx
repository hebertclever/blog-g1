
const BlogPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col px-5">
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
    </div>
  );
};

export default BlogPage;