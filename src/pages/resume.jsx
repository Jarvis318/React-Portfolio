import { Link } from 'react-router-dom';
import { Container, Header, Grid, Segment, Button } from 'semantic-ui-react';


const resume = () => {

    return (
        <>
            <Header>
                <h1>Welcome to the Resume page!</h1>
            </Header>

            <Container>
                <div className="project-image">
                    <img className="image" src="/screenshots/NoteTakerHw11.png" />
                </div>
            </Container>
        </>
    );
};

export default resume;