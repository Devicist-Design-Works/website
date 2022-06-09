import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const NavContainer = styled.nav`
  margin: auto;
  width: 100%;
  max-width: 1100px;
  height: 80px;
  display: flex;
`;

export const NavLogo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 50%;
`;

export const NavTitle = styled.div`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  flex: 3;
`;

export const NavContact = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled(LinkS)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
`;
