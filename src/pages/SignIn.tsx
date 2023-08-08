import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { SignInUser } from "../api/AuthApi";
import { useDispatch } from "react-redux";
import { createUser } from "../global/GlobalState";


const SignIn = ()=>{
    const navigate = useNavigate()

   


    const schema = yup.object({
        email: yup.string().required(),
        password: yup.string().required(),
    })


    const {
        formState: {errors},
        register,
        handleSubmit,
         reset
    }= useForm({
        resolver: yupResolver(schema)
    })


     const dispatch = useDispatch()

        const onSubmit = handleSubmit(async(data:any)=>{
            const { email, password }= data
            const formData = new FormData()

            formData.append("email", email)
            formData.append("password", password)
       
            SignInUser(formData).then((res)=>{
                dispatch(createUser(res))
                navigate("/")
            })
        })

    return(
        <div>
        <Container>
        <Main onSubmit={onSubmit}>
       
        <Right>
        <InputHolder>
        <Input placeholder="Email"  {...register("email")} />
        </InputHolder>
         {  errors.email && <Errors>error</Errors>}

        <InputHolder>
        <Input placeholder="Password"  {...register("password")}/>
        </InputHolder>
        { errors.password && <Errors>error</Errors>}

     
        <ButtonHolder>
        <Button type="submit">SignIn</Button>
       <Link style={{textDecoration:"none" , color:"var(--appText)"}}
       to="/register">
       <Button 
        >SignUp</Button>
       </Link>
        </ButtonHolder>
     
        </Right>
        </Main>
        </Container>
        </div>
    )
}

export default SignIn

const Errors = styled.div`
color:var(--appText);
font-size:15px;
position: absolute;
left:0;
`;
const Circle = styled.img`
width: 300px;
height: 300px;
border:1px solid var(--appBorder);
border-radius: 50%;
object-fit: cover;
`;
const CircleHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column:
gap: 40px;
`;
const ImageLabel = styled.label`
padding: 8px 15px;
border-radius: var(--appRadiusSmall);
background-color:lightgrey;;
color: var(--appText);
font-size: 12px;
margin-top: 4px;
cursor: pointer;
`;
const InputImage = styled.input`
display: none;
`;
const Left = styled.div`

`;

const Button = styled.button`
background-color: lightgrey;
width: 100px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-radius:var(--appRadiusSmall)
margin-left: 30px;
margin-top: 30px;
transition: all 350ms;
cursor: pointer;
`;
const ButtonHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`;
const Input = styled.input`
width: 400px;
height:40px;
border:none;
outline: none;

::placeholder{
    padding: 15px;
    font-size: 15px;
    color: silver;
}
`;
const InputHolder = styled.div`
width: 400px;
height:40px;
border: 1px solid var(--appBorder);
margin-top: 20px;
`;
const Right = styled.div`
width: 500px;
position: relative;
`;

// const Text = styled.div`
// // display: flex;
// // justify-content: center;
// // color:(--appText);
// // width: 100%;
// `;
const Main = styled.div`
width: 1000px;
padding: 20px;
border-radius:var(--appRadiusSmall);
border: 1px solid silver;
display: flex;
`;
const Container = styled.div`
width: 100%;
height: 100vh;
background-color:var(--appBG);
color:var(--appText);
display: flex;
justify-content: center;
align-items: center;
`;