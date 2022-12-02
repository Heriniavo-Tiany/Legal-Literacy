import textesJuridiques from '../local-json/textesJuridiques.json';

export function getTextesJuridiques() {
    if (true) { // offline
        return textesJuridiques;
    } else {
        let result = [];

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => {
                result.push(json);
            });

        return result;
    }
}
