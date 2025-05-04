import { useState, useEffect } from "react";

export function useAllPokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons([
      {
        nome: "Pikachu",
        hp: 300,
        imagem: "./src/assets/pikachu.png",
        descricao:
          "Pikachu armazena eletricidade em suas bochechas e a libera em choques poderosos quando está irritado ou em batalha. Adora brincar e é extremamente leal ao seu treinador. Seu charme e energia contagiante fazem dele um dos Pokémon mais amados do mundo.",
        imagemDeFundo: "./src/assets/fundo-card-1.jpg",
      },
      {
        nome: "Charizard",
        hp: 800,
        imagem: "./src/assets/charizard.png",
        descricao:
          "Com asas poderosas e um sopro incandescente, Charizard é um Pokémon feroz que cospe fogo quente o bastante para derreter rochas. Ele voa em busca de adversários fortes e nunca recua de uma batalha. Quando está realmente enfurecido, as chamas na ponta de sua cauda queimam em azul.",
        imagemDeFundo: "./src/assets/fundo-card-2.jpg",
      },
      {
        nome: "Mewtwo",
        hp: 1200,
        imagem: "./src/assets/mewtwo.png",
        descricao:
          "Criado por engenharia genética a partir do DNA de Mew, Mewtwo é um Pokémon artificial com poderes psíquicos avassaladores. Sua inteligência e força são incomparáveis, tornando-o um dos Pokémon mais temidos. Raramente demonstra emoção e age com frieza estratégica em combate.",
        imagemDeFundo: "./src/assets/fundo-card-3.jpg",
      },
    ]);
  }, []);

  return pokemons;
}
