import styled from 'styled-components';

export const Wrapper = styled.div`

    padding-top: 50px;
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    color: #fff;
    grid-gap: 50px 50px;
    padding-bottom: 50px;


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