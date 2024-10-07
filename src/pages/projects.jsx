import { Link } from 'react-router-dom';
import { Container, Header, Grid, Segment, Button } from 'semantic-ui-react';


const projects = () => {

    return (
        <>
            <Header>
                <h1>Welcome to the projects page!</h1>
            </Header>

            <Container>
                <div className="project-image">
                    <img className="image" src="/screenshots/NoteTakerHw11.png" />
                </div>
            </Container>
        </>
    );
};

export default projects;