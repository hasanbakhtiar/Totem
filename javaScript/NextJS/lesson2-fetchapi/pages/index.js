import unfetch from "isomorphic-unfetch";
import Layout from "../components/layout";
import Link from "next/Link";
import slug from "slug";

const index = ({ characters }) => {
  return (
    <Layout>
      <h1>Rick and Morty </h1>
      {characters.results.map((character) => (
        <li
          key={character.id}
          
        >
          <Link href="/character/[slug]" as={`/character/${slug(character.name)}-${character.id}`}>
            <a> {character.name}</a>
          </Link>
        </li>
      ))}
    </Layout>
  );
};

export async function getStaticProps() {
  // data fetch
  const data = await unfetch("https://rickandmortyapi.com/api/character");
  const characters = await data.json();
  console.log(characters);
  return {
    props: {
      characters,
    },
  };
}

export default index;
