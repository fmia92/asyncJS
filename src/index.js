const title = document.querySelector("#titleCharacter");
const image = document.querySelector("#imageCharacter");
const origin = document.querySelector("#originCharacter");
const getAllData = async () => {
    await axios.get("https://rickandmortyapi.com/api/character")
        .then(response => {
            const { data } = response;
            console.log(data.results);
        })
        .catch(error => {
            console.log(error);
        })
}

const getDataById = async (id) => {
    await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            const { data } = response;
            console.log(data);
            title.textContent = `${data.name} (${data.species})`;
            image.src = data.image;
            origin.textContent = `${data.origin.name}`;
        })
        .catch(error => {
            console.log(error);
        })
}