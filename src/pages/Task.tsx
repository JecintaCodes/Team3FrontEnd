import styled from "styled-components"



const Task = () =>{
    return(
        <div>
            <Container>
                <Main>
                    <CardHolder>
                        <Card>
                            <Avatar></Avatar>
                            <Name></Name>
                            <Work></Work>
                            <Min></Min>
                            <ButtonHolder>
                                <Button>Delete</Button>
                            </ButtonHolder>
                        </Card>

                    </CardHolder>
                </Main>
            </Container>
        </div>
    )
}

export default Task


const Button = styled.div``;
const ButtonHolder = styled.div``;
const Min = styled.div``;
const Work = styled.div`
font-size: 13px;
font-weight: 600;
`;
const Name = styled.div`
font-size: 13px;
font-weight: 600;

`;
const Avatar = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
border: 1px solid silver;
`;
const Card = styled.div`
width: 320px;
height: 200px;
border: 1px solid silver;
`;
const CardHolder = styled.div``;
const Main = styled.div`
width: 90%;
`;
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;

`;