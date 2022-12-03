import textesJuridiques from '../local-json/textesJuridiques.json';
import thematiques from '../local-json/thematiques.json';
import news from '../local-json/regions.json';

export function getTextesJuridiques() {
    if (true) {
        return textesJuridiques;
    } else {
        let result = [];

        fetch("http://localhost:8081/textes")
            .then((response) => response.json())
            .then((json) => {
                result.push(json);
            });

        return result;
    }
}

export function getThematiques() {
    if (true) {
        return thematiques;
    } else {
        let result = [];

        fetch("http://localhost:8081/thematiques")
            .then((response) => response.json())
            .then((json) => {
                result.push(json);
            });

        return result;
    }
}

export function getNews() {
    if (true) {
        return news;
    } else {
        let result = [];

        fetch("http://localhost:8081/news")
            .then((response) => response.json())
            .then((json) => {
                result.push(json);
            });

        return result;
    }
}
