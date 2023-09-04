import Icon from 'assets/icons';
import { HeaderSection, Logo, Nav, Search, SearchIcon } from './header.styled';
import { Container } from 'components/Layout/layout.style';

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <Nav>
          <Logo to="/">
            <Icon id="logo" />
            <span>Filmdustry</span>
          </Logo>
          <Search to="/movies">
            <SearchIcon />
          </Search>
        </Nav>
      </Container>
    </HeaderSection>
  );
};

export default Header;
