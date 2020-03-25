import React from 'react';


class FeaturedCard extends React.Component {

    //create a ternary that will check if the active slide is 1 if not return carousel item
    //create function to change state

    render(){
        return(
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item">
                <img class="d-block w-100" src="..." alt="First slide"></img>
                </div>
                <div class="carousel-item active">
                <img class="d-block w-100" src="..." alt="Second slide"></img>
                </div>
                <div class="carousel-item ">
                <img class="d-block w-100" src="..." alt="Third slide"></img>
                </div>
            </div>
            </div>
        )
    }
}



export default FeaturedCard;