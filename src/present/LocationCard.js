import React from 'react'
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import { Link } from "react-router-dom";

const LocationCard = (props) => {
    return(
        <div>
        <Card>
          <CardBody>
            <CardTitle id = "loc-card-title">{props.location.name}</CardTitle>
            <CardSubtitle>{props.location.phone}</CardSubtitle>
          </CardBody>
            <img className = "loc-index-img" style={{width: 250, height: 200}} src={props.location.img_url} alt={props.location.name} />
          <CardBody>
            <CardText>Rating: {props.location.ratings[0].rating} out of 5</CardText>
            <Link to = {`/locations/${props.location.id}`}>
                <Button className="btn btn-danger">Explore</Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    )
}



export default LocationCard