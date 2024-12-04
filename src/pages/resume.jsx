import { Link } from 'react-router-dom';
import { Container, Header, Grid, Segment, Button } from 'semantic-ui-react';
import myResume from '../assets/resume.pdf';


const resume = () => {

    return (
        <>
            <Header>
                <h1>My Resume</h1>
            </Header>

            <Container>
            <embed src={myResume} width="500" height="575" 
 type="application/pdf"/>
            </Container>
        </>
    );
};

export default resume;