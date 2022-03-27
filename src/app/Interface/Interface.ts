export type IGame = {
    gameId: number;
    gameName: string | undefined;
    gameCode: string;
    releaseDate: string;
    price: number;
    description: string;
    thumbRating: number;
    imageUrl: string;
}