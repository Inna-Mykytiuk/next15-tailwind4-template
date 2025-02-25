import Image from "next/image";

export default function Home() {
  return (
    <section className="py-20">
      <div className="container h-full">
        <div className=" fle flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-blue-500 mb-8 text-center">
            Hello world!
          </h1>
          <div className="flex items-center justify-between">
            <Image
              src="/images/promo.jpeg"
              alt="Logo"
              width={400}
              height={400}
              priority
              className="w-[400px] h-auto"
            />
            <div className="bg-[url('/images/promo.jpeg')] bg-center bg-no-repeat bg-cover w-[400px] h-[440px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
