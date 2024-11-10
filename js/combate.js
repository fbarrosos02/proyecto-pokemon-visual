const pokemonsespalda = [
    { id: 1, name: "Bulbasaur", img: "https://play.pokemonshowdown.com/sprites/xyani-back/bulbasaur.gif", types: ["Grass", "Poison"], attack: 49, defense: 49, hp: 45 },
    { id: 2, name: "Ivysaur", img: "https://play.pokemonshowdown.com/sprites/xyani-back/ivysaur.gif", types: ["Grass", "Poison"], attack: 62, defense: 63, hp: 60 },
    { id: 3, name: "Venusaur", img: "https://play.pokemonshowdown.com/sprites/xyani-back/venusaur.gif", types: ["Grass", "Poison"], attack: 82, defense: 83, hp: 80 },
    { id: 4, name: "Charmander", img: "https://play.pokemonshowdown.com/sprites/xyani-back/charmander.gif", types: ["Fire"], attack: 52, defense: 43, hp: 39 },
    { id: 5, name: "Charmeleon", img: "https://play.pokemonshowdown.com/sprites/xyani-back/charmeleon.gif", types: ["Fire"], attack: 64, defense: 58, hp: 58 },
    { id: 6, name: "Charizard", img: "https://play.pokemonshowdown.com/sprites/xyani-back/charizard.gif", types: ["Fire", "Flying"], attack: 84, defense: 78, hp: 78 },
    { id: 7, name: "Squirtle", img: "https://play.pokemonshowdown.com/sprites/xyani-back/squirtle.gif", types: ["Water"], attack: 48, defense: 65, hp: 44 },
    { id: 8, name: "Wartortle", img: "https://play.pokemonshowdown.com/sprites/xyani-back/wartortle.gif", types: ["Water"], attack: 63, defense: 80, hp: 59 },
    { id: 9, name: "Blastoise", img: "https://play.pokemonshowdown.com/sprites/xyani-back/blastoise.gif", types: ["Water"], attack: 83, defense: 100, hp: 79 },
    { id: 10, name: "Caterpie", img: "https://play.pokemonshowdown.com/sprites/xyani-back/caterpie.gif", types: ["Bug"], attack: 30, defense: 35, hp: 45 },
    { id: 11, name: "Metapod", img: "https://play.pokemonshowdown.com/sprites/xyani-back/metapod.gif", types: ["Bug"], attack: 20, defense: 55, hp: 50 },
    { id: 12, name: "Butterfree", img: "https://play.pokemonshowdown.com/sprites/xyani-back/butterfree.gif", types: ["Bug", "Flying"], attack: 45, defense: 50, hp: 60 },
    { id: 13, name: "Weedle", img: "https://play.pokemonshowdown.com/sprites/xyani-back/weedle.gif", types: ["Bug", "Poison"], attack: 35, defense: 30, hp: 40 },
    { id: 14, name: "Kakuna", img: "https://play.pokemonshowdown.com/sprites/xyani-back/kakuna.gif", types: ["Bug", "Poison"], attack: 25, defense: 50, hp: 45 },
    { id: 15, name: "Beedrill", img: "https://play.pokemonshowdown.com/sprites/xyani-back/beedrill.gif", types: ["Bug", "Poison"], attack: 90, defense: 40, hp: 65 },
    { id: 16, name: "Pidgey", img: "https://play.pokemonshowdown.com/sprites/xyani-back/pidgey.gif", types: ["Normal", "Flying"], attack: 45, defense: 40, hp: 40 },
    { id: 17, name: "Pidgeotto", img: "https://play.pokemonshowdown.com/sprites/xyani-back/pidgeotto.gif", types: ["Normal", "Flying"], attack: 60, defense: 55, hp: 63 },
    { id: 18, name: "Pidgeot", img: "https://play.pokemonshowdown.com/sprites/xyani-back/pidgeot.gif", types: ["Normal", "Flying"], attack: 80, defense: 75, hp: 83 },
    { id: 19, name: "Rattata", img: "https://play.pokemonshowdown.com/sprites/xyani-back/rattata.gif", types: ["Normal"], attack: 56, defense: 35, hp: 30 },
    { id: 20, name: "Raticate", img: "https://play.pokemonshowdown.com/sprites/xyani-back/raticate.gif", types: ["Normal"], attack: 81, defense: 60, hp: 55 },
    { id: 21, name: "Spearow", img: "https://play.pokemonshowdown.com/sprites/xyani-back/spearow.gif", types: ["Normal", "Flying"], attack: 60, defense: 30, hp: 40 },
    { id: 22, name: "Fearow", img: "https://play.pokemonshowdown.com/sprites/xyani-back/fearow.gif", types: ["Normal", "Flying"], attack: 90, defense: 65, hp: 65 },
    { id: 23, name: "Ekans", img: "https://play.pokemonshowdown.com/sprites/xyani-back/ekans.gif", types: ["Poison"], attack: 60, defense: 44, hp: 35 },
    { id: 24, name: "Arbok", img: "https://play.pokemonshowdown.com/sprites/xyani-back/arbok.gif", types: ["Poison"], attack: 85, defense: 69, hp: 60 },
    { id: 25, name: "Pikachu", img: "https://play.pokemonshowdown.com/sprites/xyani-back/pikachu.gif", types: ["Electric"], attack: 55, defense: 40, hp: 35 },
    { id: 26, name: "Raichu", img: "https://play.pokemonshowdown.com/sprites/xyani-back/raichu.gif", types: ["Electric"], attack: 90, defense: 55, hp: 60 },
    { id: 27, name: "Sandshrew", img: "https://play.pokemonshowdown.com/sprites/xyani-back/sandshrew.gif", types: ["Ground"], attack: 75, defense: 85, hp: 50 },
    { id: 28, name: "Sandslash", img: "https://play.pokemonshowdown.com/sprites/xyani-back/sandslash.gif", types: ["Ground"], attack: 100, defense: 110, hp: 75 },
    { id: 29, name: "Nidoran♀", img: "https://play.pokemonshowdown.com/sprites/xyani-back/nidoranf.gif", types: ["Poison"], attack: 47, defense: 52, hp: 55 },
    { id: 30, name: "Nidorina", img: "https://play.pokemonshowdown.com/sprites/xyani-back/nidorina.gif", types: ["Poison"], attack: 62, defense: 67, hp: 70 },
    { id: 31, name: "Nidoqueen", img: "https://play.pokemonshowdown.com/sprites/xyani-back/nidoqueen.gif", types: ["Poison", "Ground"], attack: 92, defense: 87, hp: 90 },
    { id: 32, name: "Nidoran♂", img: "https://play.pokemonshowdown.com/sprites/xyani-back/nidoranm.gif", types: ["Poison"], attack: 57, defense: 40, hp: 46 },
    { id: 33, name: "Nidorino", img: "https://play.pokemonshowdown.com/sprites/xyani-back/nidorino.gif", types: ["Poison"], attack: 72, defense: 57, hp: 61 },
    { id: 34, name: "Nidoking", img: "https://play.pokemonshowdown.com/sprites/xyani-back/nidoking.gif", types: ["Poison", "Ground"], attack: 102, defense: 77, hp: 81 },
    { id: 35, name: "Clefairy", img: "https://play.pokemonshowdown.com/sprites/xyani-back/clefairy.gif", types: ["Fairy"], attack: 45, defense: 48, hp: 70 },
    { id: 36, name: "Clefable", img: "https://play.pokemonshowdown.com/sprites/xyani-back/clefable.gif", types: ["Fairy"], attack: 70, defense: 73, hp: 95 },
    { id: 37, name: "Vulpix", img: "https://play.pokemonshowdown.com/sprites/xyani-back/vulpix.gif", types: ["Fire"], attack: 41, defense: 40, hp: 38 },
    { id: 38, name: "Ninetales", img: "https://play.pokemonshowdown.com/sprites/xyani-back/ninetales.gif", types: ["Fire"], attack: 76, defense: 75, hp: 73 },
    { id: 39, name: "Jigglypuff", img: "https://play.pokemonshowdown.com/sprites/xyani-back/jigglypuff.gif", types: ["Fairy", "Normal"], attack: 45, defense: 20, hp: 115 },
    { id: 40, name: "Wigglytuff", img: "https://play.pokemonshowdown.com/sprites/xyani-back/wigglytuff.gif", types: ["Fairy", "Normal"], attack: 70, defense: 45, hp: 140 },
    { id: 41, name: "Zubat", img: "https://play.pokemonshowdown.com/sprites/xyani-back/zubat.gif", types: ["Poison", "Flying"], attack: 45, defense: 35, hp: 40 },
    { id: 42, name: "Golbat", img: "https://play.pokemonshowdown.com/sprites/xyani-back/golbat.gif", types: ["Poison", "Flying"], attack: 80, defense: 70, hp: 75 },
    { id: 43, name: "Oddish", img: "https://play.pokemonshowdown.com/sprites/xyani-back/oddish.gif", types: ["Grass", "Poison"], attack: 50, defense: 55, hp: 45 },
    { id: 44, name: "Gloom", img: "https://play.pokemonshowdown.com/sprites/xyani-back/gloom.gif", types: ["Grass", "Poison"], attack: 65, defense: 70, hp: 60 },
    { id: 45, name: "Vileplume", img: "https://play.pokemonshowdown.com/sprites/xyani-back/vileplume.gif", types: ["Grass", "Poison"], attack: 80, defense: 70, hp: 75 },
    { id: 46, name: "Paras", img: "https://play.pokemonshowdown.com/sprites/xyani-back/paras.gif", types: ["Bug", "Grass"], attack: 70, defense: 55, hp: 35 },
    { id: 47, name: "Parasect", img: "https://play.pokemonshowdown.com/sprites/xyani-back/parasect.gif", types: ["Bug", "Grass"], attack: 95, defense: 80, hp: 60 },
    { id: 48, name: "Venonat", img: "https://play.pokemonshowdown.com/sprites/xyani-back/venonat.gif", types: ["Bug", "Poison"], attack: 60, defense: 55, hp: 60 },
    { id: 49, name: "Venomoth", img: "https://play.pokemonshowdown.com/sprites/xyani-back/venomoth.gif", types: ["Bug", "Poison"], attack: 65, defense: 60, hp: 70 },
    { id: 50, name: "Diglett", img: "https://play.pokemonshowdown.com/sprites/xyani-back/diglett.gif", types: ["Ground"], attack: 55, defense: 25, hp: 10 },
    { id: 51, name: "Dugtrio", img: "https://play.pokemonshowdown.com/sprites/xyani-back/dugtrio.gif", types: ["Ground"], attack: 80, defense: 50, hp: 35 },
    { id: 52, name: "Meowth", img: "https://play.pokemonshowdown.com/sprites/xyani-back/meowth.gif", types: ["Normal"], attack: 45, defense: 35, hp: 40 },
    { id: 53, name: "Persian", img: "https://play.pokemonshowdown.com/sprites/xyani-back/persian.gif", types: ["Normal"], attack: 70, defense: 60, hp: 65 },
    { id: 54, name: "Psyduck", img: "https://play.pokemonshowdown.com/sprites/xyani-back/psyduck.gif", types: ["Water"], attack: 52, defense: 48, hp: 50 },
    { id: 55, name: "Golduck", img: "https://play.pokemonshowdown.com/sprites/xyani-back/golduck.gif", types: ["Water"], attack: 75, defense: 80, hp: 80 },
    { id: 56, name: "Mankey", img: "https://play.pokemonshowdown.com/sprites/xyani-back/mankey.gif", types: ["Fighting"], attack: 80, defense: 35, hp: 40 },
    { id: 57, name: "Primeape", img: "https://play.pokemonshowdown.com/sprites/xyani-back/primeape.gif", types: ["Fighting"], attack: 105, defense: 60, hp: 65 },
    { id: 58, name: "Growlithe", img: "https://play.pokemonshowdown.com/sprites/xyani-back/growlithe.gif", types: ["Fire"], attack: 70, defense: 45, hp: 55 },
    { id: 59, name: "Arcanine", img: "https://play.pokemonshowdown.com/sprites/xyani-back/arcanine.gif", types: ["Fire"], attack: 110, defense: 80, hp: 90 },
    { id: 60, name: "Poliwag", img: "https://play.pokemonshowdown.com/sprites/xyani-back/poliwag.gif", types: ["Water"], attack: 50, defense: 40, hp: 40 },
    { id: 61, name: "Poliwhirl", img: "https://play.pokemonshowdown.com/sprites/xyani-back/poliwhirl.gif", types: ["Water"], attack: 65, defense: 65, hp: 65 },
    { id: 62, name: "Politoed", img: "https://play.pokemonshowdown.com/sprites/xyani-back/politoed.gif", types: ["Water"], attack: 75, defense: 75, hp: 90 },
    { id: 63, name: "Abra", img: "https://play.pokemonshowdown.com/sprites/xyani-back/abra.gif", types: ["Psychic"], attack: 20, defense: 15, hp: 25 },
    { id: 64, name: "Kadabra", img: "https://play.pokemonshowdown.com/sprites/xyani-back/kadabra.gif", types: ["Psychic"], attack: 35, defense: 30, hp: 40 },
    { id: 65, name: "Alakazam", img: "https://play.pokemonshowdown.com/sprites/xyani-back/alakazam.gif", types: ["Psychic"], attack: 50, defense: 45, hp: 55 },
    { id: 66, name: "Machop", img: "https://play.pokemonshowdown.com/sprites/xyani-back/machop.gif", types: ["Fighting"], attack: 80, defense: 50, hp: 70 },
    { id: 67, name: "Machoke", img: "https://play.pokemonshowdown.com/sprites/xyani-back/machoke.gif", types: ["Fighting"], attack: 100, defense: 70, hp: 80 },
    { id: 68, name: "Machamp", img: "https://play.pokemonshowdown.com/sprites/xyani-back/machamp.gif", types: ["Fighting"], attack: 130, defense: 80, hp: 90 },
    { id: 69, name: "Bellsprout", img: "https://play.pokemonshowdown.com/sprites/xyani-back/bellsprout.gif", types: ["Grass", "Poison"], attack: 75, defense: 35, hp: 50 },
    { id: 70, name: "Weepinbell", img: "https://play.pokemonshowdown.com/sprites/xyani-back/weepinbell.gif", types: ["Grass", "Poison"], attack: 90, defense: 50, hp: 65 },
    { id: 71, name: "Victreebel", img: "https://play.pokemonshowdown.com/sprites/xyani-back/victreebel.gif", types: ["Grass", "Poison"], attack: 105, defense: 65, hp: 80 },
    { id: 72, name: "Tentacool", img: "https://play.pokemonshowdown.com/sprites/xyani-back/tentacool.gif", types: ["Water", "Poison"], attack: 40, defense: 35, hp: 40 },
    { id: 73, name: "Tentacruel", img: "https://play.pokemonshowdown.com/sprites/xyani-back/tentacruel.gif", types: ["Water", "Poison"], attack: 70, defense: 65, hp: 80 },
    { id: 74, name: "Geodude", img: "https://play.pokemonshowdown.com/sprites/xyani-back/geodude.gif", types: ["Rock", "Ground"], attack: 80, defense: 100, hp: 40 },
    { id: 75, name: "Graveler", img: "https://play.pokemonshowdown.com/sprites/xyani-back/graveler.gif", types: ["Rock", "Ground"], attack: 95, defense: 115, hp: 55 },
    { id: 76, name: "Golem", img: "https://play.pokemonshowdown.com/sprites/xyani-back/golem.gif", types: ["Rock", "Ground"], attack: 110, defense: 130, hp: 80 },
    { id: 77, name: "Ponyta", img: "https://play.pokemonshowdown.com/sprites/xyani-back/ponyta.gif", types: ["Fire"], attack: 65, defense: 40, hp: 50 },
    { id: 78, name: "Rapidash", img: "https://play.pokemonshowdown.com/sprites/xyani-back/rapidash.gif", types: ["Fire"], attack: 100, defense: 70, hp: 65 },
    { id: 79, name: "Slowpoke", img: "https://play.pokemonshowdown.com/sprites/xyani-back/slowpoke.gif", types: ["Water", "Psychic"], attack: 65, defense: 65, hp: 90 },
    { id: 80, name: "Slowbro", img: "https://play.pokemonshowdown.com/sprites/xyani-back/slowbro.gif", types: ["Water", "Psychic"], attack: 75, defense: 110, hp: 95 },
    { id: 81, name: "Magnemite", img: "https://play.pokemonshowdown.com/sprites/xyani-back/magnemite.gif", types: ["Electric", "Steel"], attack: 35, defense: 70, hp: 25 },
    { id: 82, name: "Magneton", img: "https://play.pokemonshowdown.com/sprites/xyani-back/magneton.gif", types: ["Electric", "Steel"], attack: 60, defense: 95, hp: 50 },
    { id: 83, name: "Farfetch'd", img: "https://play.pokemonshowdown.com/sprites/xyani-back/farfetchd.gif", types: ["Normal", "Flying"], attack: 65, defense: 55, hp: 52 },
    { id: 84, name: "Doduo", img: "https://play.pokemonshowdown.com/sprites/xyani-back/doduo.gif", types: ["Normal", "Flying"], attack: 85, defense: 45, hp: 35 },
    { id: 85, name: "Dodrio", img: "https://play.pokemonshowdown.com/sprites/xyani-back/dodrio.gif", types: ["Normal", "Flying"], attack: 110, defense: 70, hp: 60 },
    { id: 86, name: "Seel", img: "https://play.pokemonshowdown.com/sprites/xyani-back/seel.gif", types: ["Water"], attack: 45, defense: 55, hp: 65 },
    { id: 87, name: "Dewgong", img: "https://play.pokemonshowdown.com/sprites/xyani-back/dewgong.gif", types: ["Water", "Ice"], attack: 70, defense: 80, hp: 90 },
    { id: 88, name: "Grimer", img: "https://play.pokemonshowdown.com/sprites/xyani-back/grimer.gif", types: ["Poison"], attack: 80, defense: 50, hp: 80 },
    { id: 89, name: "Muk", img: "https://play.pokemonshowdown.com/sprites/xyani-back/muk.gif", types: ["Poison"], attack: 105, defense: 75, hp: 105 },
    { id: 90, name: "Shellder", img: "https://play.pokemonshowdown.com/sprites/xyani-back/shellder.gif", types: ["Water"], attack: 40, defense: 100, hp: 30 },
    { id: 91, name: "Cloyster", img: "https://play.pokemonshowdown.com/sprites/xyani-back/cloyster.gif", types: ["Water", "Ice"], attack: 95, defense: 180, hp: 50 },
    { id: 92, name: "Gastly", img: "https://play.pokemonshowdown.com/sprites/xyani-back/gastly.gif", types: ["Ghost", "Poison"], attack: 35, defense: 30, hp: 30 },
    { id: 93, name: "Haunter", img: "https://play.pokemonshowdown.com/sprites/xyani-back/haunter.gif", types: ["Ghost", "Poison"], attack: 50, defense: 45, hp: 45 },
    { id: 94, name: "Gengar", img: "https://play.pokemonshowdown.com/sprites/xyani-back/gengar.gif", types: ["Ghost", "Poison"], attack: 65, defense: 60, hp: 60 },
    { id: 95, name: "Onix", img: "https://play.pokemonshowdown.com/sprites/xyani-back/onix.gif", types: ["Rock", "Ground"], attack: 45, defense: 160, hp: 35 },
    { id: 96, name: "Drowzee", img: "https://play.pokemonshowdown.com/sprites/xyani-back/drowzee.gif", types: ["Psychic"], attack: 48, defense: 45, hp: 60 },
    { id: 97, name: "Hypno", img: "https://play.pokemonshowdown.com/sprites/xyani-back/hypno.gif", types: ["Psychic"], attack: 73, defense: 70, hp: 85 },
    { id: 98, name: "Krabby", img: "https://play.pokemonshowdown.com/sprites/xyani-back/krabby.gif", types: ["Water"], attack: 105, defense: 90, hp: 30 },
    { id: 99, name: "Kingler", img: "https://play.pokemonshowdown.com/sprites/xyani-back/kingler.gif", types: ["Water"], attack: 130, defense: 115, hp: 55 },
    { id: 100, name: "Exeggcute", img: "https://play.pokemonshowdown.com/sprites/xyani-back/exeggcute.gif", types: ["Grass", "Psychic"], attack: 40, defense: 80, hp: 60 },
    { id: 101, name: "Exeggutor", img: "https://play.pokemonshowdown.com/sprites/xyani-back/exeggutor.gif", types: ["Grass", "Psychic"], attack: 60, defense: 75, hp: 95 },
    { id: 102, name: "Cubone", img: "https://play.pokemonshowdown.com/sprites/xyani-back/cubone.gif", types: ["Ground"], attack: 50, defense: 95, hp: 50 },
    { id: 103, name: "Marowak", img: "https://play.pokemonshowdown.com/sprites/xyani-back/marowak.gif", types: ["Ground"], attack: 80, defense: 110, hp: 60 },
    { id: 104, name: "Hitmonlee", img: "https://play.pokemonshowdown.com/sprites/xyani-back/hitmonlee.gif", types: ["Fighting"], attack: 120, defense: 53, hp: 50 },
    { id: 105, name: "Hitmonchan", img: "https://play.pokemonshowdown.com/sprites/xyani-back/hitmonchan.gif", types: ["Fighting"], attack: 105, defense: 79, hp: 50 },
    { id: 106, name: "Lickitung", img: "https://play.pokemonshowdown.com/sprites/xyani-back/lickitung.gif", types: ["Normal"], attack: 60, defense: 35, hp: 75 },
    { id: 107, name: "Koffing", img: "https://play.pokemonshowdown.com/sprites/xyani-back/koffing.gif", types: ["Poison"], attack: 60, defense: 65, hp: 40 },
    { id: 108, name: "Weezing", img: "https://play.pokemonshowdown.com/sprites/xyani-back/weezing.gif", types: ["Poison"], attack: 90, defense: 120, hp: 65 },
    { id: 109, name: "Rhyhorn", img: "https://play.pokemonshowdown.com/sprites/xyani-back/rhyhorn.gif", types: ["Rock", "Ground"], attack: 85, defense: 95, hp: 80 },
    { id: 110, name: "Rhydon", img: "https://play.pokemonshowdown.com/sprites/xyani-back/rhydon.gif", types: ["Rock", "Ground"], attack: 130, defense: 120, hp: 105 },
    { id: 111, name: "Chansey", img: "https://play.pokemonshowdown.com/sprites/xyani-back/chansey.gif", types: ["Normal"], attack: 5, defense: 5, hp: 250 },
    { id: 112, name: "Tangela", img: "https://play.pokemonshowdown.com/sprites/xyani-back/tangela.gif", types: ["Grass"], attack: 55, defense: 115, hp: 65 },
    { id: 113, name: "Kangaskhan", img: "https://play.pokemonshowdown.com/sprites/xyani-back/kangaskhan.gif", types: ["Normal"], attack: 95, defense: 80, hp: 105 },
    { id: 114, name: "Horsea", img: "https://play.pokemonshowdown.com/sprites/xyani-back/horsea.gif", types: ["Water"], attack: 40, defense: 35, hp: 30 },
    { id: 115, name: "Seadra", img: "https://play.pokemonshowdown.com/sprites/xyani-back/seadra.gif", types: ["Water"], attack: 65, defense: 95, hp: 55 },
    { id: 116, name: "Goldeen", img: "https://play.pokemonshowdown.com/sprites/xyani-back/goldeen.gif", types: ["Water"], attack: 67, defense: 60, hp: 45 },
    { id: 117, name: "Seaking", img: "https://play.pokemonshowdown.com/sprites/xyani-back/seaking.gif", types: ["Water"], attack: 92, defense: 65, hp: 80 },
    { id: 118, name: "Staryu", img: "https://play.pokemonshowdown.com/sprites/xyani-back/staryu.gif", types: ["Water"], attack: 50, defense: 45, hp: 30 },
    { id: 119, name: "Starmie", img: "https://play.pokemonshowdown.com/sprites/xyani-back/starmie.gif", types: ["Water", "Psychic"], attack: 75, defense: 85, hp: 60 },
    { id: 120, name: "Mr. Mime", img: "https://play.pokemonshowdown.com/sprites/xyani-back/mrmime.gif", types: ["Psychic", "Fairy"], attack: 45, defense: 65, hp: 40 },
    { id: 121, name: "Scyther", img: "https://play.pokemonshowdown.com/sprites/xyani-back/scyther.gif", types: ["Bug", "Flying"], attack: 110, defense: 80, hp: 70 },
    { id: 122, name: "Jynx", img: "https://play.pokemonshowdown.com/sprites/xyani-back/jynx.gif", types: ["Ice", "Psychic"], attack: 50, defense: 35, hp: 65 },
    { id: 123, name: "Electabuzz", img: "https://play.pokemonshowdown.com/sprites/xyani-back/electabuzz.gif", types: ["Electric"], attack: 95, defense: 57, hp: 65 },
    { id: 124, name: "Magmar", img: "https://play.pokemonshowdown.com/sprites/xyani-back/magmar.gif", types: ["Fire"], attack: 95, defense: 57, hp: 65 },
    { id: 125, name: "Pinsir", img: "https://play.pokemonshowdown.com/sprites/xyani-back/pinsir.gif", types: ["Bug"], attack: 125, defense: 100, hp: 65 },
    { id: 126, name: "Tauros", img: "https://play.pokemonshowdown.com/sprites/xyani-back/tauros.gif", types: ["Normal"], attack: 100, defense: 95, hp: 75 },
    { id: 127, name: "Magikarp", img: "https://play.pokemonshowdown.com/sprites/xyani-back/magikarp.gif", types: ["Water"], attack: 10, defense: 55, hp: 20 },
    { id: 128, name: "Gyarados", img: "https://play.pokemonshowdown.com/sprites/xyani-back/gyarados.gif", types: ["Water", "Flying"], attack: 125, defense: 79, hp: 95 },
    { id: 129, name: "Lapras", img: "https://play.pokemonshowdown.com/sprites/xyani-back/lapras.gif", types: ["Water", "Ice"], attack: 85, defense: 80, hp: 130 },
    { id: 130, name: "Ditto", img: "https://play.pokemonshowdown.com/sprites/xyani-back/ditto.gif", types: ["Normal"], attack: 48, defense: 48, hp: 48 },
    { id: 131, name: "Eevee", img: "https://play.pokemonshowdown.com/sprites/xyani-back/eevee.gif", types: ["Normal"], attack: 55, defense: 50, hp: 55 },
    { id: 132, name: "Vaporeon", img: "https://play.pokemonshowdown.com/sprites/xyani-back/vaporeon.gif", types: ["Water"], attack: 65, defense: 60, hp: 130 },
    { id: 133, name: "Jolteon", img: "https://play.pokemonshowdown.com/sprites/xyani-back/jolteon.gif", types: ["Electric"], attack: 65, defense: 60, hp: 65 },
    { id: 134, name: "Flareon", img: "https://play.pokemonshowdown.com/sprites/xyani-back/flareon.gif", types: ["Fire"], attack: 130, defense: 60, hp: 65 },
    { id: 135, name: "Porygon", img: "https://play.pokemonshowdown.com/sprites/xyani-back/porygon.gif", types: ["Normal"], attack: 60, defense: 70, hp: 65 },
    { id: 136, name: "Omanyte", img: "https://play.pokemonshowdown.com/sprites/xyani-back/omanyte.gif", types: ["Rock", "Water"], attack: 40, defense: 100, hp: 35 },
    { id: 137, name: "Omastar", img: "https://play.pokemonshowdown.com/sprites/xyani-back/omastar.gif", types: ["Rock", "Water"], attack: 60, defense: 125, hp: 70 },
    { id: 138, name: "Kabuto", img: "https://play.pokemonshowdown.com/sprites/xyani-back/kabuto.gif", types: ["Rock", "Water"], attack: 40, defense: 90, hp: 30 },
    { id: 139, name: "Kabutops", img: "https://play.pokemonshowdown.com/sprites/xyani-back/kabutops.gif", types: ["Rock", "Water"], attack: 115, defense: 105, hp: 60 },
    { id: 140, name: "Aerodactyl", img: "https://play.pokemonshowdown.com/sprites/xyani-back/aerodactyl.gif", types: ["Rock", "Flying"], attack: 105, defense: 65, hp: 80 },
    { id: 141, name: "Snorlax", img: "https://play.pokemonshowdown.com/sprites/xyani-back/snorlax.gif", types: ["Normal"], attack: 110, defense: 65, hp: 160 },
    { id: 142, name: "Articuno", img: "https://play.pokemonshowdown.com/sprites/xyani-back/articuno.gif", types: ["Ice", "Flying"], attack: 85, defense: 100, hp: 90 },
    { id: 143, name: "Zapdos", img: "https://play.pokemonshowdown.com/sprites/xyani-back/zapdos.gif", types: ["Electric", "Flying"], attack: 90, defense: 85, hp: 90 },
    { id: 144, name: "Moltres", img: "https://play.pokemonshowdown.com/sprites/xyani-back/moltres.gif", types: ["Fire", "Flying"], attack: 100, defense: 90, hp: 90 },
    { id: 145, name: "Mewtwo", img: "https://play.pokemonshowdown.com/sprites/xyani-back/mewtwo.gif", types: ["Psychic"], attack: 110, defense: 90, hp: 106 },
    { id: 146, name: "Mew", img: "https://play.pokemonshowdown.com/sprites/xyani-back/mew.gif", types: ["Psychic"], attack: 100, defense: 100, hp: 100 },
    { id: 147, name: "Dratini", img: "https://play.pokemonshowdown.com/sprites/xyani-back/dratini.gif", types: ["Dragon"], attack: 64, defense: 45, hp: 41 },
    { id: 148, name: "Dragonair", img: "https://play.pokemonshowdown.com/sprites/xyani-back/dragonair.gif", types: ["Dragon"], attack: 84, defense: 65, hp: 61 },
    { id: 149, name: "Dragonite", img: "https://play.pokemonshowdown.com/sprites/xyani-back/dragonite.gif", types: ["Dragon", "Flying"], attack: 134, defense: 95, hp: 91 },
    { id: 150, name: "Mewtwo", img: "https://play.pokemonshowdown.com/sprites/xyani-back/mewtwo.gif", types: ["Psychic"], attack: 110, defense: 90, hp: 106 },
    { id: 151, name: "Mew", img: "https://play.pokemonshowdown.com/sprites/xyani-back/mew.gif", types: ["Psychic"], attack: 100, defense: 100, hp: 100 }

];
const bgImages = [
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-aquacordetown.jpg",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-aquacordetown.png",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-beach.jpg",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-city.jpg",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-dampcave.jpg",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-darkbeach.jpg",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-darkcity.jpg",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-darkmeadow.jpg",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-deepsea.jpg",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-desert.jpg",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-earthycave.jpg",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-elite4drake.jpg",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-elite4drake.png",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-forest.jpg",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-icecave.jpg",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-leaderwallace.jpg",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-leaderwallace.png",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-library.jpg",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-library.png",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-meadow.jpg",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-orasdesert.jpg",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-orassea.jpg",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-orassea.png",
    "https://play.pokemonshowdown.com/sprites/gen6bgs/bg-skypillar.jpg"
];
const pokemonMoves = [
    // Normal
    { name: "Golpe Cuerpo", type: "Normal", power: 85 },
    { name: "Cabezazo", type: "Normal", power: 70 },
    { name: "Placaje", type: "Normal", power: 40 },
    { name: "Doble Filo", type: "Normal", power: 120 },
    { name: "Ataque Rápido", type: "Normal", power: 40 },
    { name: "Destructor", type: "Normal", power: 40 },
    { name: "Pisotón", type: "Normal", power: 65 },
    { name: "Corte", type: "Normal", power: 50 },
    { name: "Rugido", type: "Normal", power: 0 },
    { name: "Amago", type: "Normal", power: 30 },

    // Grass
    { name: "Hoja Afilada", type: "Grass", power: 55 },
    { name: "Danza Pétalo", type: "Grass", power: 120 },
    { name: "Gigadrenado", type: "Grass", power: 75 },
    { name: "Latigazo", type: "Grass", power: 45 },
    { name: "Rayo Solar", type: "Grass", power: 120 },
    { name: "Hoja Mágica", type: "Grass", power: 60 },
    { name: "Energibola", type: "Grass", power: 90 },
    { name: "Síntesis", type: "Grass", power: 0 },
    { name: "Ciclón de Hojas", type: "Grass", power: 130 },
    { name: "Somnífero", type: "Grass", power: 0 },

    // Poison
    { name: "Bomba Lodo", type: "Poison", power: 90 },
    { name: "Colmillo Veneno", type: "Poison", power: 50 },
    { name: "Gas Venenoso", type: "Poison", power: 0 },
    { name: "Puya Nociva", type: "Poison", power: 80 },
    { name: "Polvo Veneno", type: "Poison", power: 0 },
    { name: "Golpe Veneno", type: "Poison", power: 40 },
    { name: "Onda Tóxica", type: "Poison", power: 95 },
    { name: "Ácido", type: "Poison", power: 40 },
    { name: "Lluvia Ácida", type: "Poison", power: 60 },
    { name: "Veneno X", type: "Poison", power: 90 },

    // Fire
    { name: "Lanzallamas", type: "Fire", power: 95 },
    { name: "Puño Fuego", type: "Fire", power: 75 },
    { name: "Ascuas", type: "Fire", power: 40 },
    { name: "Llamarada", type: "Fire", power: 110 },
    { name: "Sofoco", type: "Fire", power: 130 },
    { name: "Anillo Ígneo", type: "Fire", power: 80 },
    { name: "Nitrocarga", type: "Fire", power: 50 },
    { name: "Giro Fuego", type: "Fire", power: 35 },
    { name: "Infierno", type: "Fire", power: 100 },
    { name: "Calcinación", type: "Fire", power: 60 },

    // Water
    { name: "Hidro Bomba", type: "Water", power: 110 },
    { name: "Cascada", type: "Water", power: 80 },
    { name: "Surf", type: "Water", power: 90 },
    { name: "Aqua Jet", type: "Water", power: 40 },
    { name: "Pulso de Agua", type: "Water", power: 60 },
    { name: "Voz Acuática", type: "Water", power: 60 },
    { name: "Chorro de Agua", type: "Water", power: 40 },
    { name: "Cola Acuática", type: "Water", power: 90 },
    { name: "Hidropulso", type: "Water", power: 60 },
    { name: "Escaldar", type: "Water", power: 80 },

    // Electric
    { name: "Rayo", type: "Electric", power: 90 },
    { name: "Trueno", type: "Electric", power: 110 },
    { name: "Impactrueno", type: "Electric", power: 40 },
    { name: "Voltio Cruel", type: "Electric", power: 130 },
    { name: "Electrocañón", type: "Electric", power: 120 },
    { name: "Chispa", type: "Electric", power: 65 },
    { name: "Onda Trueno", type: "Electric", power: 0 },
    { name: "Electropulso", type: "Electric", power: 60 },
    { name: "Carga Salvaje", type: "Electric", power: 90 },
    { name: "Puño Trueno", type: "Electric", power: 75 },

    // Ice
    { name: "Ventisca", type: "Ice", power: 110 },
    { name: "Viento Hielo", type: "Ice", power: 55 },
    { name: "Pulso de Hielo", type: "Ice", power: 60 },
    { name: "Colmillo Hielo", type: "Ice", power: 65 },
    { name: "Nevada", type: "Ice", power: 55 },
    { name: "Rayo Hielo", type: "Ice", power: 90 },
    { name: "Lanza Helada", type: "Ice", power: 85 },
    { name: "Puño Hielo", type: "Ice", power: 75 },
    { name: "Hielo Ártico", type: "Ice", power: 90 },
    { name: "Alud", type: "Ice", power: 60 },

    // Fighting
    { name: "Golpe Kárate", type: "Fighting", power: 50 },
    { name: "Puño Incremento", type: "Fighting", power: 40 },
    { name: "Combate Cercano", type: "Fighting", power: 120 },
    { name: "Demolición", type: "Fighting", power: 75 },
    { name: "A Bocajarro", type: "Fighting", power: 120 },
    { name: "Puño Férreo", type: "Fighting", power: 85 },
    { name: "Patada Baja", type: "Fighting", power: 65 },
    { name: "Machada", type: "Fighting", power: 40 },
    { name: "Contraataque", type: "Fighting", power: 0 },
    { name: "Golpe Cruzado", type: "Fighting", power: 100 },

    // Psychic
    { name: "Psíquico", type: "Psychic", power: 90 },
    { name: "Corte Psíquico", type: "Psychic", power: 50 },
    { name: "Confusión", type: "Psychic", power: 50 },
    { name: "Puño Psíquico", type: "Psychic", power: 60 },
    { name: "Previsión", type: "Psychic", power: 0 },
    { name: "Ondas Místicas", type: "Psychic", power: 65 },
    { name: "Fuerza Psi", type: "Psychic", power: 70 },
    { name: "Vista Futura", type: "Psychic", power: 120 },
    { name: "Manos Cósmicas", type: "Psychic", power: 60 },
    { name: "Adivinación", type: "Psychic", power: 80 },
    // Rock
    { name: "Avalancha", type: "Rock", power: 75 },
    { name: "Desenrollar", type: "Rock", power: 30 },
    { name: "Lanzarrocas", type: "Rock", power: 50 },
    { name: "Roca Afilada", type: "Rock", power: 100 },
    { name: "Pedrada", type: "Rock", power: 25 },
    { name: "Pulso de Roca", type: "Rock", power: 60 },
    { name: "Trampa Rocas", type: "Rock", power: 0 },
    { name: "Romperrocas", type: "Rock", power: 40 },
    { name: "Cabezazo Zen", type: "Rock", power: 80 },
    { name: "Tumba Rocas", type: "Rock", power: 60 },

    // Ground
    { name: "Terremoto", type: "Ground", power: 100 },
    { name: "Poder Telúrico", type: "Ground", power: 90 },
    { name: "Bucle Arena", type: "Ground", power: 35 },
    { name: "Disparo Lodo", type: "Ground", power: 55 },
    { name: "Tierra Viva", type: "Ground", power: 90 },
    { name: "Bofetón Lodo", type: "Ground", power: 20 },
    { name: "Excavar", type: "Ground", power: 80 },
    { name: "Fuerza Telúrica", type: "Ground", power: 90 },
    { name: "Golpe Terra", type: "Ground", power: 60 },
    { name: "Magnitud", type: "Ground", power: 0 },

    // Flying
    { name: "Ataque Ala", type: "Flying", power: 60 },
    { name: "Pájaro Osado", type: "Flying", power: 120 },
    { name: "Tornado", type: "Flying", power: 40 },
    { name: "Picotazo", type: "Flying", power: 35 },
    { name: "Vendaval", type: "Flying", power: 110 },
    { name: "Vuelo", type: "Flying", power: 90 },
    { name: "Golpe Aéreo", type: "Flying", power: 60 },
    { name: "Danza Pluma", type: "Flying", power: 0 },
    { name: "Golpe Aéreo", type: "Flying", power: 60 },
    { name: "Caída Libre", type: "Flying", power: 60 },

    // Bug
    { name: "Corte Furia", type: "Bug", power: 20 },
    { name: "Doble Rayo", type: "Bug", power: 90 },
    { name: "Pin Misil", type: "Bug", power: 25 },
    { name: "Picadura", type: "Bug", power: 60 },
    { name: "Señuelo", type: "Bug", power: 0 },
    { name: "Zumbido", type: "Bug", power: 90 },
    { name: "Golpe Picado", type: "Bug", power: 70 },
    { name: "Megacuerno", type: "Bug", power: 120 },
    { name: "Bicho Explosivo", type: "Bug", power: 100 },
    { name: "Acoso", type: "Bug", power: 60 },

    // Ghost
    { name: "Bola Sombra", type: "Ghost", power: 80 },
    { name: "Infortunio", type: "Ghost", power: 65 },
    { name: "Golpe Fantasma", type: "Ghost", power: 90 },
    { name: "Rencor", type: "Ghost", power: 0 },
    { name: "Alarido", type: "Ghost", power: 55 },
    { name: "Destierro", type: "Ghost", power: 70 },
    { name: "Presa Espiritual", type: "Ghost", power: 80 },
    { name: "Espanto", type: "Ghost", power: 60 },
    { name: "Maldición", type: "Ghost", power: 0 },
    { name: "Sombra Vil", type: "Ghost", power: 40 },

    // Dragon
    { name: "Garra Dragón", type: "Dragon", power: 80 },
    { name: "Pulso Dragón", type: "Dragon", power: 85 },
    { name: "Aliento Dragón", type: "Dragon", power: 60 },
    { name: "Cola Dragón", type: "Dragon", power: 60 },
    { name: "Cometa Draco", type: "Dragon", power: 130 },
    { name: "Danza Dragón", type: "Dragon", power: 0 },
    { name: "Furia Dragón", type: "Dragon", power: 40 },
    { name: "Dragoaliento", type: "Dragon", power: 60 },
    { name: "Enfado", type: "Dragon", power: 120 },
    { name: "Impacto Dragón", type: "Dragon", power: 100 },

    // Dark
    { name: "Pulso Umbrío", type: "Dark", power: 80 },
    { name: "Finta", type: "Dark", power: 60 },
    { name: "Tajo Umbrío", type: "Dark", power: 70 },
    { name: "Juego Sucio", type: "Dark", power: 95 },
    { name: "Alarido", type: "Dark", power: 55 },
    { name: "Tajo Siniestro", type: "Dark", power: 70 },
    { name: "Golpe Bajo", type: "Dark", power: 70 },
    { name: "Embargo", type: "Dark", power: 0 },
    { name: "Viento Aciago", type: "Dark", power: 60 },
    { name: "Mordisco", type: "Dark", power: 60 },

    // Steel
    { name: "Puño Meteoro", type: "Steel", power: 90 },
    { name: "Garra Metal", type: "Steel", power: 50 },
    { name: "Cabezahierro", type: "Steel", power: 80 },
    { name: "Cola Férrea", type: "Steel", power: 100 },
    { name: "Cañón Electro", type: "Steel", power: 130 },
    { name: "Ala de Acero", type: "Steel", power: 70 },
    { name: "Tijera X", type: "Steel", power: 80 },
    { name: "Puño Bala", type: "Steel", power: 40 },
    { name: "Plancha de Metal", type: "Steel", power: 100 },
    { name: "Cañón Flash", type: "Steel", power: 80 },

    // Fairy
    { name: "Brillo Mágico", type: "Fairy", power: 80 },
    { name: "Fuerza Lunar", type: "Fairy", power: 95 },
    { name: "Vozarrón", type: "Fairy", power: 90 },
    { name: "Viento Feérico", type: "Fairy", power: 40 },
    { name: "Caricia Mágica", type: "Fairy", power: 40 },
    { name: "Juego Brusco", type: "Fairy", power: 90 },
    { name: "Destello", type: "Fairy", power: 70 },
    { name: "Eco Metálico", type: "Fairy", power: 65 },
    { name: "Deslumbrar", type: "Fairy", power: 50 },
    { name: "Beso Drenaje", type: "Fairy", power: 50 }


];

