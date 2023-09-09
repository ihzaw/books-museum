import Image from "next/image";
import bookPlaceholder from '../../assets/placeholder_book.jpg'
const Body = (props) => {
  const { data } = props;
  // const data = [
  //   {
  //     type: { key: "/type/work" },
  //     title:
  //       "Percy Jackson and the Olympians 5 Book Paperback Boxed Set with Poster",
  //     authors: [
  //       {
  //         type: { key: "/type/author_role" },
  //         author: { key: "/authors/OL30765A" },
  //       },
  //     ],
  //     key: "/works/OL24315548W",
  //     covers: [13663824],
  //     latest_revision: 3,
  //     revision: 3,
  //     created: { type: "/type/datetime", value: "2021-04-05T11:27:09.504702" },
  //     last_modified: {
  //       type: "/type/datetime",
  //       value: "2023-03-19T14:31:15.248212",
  //     },
  //   },
  //   {
  //     type: { key: "/type/work" },
  //     title: "Percy Jackson and the Olympians",
  //     authors: [
  //       {
  //         type: { key: "/type/author_role" },
  //         author: { key: "/authors/OL12204535A" },
  //       },
  //     ],
  //     key: "/works/OL34025404W",
  //     latest_revision: 1,
  //     revision: 1,
  //     created: { type: "/type/datetime", value: "2023-01-17T05:03:22.356967" },
  //     last_modified: {
  //       type: "/type/datetime",
  //       value: "2023-01-17T05:03:22.356967",
  //     },
  //   },
  //   {
  //     type: { key: "/type/work" },
  //     title:
  //       "Percy Jackson and the Olympians 5 Book Paperback Boxed Set (w/poster)",
  //     authors: [
  //       {
  //         type: { key: "/type/author_role" },
  //         author: { key: "/authors/OL30765A" },
  //       },
  //       {
  //         type: { key: "/type/author_role" },
  //         author: { key: "/authors/OL2626463A" },
  //       },
  //     ],
  //     key: "/works/OL28890325W",
  //     covers: [13167686],
  //     latest_revision: 3,
  //     revision: 3,
  //     created: { type: "/type/datetime", value: "2022-09-19T01:58:28.427182" },
  //     last_modified: {
  //       type: "/type/datetime",
  //       value: "2023-01-31T06:34:12.328753",
  //     },
  //   },
  // ];

  return (
    <div className="grid grid-cols-12 grid-rows-2 flex-grow min-w-full gap-2">
      {data.map((el, index) => {
        console.log(
          el.covers
            ? `https://covers.openlibrary.org/b/isbn/${el.covers[0]}-L.jpg`
            : "https://placehold.co/600x400"
        );
        return (
          <>
            {index === 0 && (
              <div
                key={el.key}
                className="bg-yellow-500 rounded-xl col-span-4 row-span-2 p-4"
              >
                <div className="flex">
                  <p className="px-2 rounded-full border border-white text-white font-weight-bold text-sm mb-6">
                    {el.title.toUpperCase()}
                  </p>
                </div>
                <div className="h-1/2 relative">
                  {el.covers && (
                    <Image
                      alt={el.title + ".jpg"}
                      // src={`https://covers.openlibrary.org/b/isbn/${el?.covers[0]}-L.jpg`}
                      src={`https://covers.openlibrary.org/b/id/${el.covers[0]}-L.jpg`}
                      layout="fill"
                      objectFit="cov"
                      blurDataURL="https://covers.openlibrary.org/b/id/240727-S.jpg"
                      placeholder="blur"
                      className="rounded-lg"
                    />
                  )}
                  {!el.covers && (
                    <Image
                      alt={el.title + ".jpg"}
                      // src={`https://covers.openlibrary.org/b/isbn/${el?.covers[0]}-L.jpg`}
                      src={bookPlaceholder}
                      width={600}
                      height={400}
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  )}
                </div>
              </div>
            )}

            {index === 1 && (
              <div className="bg-cyan-700 rounded-xl col-span-8"></div>
            )}

            {index === 2 && (
              <div className="bg-yellow-800 rounded-xl col-span-8"></div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Body;
