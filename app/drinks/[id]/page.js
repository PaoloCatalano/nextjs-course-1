import Link from "next/link";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
import drinkImg from "./drink.jpg";
import Image from "next/image";

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch a drink...");
  }
  return res.json();
};

const SingleDrinkPage = async ({ params }) => {
  /* this nextJS internal "params" is an object with KEY ([...whatever you write as directory name])  and VALUE (the string after the last slash of the URL)  */
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
        <Image src={drinkImg} className="w-8 h-8 rounded" alt="drink" />
      </Link>

      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
        alt={title}
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};
export default SingleDrinkPage;
