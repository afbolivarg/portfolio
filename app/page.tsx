import { BlogPosts } from 'app/components/posts';

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tighter">
        Andrés Felipe Bolívar
      </h1>
      <h2 className="mb-4 font-light">@afbolivarg</h2>
      <p className="mb-4">
        {`Working on the intersection of technology and business.`}
      </p>
      <p className="mb-4">
        {`Colombian self-taught developer with experience as a fullstack developer and ML engineer,
        currently wrapping up a Business Administration degree on a full scholarship. Passionate about technology, business, and design, 
        with a strong focus on creating functional, beautiful, and valuable solutions that drive 
        business success.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
