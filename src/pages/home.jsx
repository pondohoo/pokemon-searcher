import Search from '../components/Search'
import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonSimple from "../components/PokemonSimple";
import LoadingPages from "../components/LoadingPages";
import PokemonData from '../components/PokemonData';
import { Container, Row, Col, Card } from "react-bootstrap";


export default function HomePage() {
    const [pokemon, setPokemon] = useState('');
    const [dex, setDex] = useState([])
    const [url, setUrl] = useState(
       "https://pokeapi.co/api/v2/pokemon"
    );
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [loading, setLoading] = useState(false);






    
    useEffect(() => {
        setLoading(true);
        let cancel
        axios.get(url,{cancelToken: new axios.CancelToken((c) => (cancel = c))}).then(response=>{
            setLoading(false);
            setNextPageUrl(response.data.next);
            setPrevPageUrl(response.data.previous);
            getAllPokemon(response.data.results)
            
        })
        return() => cancel()
    },[url]);

    const getPokemon = async(query) => {
        setLoading(true)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
        
        setPokemon(response.data)
        setLoading(false);
    }
    const getAllPokemon = async(response)=> {
        response.map(async(entry)=>
        {
            const result= await axios.get(entry.url)
            setDex(state=>{
                state=[...state, result.data]
                return state
            })
            console.log(dex);

        })
    }

    


    function gotoNextPage() {
      setUrl(nextPageUrl);
      setDex([]);
    }
    function gotoPrevPage() {
      setUrl(prevPageUrl);
      setDex([]);
    }

    if (loading) return "Loading...";
    
    return (
      <div>
        <Search getPokemon={getPokemon} />
        {!loading && pokemon ? (
          <PokemonData
            name={pokemon.name}
            sprite={pokemon.sprites.front_default}
            shiny={pokemon.sprites.front_shiny}
            abilities={pokemon.abilities}
            stats={pokemon.stats}
            types={pokemon.types}
          />
        ) : null}
        {loading ? (
          "Loading..."
        ) : (
          <Row xs={5}>
            {dex.map((entry) => (
              <Col xs={12} md={3}>
                <PokemonSimple
                  name={entry.name}
                  sprite={entry.sprites.front_default}
                  types={entry.types}
                />
              </Col>
            ))}
          </Row>
        )}

        <LoadingPages className={"w-100"}
          gotoNextPage={nextPageUrl ? gotoNextPage : null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        />
      </div>
    );

}
 