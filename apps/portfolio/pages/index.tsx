import { InferGetStaticPropsType, NextPage } from "next";
import { Layout } from "ui";
import { getUser } from "../lib/user";
import { SWRConfig } from "swr";
import { ContainerCards } from "../components/ContainerCards";
import { User } from "../components/User";

type Page = NextPage<InferGetStaticPropsType<typeof getStaticProps>>;

const Home: Page = ({ fallback, user }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Layout>
        <User />
        <ContainerCards />
      </Layout>
    </SWRConfig>
  );
};

export const getStaticProps = async () => {
  const user = await getUser();

  return {
    props: {
      user,
      fallback: {
        user,
      },
    },
  };
};

export default Home;
