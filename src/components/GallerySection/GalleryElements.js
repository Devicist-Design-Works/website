import styled from "styled-components";

export const GalleryContainer = styled.div`
background: whitesmoke;
height: 500px;
max-width:1100px;
margin: 40px auto;
display: flex;
`;

export const Column1 = styled.div`
flex: 1.5;

`
export const Column2 = styled.div`
flex: 1;
background: blue;
padding: 40px;
`

export const ActivePhoto = styled.div`
background: red;
height: 65%;
width:100%
`
export const PhotoGrid = styled.div`
background: yellow;
height:35%;
display: flex;
flex-wrap: wrap;
`

export const Thumbnail = styled.div`
background: purple;
height:50%;
width: 25%;
border: 1px solid black;
`