import styled from 'styled-components';


export const ContactsNav = styled.div`
  text-align: right;
  padding-left: 50px;
  color: #fff;
`;

export const Styles = styled.div`

  .navbar { 
    overlfow: hidden;
    white-space: nowrap;
    display:flex;
    font-size: 0.9em;
    background-image: linear-gradient(#000, #91A937, #7F7F7D, #7F7F7D); background-repeat: no-repeat;
    background-attachment: fixed; 
  }
  .navbar-light a.nav-link {
   
    color: #91A937;
    &:hover { color: #fff; }
    
  }
  .navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
    color: #91A937;
  }

  .navbar-brand {
    font-size: 2em;
    font-weight: bold;
    color: #91A937;
    &:hover { color: white; }
    display: flex;
    align-items: right;
  }

  .dropdown-menu {
    background-color: #91A937;
    opacity: 0.9;
  }
  

`;