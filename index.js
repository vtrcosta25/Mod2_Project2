const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  {
    id: 1,
    nome: "Ninetales",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
    descricao:
      "Diz-se que vive 1.000 anos, e cada uma de suas caudas é carregada com poderes sobrenaturais.",
    altura: "1.1 m",
    peso: "19.9kg",
    categoria: "Fox",
    habilidade: "Flash Fire",
  },

  {
    id: 2,
    nome: "Totodile",
    tipo: "Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png",
    descricao:
      "Apesar da pequenez de seu corpo, as mandíbulas de Totodile são muito poderosas. Embora o Pokémon possa pensar que está apenas beliscando de brincadeira, sua mordida tem poder suficiente para causar ferimentos graves.",
    altura: "0.6 m",
    peso: "9.5kg",
    categoria: "Big Jaw",
    habilidade: "Torrent",
  },

  {
    id: 3,
    nome: "Cyndaquil",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png",
    descricao:
      "Cyndaquil se protege acendendo as chamas em suas costas. As chamas são vigorosas se o Pokémon estiver com raiva. No entanto, se estiver cansado, as chamas crepitam irregularmente com combustão incompleta.",
    altura: "0.5 m",
    peso: "7.9kg",
    categoria: "Fire Mouse",
    habilidade: "Blaze",
  },

  {
    id: 4,
    nome: "Pikachu",
    tipo: "Eletric",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    descricao:
      "Pikachu que pode gerar eletricidade poderosa tem bolsas nas bochechas que são extra macias e super elásticas.",
    altura: "0.6m",
    peso: "6.0kg",
    categoria: "Mouse",
    habilidade: "Static",
  },
];

let pokemon = undefined;

// Rotas
app.get("/", (req, res) => {
  // pokemon = undefined;
  res.render("index", { pokedex, pokemon });
});

app.post("/create", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  res.redirect("/");
});

app.get("/detalhes/:id", (req, res) => {
  const id = +req.params.id;
  pokemon = pokedex.find((pokemon) => pokemon.id === id);
  res.redirect("/");
}), 

app.post("/update/:id", (req, res) => {
  const id = +req.params.id - 1;
  // pokemon = pokedex.find((pokemon) => pokemon.id === id);
  const newPokemon = req.body
  newPokemon.id = id + 1
  pokedex[id] = newPokemon;
  pokemon = undefined;
  res.redirect("/");
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);