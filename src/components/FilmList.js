import data from './data.js'
import FilmItem from './FilmItem';
import React, { Component } from 'react';

class FilmList extends Component {
    state = {
        // data: []
    }
    render() {
        return (
            <>
                {
                    data.map(elt => <FilmItem
                        title={elt.titel}
                        year={elt.year}
                        director={elt.director}
                        duration={elt.duration}
                        genre={elt.genre}
                        rate={elt.rate}
                    />)
                }
                </>
        );

}
}


        //!   why not data.movies.map???  -   is there meaning that the
        //? every array/database has to be in/for only one file ?
// const FilmList = () => {
//     return (
//         <>

//             {data.map(elt => <FilmItem
//                     title={elt.titel}
//                     year={elt.year}
//                     director={elt.director}
//                     duration={elt.duration}
//                     genre={elt.genre}
//                     rate={elt.rate}
//                 />)
//             }
//         </>
//     );
// }

export default FilmList;

