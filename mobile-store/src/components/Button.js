import styled from 'styled-components';


export const ButttonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background: transparent;
border:0.05rem solid var(--lightBlue);
border-color:${props=> props.cart?"var(-mainYellow)":"var(--lightBlue)"};
color:var(--lightblue);
cursor:pointer;
transition: all 0.5s ease-in-out;
&:hover{
    background:var(--lightBlue);
    color:var(--mainBlue);

}
&:focus{
    outline:none;
}
`;