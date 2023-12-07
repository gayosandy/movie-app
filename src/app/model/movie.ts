export class Movie {

    title: string;
    description: string;
    rating: string;
    duration: string;
    genre: string;
    releasedate: Date;
    trailerlink: string;
    imgsrc: string;

    constructor( title: string, description: string, rating: string, duration: string, genre: string, releasedate: Date,
        trailerlink: string, imgsrc: string){
        this.title = title;
        this.description = description;
        this.rating = rating;
        this.duration = duration;
        this.genre = genre;
        this.releasedate = releasedate;
        this.trailerlink = trailerlink;
        this.imgsrc = imgsrc;
    }
}