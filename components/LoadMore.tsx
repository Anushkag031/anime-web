"use client"; //hooks are not supported in server side rendering
import Image from "next/image";
import { useInView } from "react-intersection-observer";

function LoadMore() {
  const { ref, inView } = useInView(); //eliminates the need of next button, it will load more data when the user reaches the end of the page

  return (
    <>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {" "}
          {/* we will know when scroll , i.e through ref */}
          <Image //loader
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}
export default LoadMore;
