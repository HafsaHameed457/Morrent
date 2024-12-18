import styled from "styled-components";

export const NavbarContainer: React.FC<any> = styled.div`
  display: flex;
  font-size: 1.2rem;
  height: 124px;

  padding: 0 5rem;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #c3d4e966;
  @media (max-width: 768px) {
    padding: 20px;
    height: auto;
  }

  @media (max-width: 480px) {
    padding: 10px;
    height: auto;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
      255,
      255,
      255,
      0.5
    ); /* White color with 50% opacity */
    z-index: -1;
  }
  a {
    cursor: pointer;
  }
`;

export const NavLink = styled.a`
  color: #19124f;

  font-size: 20px;

  font-weight: 500;

  cursor: pointer;
  text-decoration: none;
  font-style: italics;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  a {
    cursor: pointer;
  }
`;
