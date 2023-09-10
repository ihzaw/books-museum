import Image from "next/image";
import bookPlaceholder from "../../assets/placeholder_book.jpg";

const Body = (props) => {
  const { data } = props;

  return (
    <div className="grid grid-cols-12 grid-rows-2 flex-grow min-w-full gap-2 overflow-hidden">
      {data.map((el, index) => {
        return (
          <>
            {index === 0 && (
              <div
                key={el.key}
                className="bg-yellow-500 rounded-xl col-span-4 row-span-2 p-4"
              >
                {/* Card header */}
                <div className="flex">
                  <p className="px-2 rounded-full border border-white text-white font-weight-bold text-sm mb-6">
                    {el.title.toUpperCase()}
                  </p>
                </div>

                {/* Card body */}
                <div className="h-3/4 relative mb-3">
                  {el.covers && (
                    <Image
                      alt={el.title + ".jpg"}
                      // src={`https://covers.openlibrary.org/b/isbn/${el?.covers[0]}-L.jpg`}
                      src={`https://covers.openlibrary.org/b/id/${el.covers[0]}-L.jpg`}
                      layout="fill"
                      objectFit="cover"
                      blurDataURL="https://covers.openlibrary.org/b/id/240727-S.jpg"
                      placeholder="blur"
                      className="rounded-lg"
                    />
                  )}
                  {!el.covers && (
                    <Image
                      alt={el.title + ".jpg"}
                      src={bookPlaceholder}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  )}
                </div>

                {/* Card Footer */}
                <div className="border-t-2 border-t-yellow-800 flex flex-wrap gap-1">
                  {el.subjects.map((el, index) => {
                    if (index < 3) {
                      return (
                        <div
                          key={el.key}
                          className="text-white bg-gray-700 text-xs rounded-full p-1"
                        >
                          {el}
                        </div>
                      );
                    }
                  })}
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
