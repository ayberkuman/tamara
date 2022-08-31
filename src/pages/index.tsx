import { Catalogue } from "@components/Catalogue";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { ProductDetail } from "@components/ProductDetail";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lexir Frontend Assessment!</title>
      </Head>
      <main>
        <Header />
        <section className="flex flex-col md:flex-row justify-between p-9 max-w-[1280px] m-auto">
          <ProductDetail category={["gin", "vodka"]} />
          <Catalogue />
        </section>
        <footer className="bg-lightBlack mt-4">
          <Footer />
        </footer>
      </main>
    </div>
  );
}
