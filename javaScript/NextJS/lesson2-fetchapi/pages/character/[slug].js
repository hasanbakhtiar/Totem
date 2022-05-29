import Layout from "../../components/layout";
import unfetch from "isomorphic-unfetch";
import slug from "slug";




const CharacterDetails = ({character})=>{
    return(
        <Layout>
            <div>{character.name}</div>
            <figure>
                <img src={character.image} alt={character.name} />
            </figure>
        </Layout>
    )
}

export async function getStaticPaths(){
    const data = await unfetch("https://rickandmortyapi.com/api/character/")
    const characters = await data.json();
    return{
        paths: characters.results.map(character => {
            return {params: {slug: `${slug(character.name)}-${character.id}`}}
        }),
        fallback: false 
    }
}


export  async function getStaticProps({params}){
    const id = params.slug.split('-').slice(-1)[0]
    const data = await unfetch("https://rickandmortyapi.com/api/character/"+id)
    const character = await data.json();
    return {
        props:{
            character
        }
    }
}

export default CharacterDetails