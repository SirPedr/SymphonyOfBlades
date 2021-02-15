export enum AttributesSlugs {
    STRENGTH = "strength",
    DEXTERITY = "dexterity",
    INTELLIGENCE = "intelligence",
    CHARISMA = "charisma"
}

export type PlayerAttributesType = {[index in AttributesSlugs]: number};

