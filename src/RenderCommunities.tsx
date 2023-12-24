import Communities from "./Communities";
import Houses from "./Houses";
import "./RenderCommunities.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// sorting communities alphabetically
Communities.sort(function (a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});

function calculateAverageHomePriceInCommunnity(communityId: string): number {
    const communityHouses = Houses.filter((house) => house.communityId == communityId);
    if (communityHouses.length == 0) {
        return -1;
    }

    let total: number = 0;
    communityHouses.forEach((house) => {
        total += house.price;
    })

    return Math.round(total / communityHouses.length);
}


const RenderCommunities = () => {
    return (
        <Container>
            <h1 style={{ marginBottom: 40 }}>Communities:</h1>
            <Row xs={1} md={3} lg={4}>
                {Communities.map((Community) => (
                    <Col>
                        <div key={Community.id} className="grid-item">
                            <img src={Community.imgUrl} alt={Community.name} />
                            <div>
                                <h3>{Community.name}</h3>
                                <h4>Average Home Price: {(calculateAverageHomePriceInCommunnity(Community.id) >= 0) ? `$${calculateAverageHomePriceInCommunnity(Community.id)} CAD` : "No listings found"}</h4>
                            </div>

                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default RenderCommunities;
