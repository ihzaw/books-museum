import Image from "next/image";
import Header from "./Header";
import Body from "./Body";

async function getData() {
  const formattedBookData = []
  const res = await fetch('https://openlibrary.org/search.json?title=percy+jackson&fields=title,key&limit=3&format=json')
  const booksList = await res.json()

  for (const book of booksList.docs) {
    const detailUrl = `https://openlibrary.org${book.key}.json`
    const detailRes = await fetch(detailUrl)
    const bookDetail = await detailRes.json()
    formattedBookData.push(bookDetail)
  }
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  console.log('formatted :', formattedBookData)
  return formattedBookData
}

export default async function Home() {
  const data = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center gap-2 p-24">
      <Header />
      <Body data={data}/>
    </main>
  );
}
