import { TAnimals } from "../@types";


export function getBorderColorFromValue(borderColor: string | undefined): string {
    if (!borderColor) {
        return "";
    }
    
    if (borderColor.length <= 7) {
        return borderColor
    } else {
        return `linear-gradient(90deg, ${borderColor})`
    }
}

export function getAnimalsTextFromValue(animals: TAnimals[] | undefined): string {
    if (!animals || animals.length === 0) {
        return "no animals.";
    }

    const animalTexts = animals.map(animal => `a ${animal}`);

    // If there are more than one animal, join them with commas and "and" for the last item.
    if (animalTexts.length === 1) {
        return animalTexts[0]; // Single animal
    }

    return `${animalTexts.slice(0, -1).join(", ")} and ${animalTexts[animalTexts.length - 1]}.`;
}