import Image from "next/image";
import Header from "./Header";
import Body from "./Body";
import { getBooks } from "./actions";

export default async function Home({ Component, pageProps }) {
  const data = await getBooks();

  return <Body data={data} />;
}
