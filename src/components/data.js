import {getTextesJuridiques} from "../classes/Util";

const dateDebut = "2011-01-01";
const dateFin = "2016-01-01"
const keyword = null; //contains
const type = null;
const category = "2";
const state = null;


const text = getTextesJuridiques()


export function search(keyword, datedebut, dateFin, type, category, state) {


    return text.filter((data) => {
        let checkKeyWord = false;
        let checkType = false;
        let checkCategory = false;
        let checkState = false;
        let check = false;
        if (!keyword) {
            checkKeyWord = true

        } else {
            if (keyword && (data.subject.includes(keyword) || data.contentFR.raw.includes(keyword) || data.contentMG.raw.includes(keyword))) {
                checkKeyWord = true;
            }
        }

        if (!type) {
            checkType = true;
        } else {
            if (type && data.type.id == type)
                checkType = true;
        }

        if (!category) {
            checkCategory = true;
        } else {
            if (category && data.category.id == category)
                checkCategory = true

        }
        if (state == null || state == "undefined") {
            checkState = true;

        } else {
            if (state != null || state != "undefined" && data.state == state)
                checkState = true;
        }


        return checkKeyWord && checkState && checkType && checkCategory;
    })


}


const result = search(keyword, dateDebut, dateFin, type, category, state);

