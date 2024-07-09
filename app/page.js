import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Next.js Tutorial</h1>
      <Link href="/auth" className="btn btn-secondary">
        get started
      </Link>
    </div>
  );
};
export default HomePage;