const pokemons = [
    { id: 1, name: "Bulbasaur", img: "https://projectpokemon.org/images/shiny-sprite/bulbasaur.gif", types: ["Grass", "Poison"], attack: 49, defense: 49, hp: 45 },
    { id: 2, name: "Ivysaur", img: "https://projectpokemon.org/images/normal-sprite/ivysaur.gif", types: ["Grass", "Poison"], attack: 62, defense: 63, hp: 60 },
    { id: 3, name: "Venusaur", img: "https://projectpokemon.org/images/normal-sprite/venusaur.gif", types: ["Grass", "Poison"], attack: 82, defense: 83, hp: 80 },
    { id: 4, name: "Charmander", img: "https://projectpokemon.org/images/normal-sprite/charmander.gif", types: ["Fire"], attack: 52, defense: 43, hp: 39 },
    { id: 5, name: "Charmeleon", img: "https://projectpokemon.org/images/normal-sprite/charmeleon.gif", types: ["Fire"], attack: 64, defense: 58, hp: 58 },
    { id: 6, name: "Charizard", img: "https://projectpokemon.org/images/shiny-sprite/charizard.gif", types: ["Fire", "Flying"], attack: 84, defense: 78, hp: 78 },
    { id: 7, name: "Squirtle", img: "https://projectpokemon.org/images/normal-sprite/squirtle.gif", types: ["Water"], attack: 48, defense: 65, hp: 44 },
    { id: 8, name: "Wartortle", img: "https://projectpokemon.org/images/normal-sprite/wartortle.gif", types: ["Water"], attack: 63, defense: 80, hp: 59 },
    { id: 9, name: "Blastoise", img: "https://projectpokemon.org/images/normal-sprite/blastoise.gif", types: ["Water"], attack: 83, defense: 100, hp: 79 },
    { id: 10, name: "Caterpie", img: "https://projectpokemon.org/images/normal-sprite/caterpie.gif", types: ["Bug"], attack: 30, defense: 35, hp: 45 },
    { id: 11, name: "Metapod", img: "https://projectpokemon.org/images/normal-sprite/metapod.gif", types: ["Bug"], attack: 20, defense: 55, hp: 50 },
    { id: 12, name: "Butterfree", img: "https://projectpokemon.org/images/normal-sprite/butterfree.gif", types: ["Bug", "Flying"], attack: 45, defense: 50, hp: 60 },
    { id: 13, name: "Weedle", img: "https://projectpokemon.org/images/normal-sprite/weedle.gif", types: ["Bug", "Poison"], attack: 35, defense: 30, hp: 40 },
    { id: 14, name: "Kakuna", img: "https://projectpokemon.org/images/normal-sprite/kakuna.gif", types: ["Bug", "Poison"], attack: 25, defense: 50, hp: 45 },
    { id: 15, name: "Beedrill", img: "https://projectpokemon.org/images/normal-sprite/beedrill.gif", types: ["Bug", "Poison"], attack: 90, defense: 40, hp: 65 },
    { id: 16, name: "Pidgey", img: "https://projectpokemon.org/images/normal-sprite/pidgey.gif", types: ["Normal", "Flying"], attack: 45, defense: 40, hp: 40 },
    { id: 17, name: "Pidgeotto", img: "https://projectpokemon.org/images/normal-sprite/pidgeotto.gif", types: ["Normal", "Flying"], attack: 60, defense: 55, hp: 63 },
    { id: 18, name: "Pidgeot", img: "https://projectpokemon.org/images/normal-sprite/pidgeot.gif", types: ["Normal", "Flying"], attack: 80, defense: 75, hp: 83 },
    { id: 19, name: "Rattata", img: "https://projectpokemon.org/images/normal-sprite/rattata.gif", types: ["Normal"], attack: 56, defense: 35, hp: 30 },
    { id: 20, name: "Raticate", img: "https://projectpokemon.org/images/normal-sprite/raticate.gif", types: ["Normal"], attack: 81, defense: 60, hp: 55 },
    { id: 21, name: "Spearow", img: "https://projectpokemon.org/images/normal-sprite/spearow.gif", types: ["Normal", "Flying"], attack: 60, defense: 30, hp: 40 },
    { id: 22, name: "Fearow", img: "https://projectpokemon.org/images/normal-sprite/fearow.gif", types: ["Normal", "Flying"], attack: 90, defense: 65, hp: 65 },
    { id: 23, name: "Ekans", img: "https://projectpokemon.org/images/normal-sprite/ekans.gif", types: ["Poison"], attack: 60, defense: 44, hp: 35 },
    { id: 24, name: "Arbok", img: "https://projectpokemon.org/images/normal-sprite/arbok.gif", types: ["Poison"], attack: 85, defense: 69, hp: 60 },
    { id: 25, name: "Pikachu", img: "https://projectpokemon.org/images/normal-sprite/pikachu.gif", types: ["Electric"], attack: 55, defense: 40, hp: 35 },
    { id: 26, name: "Raichu", img: "https://projectpokemon.org/images/normal-sprite/raichu.gif", types: ["Electric"], attack: 90, defense: 55, hp: 60 },
    { id: 27, name: "Sandshrew", img: "https://projectpokemon.org/images/normal-sprite/sandshrew.gif", types: ["Ground"], attack: 75, defense: 85, hp: 50 },
    { id: 28, name: "Sandslash", img: "https://projectpokemon.org/images/normal-sprite/sandslash.gif", types: ["Ground"], attack: 100, defense: 110, hp: 75 },
    { id: 29, name: "Nidoran♀", img: "https://projectpokemon.org/images/normal-sprite/nidoran_f.gif", types: ["Poison"], attack: 47, defense: 52, hp: 55 },
    { id: 30, name: "Nidorina", img: "https://projectpokemon.org/images/normal-sprite/nidorina.gif", types: ["Poison"], attack: 62, defense: 67, hp: 70 },
    { id: 31, name: "Nidoqueen", img: "https://projectpokemon.org/images/normal-sprite/nidoqueen.gif", types: ["Poison", "Ground"], attack: 92, defense: 87, hp: 90 },
    { id: 32, name: "Nidoran♂", img: "https://projectpokemon.org/images/normal-sprite/nidoran_m.gif", types: ["Poison"], attack: 57, defense: 40, hp: 46 },
    { id: 33, name: "Nidorino", img: "https://projectpokemon.org/images/normal-sprite/nidorino.gif", types: ["Poison"], attack: 72, defense: 57, hp: 61 },
    { id: 34, name: "Nidoking", img: "https://projectpokemon.org/images/normal-sprite/nidoking.gif", types: ["Poison", "Ground"], attack: 102, defense: 77, hp: 81 },
    { id: 35, name: "Clefairy", img: "https://projectpokemon.org/images/normal-sprite/clefairy.gif", types: ["Fairy"], attack: 45, defense: 48, hp: 70 },
    { id: 36, name: "Clefable", img: "https://projectpokemon.org/images/normal-sprite/clefable.gif", types: ["Fairy"], attack: 70, defense: 73, hp: 95 },
    { id: 37, name: "Vulpix", img: "https://projectpokemon.org/images/normal-sprite/vulpix.gif", types: ["Fire"], attack: 41, defense: 40, hp: 38 },
    { id: 38, name: "Ninetales", img: "https://projectpokemon.org/images/normal-sprite/ninetales.gif", types: ["Fire"], attack: 76, defense: 75, hp: 73 },
    { id: 39, name: "Jigglypuff", img: "https://projectpokemon.org/images/normal-sprite/jigglypuff.gif", types: ["Normal", "Fairy"], attack: 45, defense: 20, hp: 115 },
    { id: 40, name: "Wigglytuff", img: "https://projectpokemon.org/images/normal-sprite/wigglytuff.gif", types: ["Normal", "Fairy"], attack: 70, defense: 45, hp: 140 },
    { id: 41, name: "Zubat", img: "https://projectpokemon.org/images/normal-sprite/zubat.gif", types: ["Poison", "Flying"], attack: 45, defense: 35, hp: 40 },
    { id: 42, name: "Golbat", img: "https://projectpokemon.org/images/normal-sprite/golbat.gif", types: ["Poison", "Flying"], attack: 80, defense: 70, hp: 75 },
    { id: 43, name: "Oddish", img: "https://projectpokemon.org/images/normal-sprite/oddish.gif", types: ["Grass", "Poison"], attack: 50, defense: 55, hp: 45 },
    { id: 44, name: "Gloom", img: "https://projectpokemon.org/images/normal-sprite/gloom.gif", types: ["Grass", "Poison"], attack: 65, defense: 70, hp: 60 },
    { id: 45, name: "Vileplume", img: "https://projectpokemon.org/images/normal-sprite/vileplume.gif", types: ["Grass", "Poison"], attack: 80, defense: 85, hp: 75 },
    { id: 46, name: "Paras", img: "https://projectpokemon.org/images/normal-sprite/paras.gif", types: ["Bug", "Grass"], attack: 70, defense: 55, hp: 35 },
    { id: 47, name: "Parasect", img: "https://projectpokemon.org/images/normal-sprite/parasect.gif", types: ["Bug", "Grass"], attack: 95, defense: 80, hp: 60 },
    { id: 48, name: "Venonat", img: "https://projectpokemon.org/images/normal-sprite/venonat.gif", types: ["Bug", "Poison"], attack: 55, defense: 50, hp: 60 },
    { id: 49, name: "Venomoth", img: "https://projectpokemon.org/images/normal-sprite/venomoth.gif", types: ["Bug", "Poison"], attack: 65, defense: 60, hp: 70 },
    { id: 50, name: "Diglett", img: "https://projectpokemon.org/images/normal-sprite/diglett.gif", types: ["Ground"], attack: 55, defense: 25, hp: 10 },
    { id: 51, name: "Dugtrio", img: "https://projectpokemon.org/images/normal-sprite/dugtrio.gif", types: ["Ground"], attack: 100, defense: 50, hp: 35 },
    { id: 52, name: "Meowth", img: "https://projectpokemon.org/images/normal-sprite/meowth.gif", types: ["Normal"], attack: 45, defense: 35, hp: 40 },
    { id: 53, name: "Persian", img: "https://projectpokemon.org/images/normal-sprite/persian.gif", types: ["Normal"], attack: 70, defense: 60, hp: 65 },
    { id: 54, name: "Psyduck", img: "https://projectpokemon.org/images/normal-sprite/psyduck.gif", types: ["Water"], attack: 52, defense: 48, hp: 50 },
    { id: 55, name: "Golduck", img: "https://projectpokemon.org/images/normal-sprite/golduck.gif", types: ["Water"], attack: 82, defense: 78, hp: 80 },
    { id: 56, name: "Mankey", img: "https://projectpokemon.org/images/normal-sprite/mankey.gif", types: ["Fighting"], attack: 80, defense: 35, hp: 40 },
    { id: 57, name: "Primeape", img: "https://projectpokemon.org/images/normal-sprite/primeape.gif", types: ["Fighting"], attack: 105, defense: 60, hp: 65 },
    { id: 58, name: "Growlithe", img: "https://projectpokemon.org/images/normal-sprite/growlithe.gif", types: ["Fire"], attack: 70, defense: 45, hp: 55 },
    { id: 59, name: "Arcanine", img: "https://projectpokemon.org/images/normal-sprite/arcanine.gif", types: ["Fire"], attack: 110, defense: 80, hp: 90 },
    { id: 60, name: "Poliwag", img: "https://projectpokemon.org/images/normal-sprite/poliwag.gif", types: ["Water"], attack: 50, defense: 40, hp: 40 },
    { id: 61, name: "Poliwhirl", img: "https://projectpokemon.org/images/normal-sprite/poliwhirl.gif", types: ["Water"], attack: 65, defense: 65, hp: 65 },
    { id: 62, name: "Poliwrath", img: "https://projectpokemon.org/images/normal-sprite/poliwrath.gif", types: ["Water", "Fighting"], attack: 85, defense: 95, hp: 90 },
    { id: 63, name: "Abra", img: "https://projectpokemon.org/images/normal-sprite/abra.gif", types: ["Psychic"], attack: 20, defense: 15, hp: 25 },
    { id: 64, name: "Kadabra", img: "https://projectpokemon.org/images/normal-sprite/kadabra.gif", types: ["Psychic"], attack: 35, defense: 30, hp: 40 },
    { id: 65, name: "Alakazam", img: "https://projectpokemon.org/images/normal-sprite/alakazam.gif", types: ["Psychic"], attack: 50, defense: 45, hp: 55 },
    { id: 66, name: "Machop", img: "https://projectpokemon.org/images/normal-sprite/machop.gif", types: ["Fighting"], attack: 80, defense: 50, hp: 70 },
    { id: 67, name: "Machoke", img: "https://projectpokemon.org/images/normal-sprite/machoke.gif", types: ["Fighting"], attack: 100, defense: 70, hp: 80 },
    { id: 68, name: "Machamp", img: "https://projectpokemon.org/images/normal-sprite/machamp.gif", types: ["Fighting"], attack: 130, defense: 80, hp: 90 },
    { id: 69, name: "Bellsprout", img: "https://projectpokemon.org/images/normal-sprite/bellsprout.gif", types: ["Grass", "Poison"], attack: 75, defense: 35, hp: 50 },
    { id: 70, name: "Weepinbell", img: "https://projectpokemon.org/images/normal-sprite/weepinbell.gif", types: ["Grass", "Poison"], attack: 90, defense: 50, hp: 65 },
    { id: 71, name: "Victreebel", img: "https://projectpokemon.org/images/normal-sprite/victreebel.gif", types: ["Grass", "Poison"], attack: 105, defense: 65, hp: 80 },
    { id: 72, name: "Tentacool", img: "https://projectpokemon.org/images/normal-sprite/tentacool.gif", types: ["Water", "Poison"], attack: 40, defense: 35, hp: 40 },
    { id: 73, name: "Tentacruel", img: "https://projectpokemon.org/images/normal-sprite/tentacruel.gif", types: ["Water", "Poison"], attack: 50, defense: 40, hp: 50 },
    { id: 74, name: "Geodude", img: "https://projectpokemon.org/images/normal-sprite/geodude.gif", types: ["Rock", "Ground"], attack: 55, defense: 45, hp: 55 },
    { id: 75, name: "Graveler", img: "https://projectpokemon.org/images/normal-sprite/graveler.gif", types: ["Rock", "Ground"], attack: 60, defense: 50, hp: 60 },
    { id: 76, name: "Golem", img: "https://projectpokemon.org/images/normal-sprite/golem.gif", types: ["Rock", "Ground"], attack: 65, defense: 55, hp: 65 },
    { id: 77, name: "Ponyta", img: "https://projectpokemon.org/images/normal-sprite/ponyta.gif", types: ["Fire"], attack: 60, defense: 45, hp: 50 },
    { id: 78, name: "Rapidash", img: "https://projectpokemon.org/images/normal-sprite/rapidash.gif", types: ["Fire"], attack: 65, defense: 55, hp: 65 },
    { id: 79, name: "Slowpoke", img: "https://projectpokemon.org/images/normal-sprite/slowpoke.gif", types: ["Water", "Psychic"], attack: 55, defense: 45, hp: 50 },
    { id: 80, name: "Slowbro", img: "https://projectpokemon.org/images/normal-sprite/slowbro.gif", types: ["Water", "Psychic"], attack: 65, defense: 50, hp: 65 },
    { id: 81, name: "Magnemite", img: "https://projectpokemon.org/images/normal-sprite/magnemite.gif", types: ["Electric", "Steel"], attack: 45, defense: 40, hp: 35 },
    { id: 82, name: "Magneton", img: "https://projectpokemon.org/images/normal-sprite/magneton.gif", types: ["Electric", "Steel"], attack: 50, defense: 50, hp: 45 },
    { id: 83, name: "Farfetch’d", img: "https://projectpokemon.org/images/normal-sprite/farfetchd.gif", types: ["Normal", "Flying"], attack: 65, defense: 55, hp: 52 },
    { id: 84, name: "Doduo", img: "https://projectpokemon.org/images/normal-sprite/doduo.gif", types: ["Normal", "Flying"], attack: 85, defense: 45, hp: 65 },
    { id: 85, name: "Dodrio", img: "https://projectpokemon.org/images/normal-sprite/dodrio.gif", types: ["Normal", "Flying"], attack: 110, defense: 70, hp: 95 },
    { id: 86, name: "Seel", img: "https://projectpokemon.org/images/normal-sprite/seel.gif", types: ["Water"], attack: 45, defense: 55, hp: 65 },
    { id: 87, name: "Dewgong", img: "https://projectpokemon.org/images/normal-sprite/dewgong.gif", types: ["Water", "Ice"], attack: 70, defense: 80, hp: 90 },
    { id: 88, name: "Grimer", img: "https://projectpokemon.org/images/normal-sprite/grimer.gif", types: ["Poison"], attack: 80, defense: 50, hp: 70 },
    { id: 89, name: "Muk", img: "https://projectpokemon.org/images/normal-sprite/muk.gif", types: ["Poison"], attack: 105, defense: 75, hp: 105 },
    { id: 90, name: "Shellder", img: "https://projectpokemon.org/images/normal-sprite/shellder.gif", types: ["Water"], attack: 65, defense: 100, hp: 30 },
    { id: 91, name: "Cloyster", img: "https://projectpokemon.org/images/normal-sprite/cloyster.gif", types: ["Water", "Ice"], attack: 95, defense: 180, hp: 50 },
    { id: 92, name: "Gastly", img: "https://projectpokemon.org/images/normal-sprite/gastly.gif", types: ["Ghost", "Poison"], attack: 35, defense: 30, hp: 30 },
    { id: 93, name: "Haunter", img: "https://projectpokemon.org/images/normal-sprite/haunter.gif", types: ["Ghost", "Poison"], attack: 50, defense: 45, hp: 45 },
    { id: 94, name: "Gengar", img: "https://projectpokemon.org/images/normal-sprite/gengar.gif", types: ["Ghost", "Poison"], attack: 65, defense: 60, hp: 60 },
    { id: 95, name: "Onix", img: "https://projectpokemon.org/images/normal-sprite/onix.gif", types: ["Rock", "Ground"], attack: 45, defense: 160, hp: 35 },
    { id: 96, name: "Drowzee", img: "https://projectpokemon.org/images/normal-sprite/drowzee.gif", types: ["Psychic"], attack: 48, defense: 45, hp: 60 },
    { id: 97, name: "Hypno", img: "https://projectpokemon.org/images/normal-sprite/hypno.gif", types: ["Psychic"], attack: 73, defense: 70, hp: 85 },
    { id: 98, name: "Krabby", img: "https://projectpokemon.org/images/normal-sprite/krabby.gif", types: ["Water"], attack: 105, defense: 90, hp: 30 },
    { id: 99, name: "Kingler", img: "https://projectpokemon.org/images/normal-sprite/kingler.gif", types: ["Water"], attack: 130, defense: 115, hp: 55 },
    { id: 100, name: "Voltorb", img: "https://projectpokemon.org/images/normal-sprite/voltorb.gif", types: ["Electric"], attack: 30, defense: 50, hp: 40 },
    { id: 101, name: "Electrode", img: "https://projectpokemon.org/images/normal-sprite/electrode.gif", types: ["Electric"], attack: 50, defense: 70, hp: 60 },
    { id: 102, name: "Exeggcute", img: "https://projectpokemon.org/images/normal-sprite/exeggcute.gif", types: ["Grass", "Psychic"], attack: 40, defense: 80, hp: 60 },
    { id: 103, name: "Exeggutor", img: "https://projectpokemon.org/images/normal-sprite/exeggutor.gif", types: ["Grass", "Psychic"], attack: 95, defense: 85, hp: 95 },
    { id: 104, name: "Cubone", img: "https://projectpokemon.org/images/normal-sprite/cubone.gif", types: ["Ground"], attack: 50, defense: 95, hp: 50 },
    { id: 105, name: "Marowak", img: "https://projectpokemon.org/images/normal-sprite/marowak.gif", types: ["Ground"], attack: 80, defense: 110, hp: 60 },
    { id: 106, name: "Hitmonlee", img: "https://projectpokemon.org/images/normal-sprite/hitmonlee.gif", types: ["Fighting"], attack: 120, defense: 53, hp: 50 },
    { id: 107, name: "Hitmonchan", img: "https://projectpokemon.org/images/normal-sprite/hitmonchan.gif", types: ["Fighting"], attack: 105, defense: 79, hp: 50 },
    { id: 108, name: "Lickitung", img: "https://projectpokemon.org/images/normal-sprite/lickitung.gif", types: ["Normal"], attack: 55, defense: 75, hp: 90 },
    { id: 109, name: "Koffing", img: "https://projectpokemon.org/images/normal-sprite/koffing.gif", types: ["Poison"], attack: 65, defense: 95, hp: 40 },
    { id: 110, name: "Weezing", img: "https://projectpokemon.org/images/normal-sprite/weezing.gif", types: ["Poison"], attack: 90, defense: 120, hp: 65 },
    { id: 111, name: "Rhyhorn", img: "https://projectpokemon.org/images/normal-sprite/rhyhorn.gif", types: ["Ground", "Rock"], attack: 85, defense: 95, hp: 80 },
    { id: 112, name: "Rhydon", img: "https://projectpokemon.org/images/normal-sprite/rhydon.gif", types: ["Ground", "Rock"], attack: 130, defense: 120, hp: 105 },
    { id: 113, name: "Chansey", img: "https://projectpokemon.org/images/normal-sprite/chansey.gif", types: ["Normal"], attack: 5, defense: 5, hp: 250 },
    { id: 114, name: "Tangela", img: "https://projectpokemon.org/images/normal-sprite/tangela.gif", types: ["Grass"], attack: 55, defense: 115, hp: 65 },
    { id: 115, name: "Kangaskhan", img: "https://projectpokemon.org/images/normal-sprite/kangaskhan.gif", types: ["Normal"], attack: 95, defense: 80, hp: 105 },
    { id: 116, name: "Horsea", img: "https://projectpokemon.org/images/normal-sprite/horsea.gif", types: ["Water"], attack: 40, defense: 70, hp: 30 },
    { id: 117, name: "Seadra", img: "https://projectpokemon.org/images/normal-sprite/seadra.gif", types: ["Water"], attack: 65, defense: 95, hp: 55 },
    { id: 118, name: "Goldeen", img: "https://projectpokemon.org/images/normal-sprite/goldeen.gif", types: ["Water"], attack: 67, defense: 60, hp: 45 },
    { id: 119, name: "Seaking", img: "https://projectpokemon.org/images/normal-sprite/seaking.gif", types: ["Water"], attack: 92, defense: 65, hp: 80 },
    { id: 120, name: "Staryu", img: "https://projectpokemon.org/images/normal-sprite/staryu.gif", types: ["Water"], attack: 45, defense: 55, hp: 30 },
    { id: 121, name: "Starmie", img: "https://projectpokemon.org/images/normal-sprite/starmie.gif", types: ["Water", "Psychic"], attack: 60, defense: 85, hp: 60 },
    { id: 122, name: "Mr. Mime", img: "https://projectpokemon.org/images/normal-sprite/mr.mime.gif", types: ["Psychic", "Fairy"], attack: 45, defense: 65, hp: 40 },
    { id: 123, name: "Scyther", img: "https://projectpokemon.org/images/normal-sprite/scyther.gif", types: ["Bug", "Flying"], attack: 110, defense: 80, hp: 70 },
    { id: 124, name: "Jynx", img: "https://projectpokemon.org/images/normal-sprite/jynx.gif", types: ["Ice", "Psychic"], attack: 50, defense: 35, hp: 65 },
    { id: 125, name: "Electabuzz", img: "https://projectpokemon.org/images/normal-sprite/electabuzz.gif", types: ["Electric"], attack: 83, defense: 57, hp: 65 },
    { id: 126, name: "Magmar", img: "https://projectpokemon.org/images/normal-sprite/magmar.gif", types: ["Fire"], attack: 95, defense: 57, hp: 65 },
    { id: 127, name: "Pinsir", img: "https://projectpokemon.org/images/normal-sprite/pinsir.gif", types: ["Bug"], attack: 125, defense: 100, hp: 65 },
    { id: 128, name: "Tauros", img: "https://projectpokemon.org/images/normal-sprite/tauros.gif", types: ["Normal"], attack: 100, defense: 95, hp: 75 },
    { id: 129, name: "Magikarp", img: "https://projectpokemon.org/images/normal-sprite/magikarp.gif", types: ["Water"], attack: 10, defense: 55, hp: 20 },
    { id: 130, name: "Gyarados", img: "https://projectpokemon.org/images/normal-sprite/gyarados.gif", types: ["Water", "Flying"], attack: 125, defense: 79, hp: 95 },
    { id: 131, name: "Lapras", img: "https://projectpokemon.org/images/normal-sprite/lapras.gif", types: ["Water", "Ice"], attack: 85, defense: 80, hp: 130 },
    { id: 132, name: "Ditto", img: "https://projectpokemon.org/images/normal-sprite/ditto.gif", types: ["Normal"], attack: 48, defense: 48, hp: 48 },
    { id: 133, name: "Eevee", img: "https://projectpokemon.org/images/normal-sprite/eevee.gif", types: ["Normal"], attack: 55, defense: 50, hp: 55 },
    { id: 134, name: "Vaporeon", img: "https://projectpokemon.org/images/normal-sprite/vaporeon.gif", types: ["Water"], attack: 65, defense: 60, hp: 130 },
    { id: 135, name: "Jolteon", img: "https://projectpokemon.org/images/normal-sprite/jolteon.gif", types: ["Electric"], attack: 65, defense: 60, hp: 65 },
    { id: 136, name: "Flareon", img: "https://projectpokemon.org/images/normal-sprite/flareon.gif", types: ["Fire"], attack: 130, defense: 60, hp: 65 },
    { id: 137, name: "Porygon", img: "https://projectpokemon.org/images/normal-sprite/porygon.gif", types: ["Normal"], attack: 60, defense: 70, hp: 65 },
    { id: 138, name: "Omanyte", img: "https://projectpokemon.org/images/normal-sprite/omanyte.gif", types: ["Rock", "Water"], attack: 40, defense: 100, hp: 35 },
    { id: 139, name: "Omastar", img: "https://projectpokemon.org/images/normal-sprite/omastar.gif", types: ["Rock", "Water"], attack: 60, defense: 125, hp: 70 },
    { id: 140, name: "Kabuto", img: "https://projectpokemon.org/images/normal-sprite/kabuto.gif", types: ["Rock", "Water"], attack: 80, defense: 90, hp: 30 },
    { id: 141, name: "Kabutops", img: "https://projectpokemon.org/images/normal-sprite/kabutops.gif", types: ["Rock", "Water"], attack: 115, defense: 105, hp: 60 },
    { id: 142, name: "Aerodactyl", img: "https://projectpokemon.org/images/normal-sprite/aerodactyl.gif", types: ["Rock", "Flying"], attack: 105, defense: 65, hp: 80 },
    { id: 143, name: "Snorlax", img: "https://projectpokemon.org/images/normal-sprite/snorlax.gif", types: ["Normal"], attack: 110, defense: 65, hp: 160 },
    { id: 144, name: "Articuno", img: "https://projectpokemon.org/images/normal-sprite/articuno.gif", types: ["Ice", "Flying"], attack: 85, defense: 100, hp: 90 },
    { id: 145, name: "Zapdos", img: "https://projectpokemon.org/images/normal-sprite/zapdos.gif", types: ["Electric", "Flying"], attack: 90, defense: 85, hp: 90 },
    { id: 146, name: "Moltres", img: "https://projectpokemon.org/images/normal-sprite/moltres.gif", types: ["Fire", "Flying"], attack: 100, defense: 90, hp: 90 },
    { id: 147, name: "Dratini", img: "https://projectpokemon.org/images/normal-sprite/dratini.gif", types: ["Dragon"], attack: 64, defense: 45, hp: 41 },
    { id: 148, name: "Dragonair", img: "https://projectpokemon.org/images/normal-sprite/dragonair.gif", types: ["Dragon"], attack: 84, defense: 65, hp: 61 },
    { id: 149, name: "Dragonite", img: "https://projectpokemon.org/images/normal-sprite/dragonite.gif", types: ["Dragon", "Flying"], attack: 134, defense: 95, hp: 91 },
    { id: 150, name: "Mewtwo", img: "https://projectpokemon.org/images/normal-sprite/mewtwo.gif", types: ["Psychic"], attack: 110, defense: 90, hp: 106 },
    { id: 151, name: "Mew", img: "https://projectpokemon.org/images/normal-sprite/mew.gif", types: ["Psychic"], attack: 100, defense: 100, hp: 100 }
];
const tipos = [
    { type: "Normal", img: "https://i.ibb.co/1GxYK5H/normal.png"},
    { type: "Grass", img: "https://i.ibb.co/cXZ8SWG/grass.png"},   
    { type: "Poison", img: "https://i.ibb.co/y6YcNVn/poison.png"},
    { type: "Fire", img: "https://i.ibb.co/g95Y7rd/fire.png" },
    { type: "Water", img: "https://i.ibb.co/qd2vK2f/water.png" },
    { type: "Electric", img: "https://i.ibb.co/5nKJpLy/electric.png" },
    { type: "Ice",img: "https://i.ibb.co/yh20ZyX/ice.png"},
    { type: "Fighting", img: "https://i.ibb.co/4sZFw4W/fighting.png"},
    { type: "Psychic", img: "https://i.ibb.co/KjQqh7p/psychic.png"},
    { type: "Rock", img: "https://i.ibb.co/ng5K8xS/rock.png"},
    { type: "Ground", img: "https://i.ibb.co/1Q36xcy/ground.png"},
    { type: "Flying", img: "https://i.ibb.co/MCxyJsW/flying.png"},
    { type: "Bug", img: "https://i.ibb.co/yyxn2Lf/bug.png"},
    { type: "Ghost", img: "https://i.ibb.co/4NLRQFt/ghost.png"},
    { type: "Dragon", img: "https://i.ibb.co/JnyNYw4/dragon.png"},
    { type: "Dark",img: "https://i.ibb.co/yVJc3mR/dark.png"},
    { type: "Steel",img: "https://i.ibb.co/G0vx8cx/steel.png"},
    { type: "Fairy",img: "https://i.ibb.co/4TSc7cS/fairy.png"}
];

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.indexOf(name + "=") === 0) {
            return JSON.parse(cookie.substring(name.length + 1));
        }
    }
    return null;
}

