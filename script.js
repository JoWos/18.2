
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
            return React.createElement('h2', {}, this.props.title);
        }
    });

    var MovieDescription = React.createClass({
        propTypes: {
            desc: React.PropTypes.string.isRequired,
        },
        
        render: function() {
            return React.createElement('p', {}, this.props.desc);
        } 
    });

    var MoviePoster = React.createClass({
        propTypes: {
            poster: React.PropTypes.string.isRequired,
        },

        render: function() {
            return React.createElement('img', {src: this.props.poster})
        }
    })


    var Movie = React.createClass({
        propTypes: {
            item: React.PropTypes.object.isRequired,
        },

        render: function() {
            return (
                React.createElement('li', {key: this.props.item.id},
                    React.createElement(MovieTitle, {title: this.props.item.title}),
                    React.createElement(MovieDescription, {desc: this.props.item.desc}),
                    React.createElement(MoviePoster, {poster: this.props.item.poster})   
                )
            )
        }
    })


    var MoviesElements = React.createClass({
        propTypes: {
            items: React.PropTypes.array.isRequired,
        },

        render: function() {
            var movies = this.props.items.map(function(movie) {
                return React.createElement(Movie, {item: movie, key: movie.id});
            });

            return (
                React.createElement('ul', {}, movies)
            )
        }
    });


    var element =
        React.createElement('div', {},
            React.createElement('h1', {}, 'Lista filmów'),
            React.createElement(MoviesElements, {items: movies})
        );

    ReactDOM.render(element, document.getElementById('app'));

 