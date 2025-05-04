import { useState, useEffect } from "react";
import pikachuImg from "../../assets/pikachu.png"
import charizardImg from "../../assets/charizard.png"
import mewTwoImg from "../../assets/mewtwo.png"
import fundoCard1 from "../../assets/fundo-card-1.jpg"
import fundoCard2 from "../../assets/fundo-card-2.jpg"
import fundoCard3 from "../../assets/fundo-card-3.jpg"

export function useAllPokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons([
      {
        nome: "Pikachu",
        hp: 300,
        imagem: pikachuImg,
        descricao:
          "Pikachu armazena eletricidade em suas bochechas e a libera em choques poderosos quando está irritado ou em batalha. Adora brincar e é extremamente leal ao seu treinador. Seu charme e energia contagiante fazem dele um dos Pokémon mais amados do mundo.",
        imagemDeFundo: fundoCard1,
      },
      {
        nome: "Charizard",
        hp: 800,
        imagem: charizardImg,
        descricao:
          "Com asas poderosas e um sopro incandescente, Charizard é um Pokémon feroz que cospe fogo quente o bastante para derreter rochas. Ele voa em busca de adversários fortes e nunca recua de uma batalha. Quando está realmente enfurecido, as chamas na ponta de sua cauda queimam em azul.",
        imagemDeFundo: fundoCard2,
      },
      {
        nome: "Mewtwo",
        hp: 1200,
        imagem: mewTwoImg,
        descricao:
          "Criado por engenharia genética a partir do DNA de Mew, Mewtwo é um Pokémon artificial com poderes psíquicos avassaladores. Sua inteligência e força são incomparáveis, tornando-o um dos Pokémon mais temidos. Raramente demonstra emoção e age com frieza estratégica em combate.",
        imagemDeFundo: fundoCard3,
      },
    ]);
  }, []);

  return pokemons;
}
