export interface MovieDetails {
    name: string;
    description: string;
    photo: string;
    trailer: string;
    duration: number
}

let tenetDetails : MovieDetails ={
    name: "Tenet",
    description: "This is a suspense thriller",
    photo: "www.google.com/tenet",
    trailer: "www.youtube.com/tenet",
    duration: 90
};

console.log(tenetDetails.trailer);  