//funcion para generar movimientos 
function generarMovimientos(pokemon, pokemonMoves) {
    const movimientos = [];
        for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * pokemonMoves.length);
        movimientos.push(pokemonMoves[randomIndex]);
    }

    const tipo1 = pokemon.types[0];
    const tipo2 = pokemon.types[1] || null; 
    const movtipo = [];

    pokemonMoves.forEach(movimiento => {
        if (movimiento.type === tipo1 || movimiento.type === tipo2) {
            movtipo.push(movimiento);
        }
    });

    for (let i = 0; i < 2; i++) {
        if (movtipo.length > 0) {
            const randomIndex2 = Math.floor(Math.random() * movtipo.length);
            movimientos.push(movtipo[randomIndex2]);
        }
    }
    pokemon.movimientos = movimientos;
}

// funcion para aplicar un fondo aleatorio
function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * bgImages.length);  
    const randomBgImage = bgImages[randomIndex];  
    document.getElementById("fondo").style.backgroundImage = `url(${randomBgImage})`; 
    
}
window.onload = setRandomBackground;

//funcion curar
function curar(pokemon, oponente) {
    if (pokemon.hpnow === 0) {
        const mensaje = `${pokemon.name} no puede curarse porque ya ha sido derrotado.`;
        actualizarPantalla(pokemon, oponente, mensaje);
        return;
    }
    if (!pokemon.curausada) {
        let puntosCurados = Math.floor(pokemon.hp * 0.5);
        pokemon.hpnow = Math.min(pokemon.hp, pokemon.hpnow + puntosCurados);  
        pokemon.curausada = true;  
        const mensaje = `${pokemon.name} se ha curado ${puntosCurados} puntos de vida.`;
        actualizarPantalla(pokemon, oponente, mensaje);
    } else {
        const mensaje = `${pokemon.name} ya no puede curarse.`;
        actualizarPantalla(pokemon, oponente, mensaje);
    }
}
//funcion CalcularDaño
function calcularDaño(atacante, defensor, movimiento) {
    let randomindex = 0.85 + Math.random() * 0.15;
    let daño = Math.floor((atacante.attack * movimiento.power / (defensor.defense * 2)) * randomindex * 0.7);
    return Math.max(1, daño);
}
//funcion atacarJugador
function atacarJugador(pokemon, oponente, movnum) { 
         
    if (oponente.hpnow > 0) {
        const movimiento = pokemon.movimientos[movnum];
        const daño = calcularDaño(pokemon, oponente, movimiento);
        oponente.hpnow = Math.max(0, oponente.hpnow - daño);
        pokemon.curausada = false;
        const mensaje = `${pokemon.name} usó ${movimiento.name} y causó ${daño} de daño a ${oponente.name}`;
        console.log(mensaje);
        actualizarPantalla(pokemon, oponente, mensaje);
    }
}
//funcion atacarMaquina
function atacarMaquina(pokemon, oponente) {
    if (pokemon.hpnow === 0) {
        const mensaje = `${pokemon.name} nada prima`;
        console.log(mensaje);
        actualizarPantalla(pokemon, oponente, mensaje);
        return;
    }
    if (oponente.hpnow > 0) {
        const movnum = Math.floor(Math.random() * oponente.movimientos.length);
        const movimiento = oponente.movimientos[movnum];
        const daño = calcularDaño(oponente, pokemon, movimiento);
        pokemon.hpnow = Math.max(0, pokemon.hpnow - daño);
        oponente.curausada = false;
        const mensaje = `${oponente.name} usó ${movimiento.name} y causó ${daño} de daño a ${pokemon.name}.`;
        console.log(mensaje);
        actualizarPantalla(pokemon, oponente, mensaje);
    }
}
//funcion decisionMaquina
function decisionMaquina(pokemon, oponente) {
    if (!pokemon.curausada && pokemon.hpnow < pokemon.hp * 0.5 && Math.random() < 0.5) {
        curar(oponente); 
    } else {
        atacarMaquina(pokemon, oponente); 
    }
}
//funcion actualizarpantalla
function actualizarPantalla(pokemon, rival,mensaje) {
    const mipokhp = document.getElementById('mipokhp');
    const pokrivalhp = document.getElementById('pokrivalhp');
    const eventos = document.getElementById('eventos');
    const evento = document.createElement('p');

    if (pokemon.hpnow > 0) {
        mipokhp.innerText = `HP: ${pokemon.hpnow} / ${pokemon.hp}`;
    } else {
        mipokhp.innerText = "MUERTO";
    }

    if (rival){
        if (rival.hpnow > 0) {
            pokrivalhp.innerText = `HP: ${rival.hpnow} / ${rival.hp}`;
        } else {
            pokrivalhp.innerText = "MUERTO";
        }
    }


    evento.innerText = mensaje;
    eventos.appendChild(evento);
}
document.addEventListener("DOMContentLoaded", () => {
    // recuperar pokemons de las cookies
    const mipokemon = { ...getCookie('tuPokemon'), movimientos: [], hpnow: getCookie('tuPokemon')?.hp, curausada: true};
    const rivalPokemon = { ...getCookie('rivalPokemon'), movimientos: [], hpnow: getCookie('rivalPokemon')?.hp,  curausada: true};
    pokrivalhp.innerText = "HP: "+rivalPokemon.hpnow+" / "+rivalPokemon.hp;
    mipokhp.innerText = "HP: "+mipokemon.hpnow+" / "+mipokemon.hp;
    
    if (mipokemon && rivalPokemon) {
        generarMovimientos(mipokemon, pokemonMoves);
        generarMovimientos(rivalPokemon, pokemonMoves);

        // Stats mipokemon
        pokemonsespalda.forEach(pokemon => {
            if(mipokemon.name == pokemon.name){
                mipokemon.img = pokemon.img;
            }
        });
        const mipokimg = document.getElementById('mipokimg');
        mipokimg.src = mipokemon.img;
        const mipoknombre = document.getElementById('mipokname');
        mipokemon.hpnow = mipokemon.hp;
        mipoknombre.innerText = mipokemon.name;
    
        // Stats pokemonrival
        const pokrivalnombre = document.getElementById('pokrivalname');
        const pokrivalimg = document.getElementById('pokrivalimg');
        pokrivalimg.src = rivalPokemon.img;
        pokrivalnombre.innerText = rivalPokemon.name;
        pokrivalhp.innerText = "HP: "+rivalPokemon.hpnow+" / "+rivalPokemon.hp;

        //Movimiento 1

        const move1 = document.getElementById('move1');
        const mov1nombre = document.getElementById('mov1nombre');
        mov1nombre.innerText = mipokemon.movimientos[0].name;

        const mov1fuerza = document.getElementById('mov1fuerza');
        mov1fuerza.innerText = "Power: "+mipokemon.movimientos[0].power;

        const mov1tipo = document.createElement('img');

        tipos.forEach(tipo => {
            if(mipokemon.movimientos[0].type == tipo.type){
                mov1tipo.src = tipo.img;
                mov1tipo.classList.add('usermovs');
            }
        });
        move1.appendChild(mov1tipo);

        move1.addEventListener('click', () => {
            if (mipokemon.hpnow === 0 || rivalPokemon.hpnow === 0) {
                return;
            }
            atacarJugador(mipokemon, rivalPokemon, 0);
            decisionMaquina(mipokemon, rivalPokemon); 

        
        });

        //Movimiento 2

        const move2 = document.getElementById('move2');
        const mov2nombre = document.getElementById('mov2nombre');
        mov2nombre.innerText = mipokemon.movimientos[1].name;

        const mov2fuerza = document.getElementById('mov2fuerza');
        mov2fuerza.innerText = "Power: "+mipokemon.movimientos[1].power;

        const mov2tipo = document.createElement('img');

        tipos.forEach(tipo => {
            if(mipokemon.movimientos[1].type == tipo.type){
                mov2tipo.src = tipo.img;
                mov2tipo.classList.add('usermovs');
            }
        });
        move2.appendChild(mov2tipo);

        move2.addEventListener('click', () => {
            if (mipokemon.hpnow === 0 || rivalPokemon.hpnow === 0) {
                return;
            }
            atacarJugador(mipokemon, rivalPokemon, 1);
            decisionMaquina(mipokemon, rivalPokemon); 
        });

        //Movimiento 3

        const move3 = document.getElementById('move3');
        const mov3nombre = document.getElementById('mov3nombre');
        mov3nombre.innerText = mipokemon.movimientos[2].name;

        const mov3fuerza = document.getElementById('mov3fuerza');
        mov3fuerza.innerText = "Power: "+mipokemon.movimientos[2].power;

        const mov3tipo = document.createElement('img');

        tipos.forEach(tipo => {
            if(mipokemon.movimientos[2].type == tipo.type){
                mov3tipo.src = tipo.img;
                mov3tipo.classList.add('usermovs');
            }
        });
        move3.appendChild(mov3tipo);

        move3.addEventListener('click', () => {
            if (mipokemon.hpnow === 0 || rivalPokemon.hpnow === 0) {
                return;
            }
            atacarJugador(mipokemon, rivalPokemon,2 );
            decisionMaquina(mipokemon, rivalPokemon); 
        });
        
        //Movimiento 4

        const move4 = document.getElementById('move4');
        const mov4nombre = document.getElementById('mov4nombre');
        mov4nombre.innerText = mipokemon.movimientos[3].name;

        const mov4fuerza = document.getElementById('mov4fuerza');
        mov4fuerza.innerText = "Power: "+mipokemon.movimientos[3].power;

        const mov4tipo = document.createElement('img');

        tipos.forEach(tipo => {
            if(mipokemon.movimientos[3].type == tipo.type){
                mov4tipo.src = tipo.img;
                mov4tipo.classList.add('usermovs');
            }
        });
        move4.appendChild(mov4tipo);

        move4.addEventListener('click', () => {
            if (mipokemon.hpnow === 0 || rivalPokemon.hpnow === 0) {
                return;
            }
            atacarJugador(mipokemon, rivalPokemon, 3);
            if (rivalPokemon.hpnow === 0) {
                return;
            }
            decisionMaquina(mipokemon, rivalPokemon); 
        });

        //Boton curar

        const btncurar = document.getElementById('curar');
        btncurar.addEventListener('click', () => {
            if (mipokemon.hpnow === 0 || rivalPokemon.hpnow === 0) {
                return;
            }
            curar(mipokemon, rivalPokemon);
            setTimeout(() => decisionMaquina(mipokemon, rivalPokemon), 500);
        });
    
    } else {
        console.log("No se encontraron datos de Pokémon en las cookies.");
    }
});






