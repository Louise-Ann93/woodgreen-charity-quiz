import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BIG Break Quiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="BIG BREAK for Pets Quiz 🐶" />
        <hr />
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
