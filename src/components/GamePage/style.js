import Styled from 'styled-components'

export const Bg = Styled.div`
  width: 100vw;
  min-height:100vh;
  max-height: auto;
  background-color: #223a5f;
  padding: 20px;
`
export const HeaderCont = Styled.div`
border:0.5px solid white;
color:white;
padding:10px;
border-radius:10px;
display:flex;
justify-content:space-between;
align-items:center;`

export const Heading = Styled.h1`
font-size:16px;
color:${props => props.color}
font-family:"Roboto";
`
export const ScoreCont = Styled.div`
background-color:white;
padding:10px;
border-radius:10px;
color:black;
text-align:center;`

export const ItemsCont = Styled.ul`
width:50%;
height:50%;
display:flex;
justify-content:center;
flex-wrap:wrap;
list-style:none;`

export const Img = Styled.img`
width:100px;
margin-right:10px;`

export const Score = Styled.p`
font-family:"Roboto";`
