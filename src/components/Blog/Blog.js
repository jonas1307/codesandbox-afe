import BlogItem from "../BlogItem/BlogItem";

export default function Blog() {
  const posts = [
    {
      title: "5 dicas para sua carreira profissional",
      description:
        "Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end"
    },
    {
      title: "5 dicas para sua carreira profissional",
      description:
        "Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end"
    },
    {
      title: "5 dicas para sua carreira profissional",
      description:
        "Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end"
    }
  ];

  return (
    <main className="w-full p-4 pt-8">
      <div className="2xl:mx-96 xl:mx-72 lg:mx-48 md:mx-12 mx-0">
        <h2 className="text-xl font-medium font-sans mb-2">Últimas do blog</h2>
        {posts.map((item) => (
          <BlogItem {...item} />
        ))}
        <a href="#" className="font-medium text-sky-900 hover:text-sky-600">
          Ver tudo
        </a>
      </div>
    </main>
  );
}
