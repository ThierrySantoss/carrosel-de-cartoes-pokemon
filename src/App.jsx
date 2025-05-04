import "./App.css";
import ImagemPokebola from "./assets/pokebola.png";
import seta from "./assets/seta.png";
import "./assets/fundo-site.png";
import { useAllPokemons } from "./hook/useAllPokemons/useAllPokemons";
import { useState } from "react";
import { MyBuntton } from "./components/MyButton/MyButton";

function App() {
  const [id, setId] = useState(0);
  const pokemons = useAllPokemons();

  function btnAvancar() {
    setId((prevId) => (prevId < pokemons.length - 1 ? id + 1 : id));
  }

  function btnVoltar() {
    setId((prevId) => (prevId > 0 ? id - 1 : id));
  }

  return (
    <>
      <header className="flex items-center justify-center gap-4 pt-14">
        <img className="size-7" src={ImagemPokebola} alt="Pokebola" />
        <h1 className="text-5xl text-[#f1ecff]">MapaDev Week</h1>
      </header>

      <main className="my-16 flex items-center justify-center gap-20 max-[650px]:gap-10 max-[650px]:px-4 max-[500px]:gap-2.5">
        <MyBuntton
          disabled={id === 0}
          onClick={btnVoltar}
          className="rotate-180"
        >
          <img
            className="max-[500px]:h-5 max-[500px]:w-5"
            src={seta}
            alt="seta voltar"
          />
        </MyBuntton>

        <ul className="h-[520px] w-80 max-[500px]:h-[480px]">
          {pokemons.length > 0 && (
            <li
              className="flex h-full flex-col justify-between rounded-2xl bg-no-repeat p-3 shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] transition-all duration-200 ease-in-out"
              style={{ backgroundImage: `url(${pokemons[id].imagemDeFundo})` }}
            >
              <div className="flex items-center justify-between rounded-t-2xl bg-[#b3b1b9b3] px-2.5 py-2">
                <h2 className="text-2xl font-bold text-[#f1ecff] max-[500px]:text-[18px]">
                  {pokemons[id].nome}
                </h2>
                <span className="rounded-3xl bg-[#333] px-2.5 py-1.5 text-[#f1ecff] max-[500px]:text-[14px]">
                  HP: {pokemons[id].hp}
                </span>
              </div>

              <div className="flex justify-center">
                <img
                  className="max-h-72 max-w-full p-5 max-[500px]:max-h-60"
                  src={pokemons[id].imagem}
                  alt={pokemons[id].nome}
                />
              </div>

              <div className="rounded-b-2xl bg-[#ffffffcc]">
                <h3 className="bg-[#333] p-3 text-[15px] text-[#f1ecff]">
                  Descrição:
                </h3>
                <p className="max-h-28 overflow-y-auto p-3 text-justify text-[14px]">
                  {pokemons[id].descricao}
                </p>
              </div>
            </li>
          )}
        </ul>

        <MyBuntton disabled={id === pokemons.length - 1} onClick={btnAvancar}>
          <img
            className="max-[500px]:h-5 max-[500px]:w-5"
            src={seta}
            alt="seta voltar"
          />
        </MyBuntton>
      </main>
    </>
  );
}

export default App;
