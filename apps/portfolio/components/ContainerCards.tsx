import useSWR from "swr";
import { getUser } from "../lib/user";
import { Card } from "./Card";

export const ContainerCards = () => {
  const { data } = useSWR("user", getUser);

  return (
    <>
      <h2>Projects:</h2>
      <ul className="mt-2 grid w-80 grid-cols-none grid-rows-2 gap-5 text-center md:w-96 lg:w-auto lg:grid-cols-2 lg:grid-rows-none ">
        {data?.repos.map((repo) => (
          <Card key={repo.url} {...repo} />
        ))}
      </ul>
    </>
  );
};
