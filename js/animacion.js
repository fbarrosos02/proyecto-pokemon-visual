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

window.onload = function() {
    separarImagenes();
    mostrarCombateConRetraso();
    setTimeout(function() {
        separarImagenes();
        CombateDesaparecer();
   
    },6500)
    setTimeout(function() {
        window.location.href = '/combate.html';
    },7000)
};

function separarImagenes() {
    const imgIzquierda = document.getElementById('imagenIzquierda');
    const imgDerecha = document.getElementById('imagenDerecha');
    
    imgIzquierda.classList.toggle('mostrar');
    imgDerecha.classList.toggle('mostrar');
}

function mostrarCombateConRetraso() {
    setTimeout(function() {
        document.getElementById('combate').classList.add('mostrar');
    }, 1500); 

}
function CombateDesaparecer() {
    document.getElementById('combate').classList.add('ocultar');
}


document.addEventListener("DOMContentLoaded", () => {
    const mipokemon = getCookie('tuPokemon');
    const rivalPokemon = getCookie('rivalPokemon');

    if (mipokemon && rivalPokemon) {
        const mipokemoncontainer = document.getElementById('mipokemon');

        const mipokemonimg = document.createElement('img');
        mipokemonimg.src = mipokemon.img;
        mipokemonimg.alt = mipokemon.name;
        mipokemonimg.classList.add('imagenpokemon');
        mipokemoncontainer.appendChild(mipokemonimg);

        const nombre = document.getElementById('nombre');
        nombre.innerText = mipokemon.name;
        mipokemoncontainer.appendChild(nombre);

        const contenedortipos = document.getElementById('tipos');
        const tipopk1 = document.createElement("img");
        tipos.forEach(tipo => {
            if(mipokemon.types[0] == tipo.type){
                tipopk1.src = tipo.img;
                tipopk1.classList.add('tipo');
            }
        });
        contenedortipos.appendChild(tipopk1);
    
        const tipopk2 = document.createElement("img");
        let tienedostipos = false;
        tipos.forEach(tipo => {
            if(mipokemon.types[1] == tipo.type){
                tipopk2.src = tipo.img;
                tipopk2.classList.add('tipo');
                tienedostipos = true;
            }
        });
        if(tienedostipos){
            contenedortipos.appendChild(tipopk2);
        }

       mipokemoncontainer.appendChild(contenedortipos);

       const caracteristicas = document.getElementById('caracteristicas');
       const ataque = document.getElementById('ataque');
       const defensa = document.getElementById('defensa');
       const hp = document.getElementById('hp');

       ataque.innerText = "Ataque: "+mipokemon.attack;
       defensa.innerText = "Defensa: "+mipokemon.defense;
       hp.innerText = "HP: "+mipokemon.hp;
      
       mipokemoncontainer.appendChild(caracteristicas);

       const rivalcontainer = document.getElementById('pokemonrival');
                const rivalimg = document.createElement('img');
                rivalimg.src = rivalPokemon.img;
                rivalimg.alt = rivalPokemon.name;
                rivalimg.classList.add('imagenpokemon');
                rivalcontainer.appendChild(rivalimg);
                
                const nombrerival = document.getElementById('nombrerival');
                nombrerival.innerText = rivalPokemon.name;
                rivalcontainer.appendChild(nombrerival);
                
                const tiposrival = document.getElementById('tiposrival');
                const rivalpk1 = document.createElement("img");
                tipos.forEach(tipo => {
                    if (rivalPokemon.types[0] === tipo.type) {
                        rivalpk1.src = tipo.img;
                        rivalpk1.classList.add('tipo');
                    }
                });
                tiposrival.appendChild(rivalpk1);
                
                const rivalpk2 = document.createElement("img");
                if (rivalPokemon.types[1]) {
                    tipos.forEach(tipo => {
                        if (rivalPokemon.types[1] === tipo.type) {
                            rivalpk2.src = tipo.img;
                            rivalpk2.classList.add('tipo');
                        }
                    });
                    tiposrival.appendChild(rivalpk2);
                }
                rivalcontainer.appendChild(tiposrival);

                const caracteristicasrival = document.getElementById('caracteristicasrival');
                rivalcontainer.appendChild(caracteristicasrival);

                const ataqueRival = document.getElementById('ataquerival');
                const defensaRival = document.getElementById('defensarival');
                const hpRival = document.getElementById('hprival');

                ataqueRival.innerText = "Ataque: " + rivalPokemon.attack;
                defensaRival.innerText = "Defensa: " + rivalPokemon.defense;
                hpRival.innerText = "HP: " + rivalPokemon.hp;

    } else {
        console.log("No se encontraron datos de Pokémon en las cookies.");
    }
});


