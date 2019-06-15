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

const MoviePoster = React.createClass({
    render: function() {
        return React.createElement("img", { src: this.props.poster, style: { width: "200px" } });
    },

    propTypes: {
        poster: React.PropTypes.string.isRequired
    }
});

const MovieTitle = React.createClass({
    render: function() {
        return React.createElement("h3", {}, this.props.title);
    },

    propTypes: {
        title: React.PropTypes.string.isRequired
    }
});

const MovieDescription = React.createClass({
    render: function() {
        return React.createElement("p", {}, this.props.desc);
    },

    propTypes: {
        desc: React.PropTypes.string.isRequired
    }
});

const Movie = React.createClass({
    render: function() {
        return React.createElement(
            "li",
            {},
            React.createElement(MovieTitle, { title: this.props.title }),
            React.createElement(MovieDescription, { desc: this.props.desc }),
            React.createElement(MoviePoster, { poster: this.props.poster })
        );
    },

    propTypes: {
        title: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        poster: React.PropTypes.string.isRequired
    }
});

const MoviesList = React.createClass({
    render: function() {
        return React.createElement(
            "ul",
            {},
            this.props.moviesArr.map(({ id, title, desc, poster }) =>
                React.createElement(Movie, { key: id, title, desc, poster })
            )
        );
    },

    propTypes: {
        moviesArr: React.PropTypes.array.isRequired
    }
});

const container = React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Lista filmów"),
    React.createElement(MoviesList, { moviesArr })
);

ReactDOM.render(container, document.getElementById("app"));
