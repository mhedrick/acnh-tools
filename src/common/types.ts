export type Species =
    "Alligator"|
    "Anteater"|
    "Bear"|
    "Bird"|
    "Bull"|
    "Cat"|
    "Cub"|
    "Chicken"|
    "Cow"|
    "Deer"|
    "Dog"|
    "Duck"|
    "Eagle"|
    "Elephant"|
    "Frog"|
    "Goat"|
    "Gorilla"|
    "Hamster"|
    "Hippo"|
    "Horse"|
    "Koala"|
    "Kangaroo"|
    "Lion"|
    "Monkey"|
    "Mouse"|
    "Octopus"|
    "Ostrich"|
    "Penguin"|
    "Pig"|
    "Rabbit"|
    "Rhino"|
    "Sheep"|
    "Squirrel"|
    "Tiger"|
    "Wolf";


export type Personality =
    "Cranky"|
    "Jock"|
    "Lazy"|
    "Normal"|
    "Peppy"|
    "Sisterly"|
    "Smug"|
    "Snooty";


export type Gender = "Male" | "Female";


export type Sign = "Aries"|
    "Taurus"|
    "Gemini"|
    "Cancer"|
    "Leo"|
    "Virgo"|
    "Libra"|
    "Scorpio"|
    "Sagittarius"|
    "Capricorn"|
    "Aquarius"|
    "Pisces";

export type SubPersonality = "A" | "B";

export enum Hobby {
     Education, 
     Fashion, 
     Fitness, 
     Music, 
     Nature, 
     Play
}


export enum Media {
    DNM,
    AC,
    E_PLUS,
    WW,
    CF,
    NL,
    WA,
    NH,
    FILM,
    HHD,
    PC
}

interface Details {
    photo_url: string;
    icon_url: string;
    "sub-personality": SubPersonality;
    clothing_variation: string;
    fav_styles: Array<string>[];
    fav_colors: Array<string>[];
    hobby: keyof typeof Hobby;
}

export interface VillagerObj {
    name: string;
    url: string;
    title_color: string;
    text_color: string;
    id: string;
    image_url: string;
    species: Species;
    personality: Personality;
    gender: Gender;
    birthday_month: string;
    birthday_day: string;
    sign: Sign;
    quote: string;
    phrase: string;
    clothing: string;
    debut: string;
    //prev_phrases: Array<string>[];
    //appearances: Array<string>[];
    nh_details: Details;
}


export class Villager {
    name;
    url;
    title_color;
    text_color;
    id;
    image_url;
    species;
    personality;
    gender: Gender;
    birthday_month;
    birthday_day;
    sign: Sign;
    quote;
    phrase;
    clothing;
    debut;
    photo_url;
    icon_url;
    subPersonality: SubPersonality;
    clothing_variation;
    fav_styles;
    fav_colors;
    hobby: keyof typeof Hobby;

    constructor(obj: VillagerObj) {
        this.name = obj.name;
        this.species = obj.species;
        this.url = obj.url;
        this.title_color = obj.title_color;
        this.text_color = obj.text_color;
        this.id = obj.id;
        this.image_url = obj.image_url;
        this.species = obj.species;
        this.personality = obj.personality;
        this.gender = obj.gender;
        this.birthday_month = obj.birthday_month;
        this.birthday_day = obj.birthday_day;
        this.sign = obj.sign;
        this.quote = obj.quote;
        this.phrase = obj.phrase;
        this.clothing = obj.clothing;
        this.debut = obj.debut;

        this.photo_url = obj.nh_details.photo_url;
        this.icon_url = obj.nh_details.icon_url;
        this.subPersonality = obj.nh_details["sub-personality"];
        this.clothing_variation = obj.nh_details.clothing_variation;
        this.fav_styles = obj.nh_details.fav_styles;
        this.fav_colors = obj.nh_details.fav_colors;
        this.hobby = obj.nh_details.hobby;
    }
}