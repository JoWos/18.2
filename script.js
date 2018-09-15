
    var movies = [
        {
            id: 1,
            title: 'Harry Potter',
            desc: 'Film o czarodzieju',
            poster: 'https://ssl-gfx.filmweb.pl/po/05/71/30571/7529392.3.jpg'
        },
        {
            id: 2,
            title: 'Król Lew',
            desc: 'Film o królu sawanny',
            poster: 'https://ssl-gfx.filmweb.pl/po/68/78/6878/7790724.3.jpg'
        },
        {
            id: 3,
            title: 'Toy Story',
            desc: 'Film o zabawkach',
            poster: 'https://ssl-gfx.filmweb.pl/po/07/11/711/6900929.3.jpg'
        },
        {
            id: 4,
            title: 'Pocahontas',
            desc: 'Film o nieszczęśliwej miłości',
            poster: 'https://ssl-gfx.filmweb.pl/po/87/12/8712/6901053.3.jpg'
        },
        {
            id: 5,
            title: 'Czarownica',
            desc: 'Film o czarownicy i śpiącej królewnie',
            poster: 'https://ssl-gfx.filmweb.pl/po/73/30/557330/7607122.3.jpg'
        }
    ];


    var MovieTitle = React.createClass({
        propTypes: {
            title: React.PropTypes.string.isRequired,
        },

        render: function() {
            return React.createElement('h2', {}, movie.title);
        }
    });

    var MovieDescription = React.createClass({
        propTypes: {
            desc: React.PropTypes.string.isRequired,
        },
        
        render: function() {
            return React.createElement('p', {}, movie.desc);
        } 
    });

    var MoviePoster = React.createClass({
        propTypes: {
            poster: React.PropTypes.object.isRequired,
        },

        render: function() {
            return React.createElement('img', {src: movie.poster})
        }
    })

    var MoviesElements = React.createClass({
        propTypes: {
            movies: React.PropTypes.array.isRequired,
        },

        render: function() {
            var movieselements = this.props.items.map(function(movie){
                return React.createElement('li', {key: movie.id},
                React.createElement(MovieTitle, {title: movie.title}),
                React.createElement(MovieDescription, {desc: movie.desc}),
                
                )
            })
        }
    })


    var Movie = React.createClass({
        propTypes: {
            item: React.PropTypes.object.isRequired,
        },

        render: function() {
            return (
                React.createElement('div', {className: 'movieItem'},
                    React.createElement('h2', {}, this.props.item.title),
                    React.createElement('p', {}, this.props.item.desc),
                    React.createElement('img', {src: this.props.item.poster})
                )
            )
        }
    })


var Movies = React.createClass({
    propTypes: {
     items: React.PropTypes.array.isRequired,
    },

    render: function() {
        var movies = this.props.items.map(function(movie) {
            return React.createElement(Movie, {item: movie, key: movie.id});
        });

        return (
            React.createElement('ul', {className: 'movieList'}, movies)
        )
    }
});


var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement(Movies, {items: movies}, {})
    );

ReactDOM.render(element, document.getElementById('app'));

 