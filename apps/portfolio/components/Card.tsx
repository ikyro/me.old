import Image from "next/image";
import { Text } from "./Text";
import { Repository } from "../graphql/query";

export const Card = ({
  createdAt,
  homepageUrl,
  name,
  updatedAt,
  url,
}: Repository) => {
  return (
    <li className="relative rounded-sm bg-white p-2 text-black">
      <h3>
        <a
          href={url}
          target="_blanck"
          rel="noopener"
          className="text-lg uppercase"
        >
          {name}
        </a>
      </h3>
      <Text className="left-2" date={new Date(createdAt)}>
        Created At:
      </Text>
      <Text className="right-2" date={new Date(updatedAt)}>
        Updated At:
      </Text>
      <Image
        src={`/${name}.png`}
        alt={`preview from ${homepageUrl}`}
        width={450}
        height={280}
      />
    </li>
  );
};
