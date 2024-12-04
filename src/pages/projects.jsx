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
                    <h2>Note Taker</h2>
                    <a href = "https://github.com/Jarvis318/Note_Taker_Application"><img className="image" src="/screenshots/NoteTakerHw11.png" alt= "Note Taker" /> </a>
                </div>
                <div className="project-image">
                    <h2>Object Relational Maping</h2>
                    <a href = "https://github.com/Jarvis318/Object-Relational-Mapping"><img className="image" src="/screenshots/Object-Relational-Mapping Hw 13.png" /> </a>
                </div>
                <div className="project-image">
                    <h2>Readme Generator</h2>
                    <a href = "https://github.com/Jarvis318/README-Generator"><img className="image" src="/screenshots/Readme Generator Hw 9.png" /> </a>

                </div>
            </Container>
        </>
    );
};

export default projects;