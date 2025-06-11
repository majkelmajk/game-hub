import {Platform} from "../hooks/useGames";
import {Genre} from "./Genre";
import {Publisher} from "./Publisher";

export interface Game {
    id: number;
    name: string;
    slug: string;
    genres: Genre[]
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    publishers: Publisher[];
    metacritic: number;
    rating_top: number;
    rating: number;
}