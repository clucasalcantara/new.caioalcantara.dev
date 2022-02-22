import { MediumService } from "../services";
import Head from "next/head";

import { Layout, CardSection } from "../components";

type HomeProps = {
  posts: any[];
};

const Home = ({ posts }: HomeProps) => {
  return (
    <Layout>
      <CardSection title="Last posts" cards={posts} />
      {/* <CardSection title="Projects" cards={posts} /> */}
    </Layout>
  );
};

export async function getServerSideProps() {
  const { items } = await MediumService.getPosts("clucasalcantara");

  return {
    props: {
      posts: items,
    },
  };
}

export default Home;
