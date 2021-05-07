import styled from 'styled-components';

export const Wrapper = styled.div`

    padding-top: 50px;
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    color: #fff;
    grid-gap: 50px 50px;
    padding-bottom: 50px;

    h1 {
        position: relative;
        top: 4em;
        color: #000;
        background-image: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.6));
        width: fit-content;
        border-radius: 0.1em;
        padding: 0.1em 0.5em 0.1em 2em;
        box-shadow: 5px 5px;
    }


    img {
        object-fit: cover;
        border-radius: 20px;
      }

    .car-img-compressed {
        postion: relative;
        z-index: -1;
        margin-top: -300px
    }
    .car-img {
        postion: absolute;
        height:300px;
        width: 1000px;
    }
`;