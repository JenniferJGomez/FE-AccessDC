import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import {
    Link
  } from "react-router-dom";

const LocationCard = (props) => {
    return(
        <div>
        <Card>
          <CardBody>
            <CardTitle>{props.location.name}</CardTitle>
            <CardSubtitle>{props.location.phone}</CardSubtitle>
          </CardBody>
            <img style={{width: 250, height: 200}} src={props.location.img_url} alt={props.location.name} />
          <CardBody>
            <CardText>Rating will go here</CardText>
            <Link to = {`/locations/${props.location.id}`}>
                <Button>More Info</Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    )
}



export default LocationCard