import styled from 'styled-components';


export const Heading = styled.div`
  margin: auto;
  position: relative;
  left: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 360px;
  padding-right: 360px;
  border-radius: 20px;
  background-image: linear-gradient(rgba(127, 169, 55, 0.6), rgba(127, 169, 55, 0.2));
`;

export const GridWrapper = styled.div`
  padding-top: 50px;
  width: 1000px;
  margin: 0 auto;
  display: grid;
  color: white;
  grid-gap: 50px 50px;
  padding-bottom: 50px;

  .card-deck {
    margin: auto;
  }
  .carousel-solutions {
    .card {
      height: 480px;
    }
    .carousel-control-prev, .carousel-control-next {
      margin: -100px;
    }
    .carousel-indicators {
      margin: -25px;
    }
  }

  .carousel-text{
    width:500px;
    height:100%;
    position: relative;
    background-color: rgba(145, 169, 55, 0.4);
    border-radius: 20px;
    padding-top: 100px;
    .carousel-inner {
      padding 40px;
    }
    .carousel-control-prev-icon, .carousel-control-next-icon {
      opacity: 0;
    }
  }
  
  .car-img {
    postion: absolute;
    height:300px;
    width: 100px;
    margin: auto;
  }
  .card {
    background-color: rgba(145, 169, 55, 0.4);
    border-radius: 20px;
    font-size: 12px;

  }

  img, .carousel-inner {
    object-fit: cover;
    border-radius: 20px;
  }

  .carousel-logos {
    background-color: rgba(127, 127, 125, 0.4);
    font-size: 15px;
  }

  .logos {
    padding: 0 50px 0 50px;
  }
  form {
    position: relative;
    left 10px;
    width: 50%;
    border-radius: 20px;
    background-color: rgba(127, 127, 125, 0.4);
    padding: 20px;
  }

  .row {
    position: relative;
    left 10px;
    width 1000px;
  }

`;