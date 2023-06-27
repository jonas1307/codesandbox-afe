export default function BlogItem({ title, description }) {
  return (
    <article className="my-4">
      <a href="#" className="font-medium text-sky-900 hover:text-sky-600">
        {title}
      </a>
      <p className="italic">{description}</p>
    </article>
  );
}
