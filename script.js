const moviesArr = [
    {
        id: 1,
        title: "Harry Potter",
        desc: "Film o czarodzieju",
        poster:
            "https://cdn.cdon.com/media-dynamic/images/product/movie/dvd/image2/harry_potter_and_the_half-blood_prince_nordic-38572658-.jpg"
    },
    {
        id: 2,
        title: "Król Lew",
        desc: "Film o królu sawanny",
        poster: "https://ssl-gfx.filmweb.pl/po/68/78/6878/7389475.3.jpg"
    },
    {
        id: 3,
        title: "Titanic",
        desc: "Film o tonącym di Caprio",
        poster: "https://images-na.ssl-images-amazon.com/images/I/51J2bFB4AcL.jpg"
    },
    {
        id: 4,
        title: "Władca pierścieni",
        desc: "Film o Śródziemiu",
        poster: "https://ssl-gfx.filmweb.pl/po/10/65/1065/6900087.3.jpg"
    }
];

const moviesList = moviesArr.map(movie =>
    React.createElement(
        "li",
        { key: movie.id },
        React.createElement("h2", {}, movie.title),
        React.createElement("p", {}, movie.desc),
        React.createElement("img", { src: movie.poster, style: { width: "200px" } })
    )
);

const container = React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Lista filmów"),
    React.createElement("ul", {}, moviesList)
);
ReactDOM.render(container, document.getElementById("app"));
