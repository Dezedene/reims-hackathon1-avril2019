import React from 'react'
import "./DisplayEgg.css";
import { Card, CardTitle, CardText, Col } from 'reactstrap';

const DisplayEgg = ({ egg, onSelectEgg, areEggsSelected, isBattlefieldDisplayed, night }) => {
    return (
        <article className='card'>
            <Col>
            {isBattlefieldDisplayed ?
                <Card body inverse color={night}> <img src={egg.image} alt={egg.name} className="egg" />
                    <CardTitle className="eggsTitle">{egg.name}</CardTitle>
                    {!areEggsSelected && <CardText className="eggsText">Attack Points: {egg.farming}</CardText>}
                </Card>
            : <Card onClick={() => onSelectEgg(egg)} body inverse color={night}><img src={egg.image} alt={egg.name} className="egg" />
              <CardTitle className="eggsTitle">{egg.name}</CardTitle>
             {!areEggsSelected && <CardText className="eggsText">Attack Points: {egg.farming}</CardText>}
    </Card>}
                    
            </Col>
        </article>
    )
}

export default DisplayEgg;
