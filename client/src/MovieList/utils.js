const Jenres = {
    Drama: 'Drama',
    Comedy: 'Comedy',
    Action: 'Action',
    Thriller: 'Thriller',
};

const previews = [{
    id: 0,
    name: 'Jackie Brown',
    jenre: Jenres.Comedy,
    posterUrl: 'https://images-na.ssl-images-amazon.com/images/I/91e2jI9N9sL._SX355_.jpg',
    year: 1997,
}, {
    id: 1,
    name: 'Reservoir Dogs',
    jenre: Jenres.Comedy,
    posterUrl: 'http://centuryclub.co.uk/wp-content/uploads/2017/10/reservoir_dogs_1992_8.jpg',
    year: 1992,
}, {
    id: 2,
    name: 'Four Rooms',
    jenre: Jenres.Comedy,
    posterUrl: 'http://is2.mzstatic.com/image/thumb/Video5/v4/df/40/02/df400274-1155-7414-01e9-e7ff4f7f56f0/source/227x227bb.jpg',
    year: 1995,
}];

class utils {
    static get() {
        return previews;
    }
}
export default utils;
