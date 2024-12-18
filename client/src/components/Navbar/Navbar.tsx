import Favorite from "../../assets/favourite.svg";
import Logo from "../../assets/logo.svg";
import Notification from "../../assets/notification.svg";
import Profile from "../../assets/profile.svg";
import Settings from "../../assets/settings.svg";
import useRouter from "../../hooks/useRouter";
import useMediaQuery from "../helpers/MediaQuery";
import { LeftSection, NavbarContainer } from "./Navbar.styled";

const Navbar: React.FC = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 750px)");

  return (
    <NavbarContainer
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        flexDirection: isMobile ? "column" : "row",
        zIndex: 100,
        backgroundColor: "#fff",
      }}
    >
      <a onClick={() => router.navigate("/")}>
        <img src={Logo} alt="Logo" />
      </a>

      <LeftSection>
        <a onClick={() => router.navigate("/")}>
          <img src={Favorite} alt="Favourite" />
        </a>
        <a onClick={() => router.navigate("/")}>
          <img src={Notification} alt="Notification" />
        </a>
        <a onClick={() => router.navigate("/")}>
          <img src={Settings} alt="Settings" />
        </a>
        <a onClick={() => router.navigate("/")}>
          <img src={Profile} alt="Profile" />
        </a>
      </LeftSection>
    </NavbarContainer>
  );
};

export default Navbar;
