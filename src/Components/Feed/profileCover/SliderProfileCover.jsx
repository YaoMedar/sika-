import React, { useState } from 'react';
import styled from "styled-components";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {sliderItems} from "../../../data";
import "./profilecover.scss"

const Container = styled.div`  
    height:200px;
    width:100%;
    display:flex;
    position:relative;
    overflow:hidden;
    

`;
const Arrow = styled.div`
    width: 36px;
    height: 36px;
    background-color: rgb(170, 170, 170,0.6);
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    cursor:pointer;
    opacity:0.8;
    z-index:99;
    left:${props=>props.direction === "left" && "5px"};
    right:${props=>props.direction === "right" && "5px"};
`;
const Wrapper = styled.div`
    height:100%;
    display:flex:
    transform:translateX(${props=>props.sliderIndex* -70}vw);
`;
const Slider = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position:relative;
    width:100%;
`;
const ImgContainer = styled.div`
    width:100%;
`;
const Images = styled.img`
    height:200px;
    width:100%;
    object-fit:cover;
`;
const InfoContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    z-index:3;
    position:absolute;
`;
const Title = styled.h1`
    padding:10px;
    color:black;
`;

const Description = styled.p ` 
    padding:10px;
    color:black;
`;

const SliderProfileCover = () => {
    
    const [sliderIndex,setSliderIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction === "left"){
            setSliderIndex(sliderIndex > 0 ? sliderIndex-1 : 2);
        }else{
            setSliderIndex(sliderIndex < 2 ? sliderIndex+1 : 2);
        }
    };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftIcon className='arrowIcon'/>
        </Arrow>
        <Wrapper sliderIndex={sliderIndex}>
            {sliderItems.map((item)=>(
                <Slider>
                    <ImgContainer>
                        <Images src={item.img} key={item.id}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                    </InfoContainer>
                </Slider>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightIcon className='arrowIcon'/>
        </Arrow>
    </Container>
  )
}

export default SliderProfileCover
