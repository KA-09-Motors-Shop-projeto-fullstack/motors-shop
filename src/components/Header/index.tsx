import React, { ReactNode, useContext } from "react";
import {
  HeaderStyle,
  Ul,
  Container,
  Line,
  DropdownMenuTriggerDesktop,
  DropdownMenuContentDesktop,
  DropdownMenuItemDesktop,
  NavMobile,
  NavDesktop,
  DropdownMenuTriggerMobile,
  DropdownMenuContentMobile,
  DropdownMenuItemMobile,
} from "./styles";
import Logo from "../../assets/LogoHeader.svg";
import { Link as LinkScroll } from "react-scroll";
import { NavLink, useHistory } from "react-router-dom";
import { Button } from "../Button";
import { Avatar } from "../Avatar";
import { UserContext } from "../../providers/Users";
import { UserContextType } from "../../@types/users";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { logout } from "../../services/auth";
import { formatNameToTwoWords } from "../../utils/format-name-to-two-words";
import { GiHamburgerMenu } from "react-icons/gi";
import { ModalContext } from "@/providers/Modals";
import { ModalContextType } from "@/types/modals";
import { ModalEditProfile } from "../Modal/EditProfile";
import { ModalEditAddress } from "@/components/Modal/EditAddress";

interface IPropsHeader {
  children?: ReactNode;
}

export const Header: React.FC<IPropsHeader> = ({ children }) => {
  const { userLogged } = useContext(UserContext) as UserContextType;
  const { openModalEditProfile, openModalEditAddress } = useContext(
    ModalContext
  ) as ModalContextType;

  // Funções para rotas
  const history = useHistory();
  const goHome = () => history.push("/");
  const goSignup = () => history.push("/signup");
  const goProfile = () => history.push("/profile");
  const goLogin = () => history.push("/login");

  return (
    <>
      <ModalEditProfile />
      <ModalEditAddress />
      <HeaderStyle>
        <img src={Logo} alt="Motors Shop" onClick={() => goHome()} />
        <NavMobile>
          <DropdownMenu.Root>
            <DropdownMenuTriggerMobile>
              <GiHamburgerMenu size={30} />
            </DropdownMenuTriggerMobile>
            <DropdownMenu.Portal>
              <DropdownMenuContentMobile>
                <DropdownMenu.Group>
                  <DropdownMenuItemMobile>Carros</DropdownMenuItemMobile>
                  <DropdownMenuItemMobile>Motos</DropdownMenuItemMobile>
                  <DropdownMenuItemMobile>Leilão</DropdownMenuItemMobile>
                </DropdownMenu.Group>
                <DropdownMenu.Separator
                  style={{ height: 1, backgroundColor: "#ADB5BD" }}
                />
                <DropdownMenu.Group>
                  {userLogged ? (
                    <></>
                  ) : (
                    <>
                      <DropdownMenuItemMobile onClick={goLogin}>
                        Fazer login
                      </DropdownMenuItemMobile>
                      <DropdownMenuItemMobile>
                        <Button
                          onClick={goSignup}
                          style={{ width: "100%" }}
                          typeButton="outline2"
                          typeFont="big"
                        >
                          Cadastrar
                        </Button>
                      </DropdownMenuItemMobile>
                    </>
                  )}
                </DropdownMenu.Group>
              </DropdownMenuContentMobile>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </NavMobile>
        <NavDesktop>
          <Ul>
            <li>
              <LinkScroll
                activeClass="active"
                to="carros"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Carros
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                activeClass="active"
                to="motos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Motos
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                activeClass="active"
                to="leilão"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Leilão
              </LinkScroll>
            </li>
            <Line />

            {userLogged ? (
              <DropdownMenu.Root>
                <DropdownMenuTriggerDesktop>
                  <Avatar
                    color={userLogged.avatarColor}
                    name={userLogged.name}
                    fontSize={14}
                    size={32}
                  />
                  <h4>{formatNameToTwoWords(userLogged.name)}</h4>
                </DropdownMenuTriggerDesktop>
                <DropdownMenu.Portal>
                  <DropdownMenuContentDesktop>
                    <DropdownMenuItemDesktop onClick={goProfile}>
                      Perfil
                    </DropdownMenuItemDesktop>
                    <DropdownMenuItemDesktop onClick={openModalEditProfile}>
                      Editar perfil
                    </DropdownMenuItemDesktop>
                    <DropdownMenuItemDesktop onClick={openModalEditAddress}>
                      Editar endereço
                    </DropdownMenuItemDesktop>
                    <DropdownMenuItemDesktop>
                      Minhas Compras
                    </DropdownMenuItemDesktop>
                    <DropdownMenuItemDesktop onClick={logout}>
                      Sair
                    </DropdownMenuItemDesktop>
                  </DropdownMenuContentDesktop>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            ) : (
              <>
                <li>
                  <NavLink activeStyle={{ color: "#4529E6" }} to="/login">
                    Entrar
                  </NavLink>
                </li>
                <li>
                  <Button
                    onClick={goSignup}
                    typeFont="big"
                    typeButton="outline2"
                  >
                    Cadastrar
                  </Button>
                </li>
              </>
            )}
          </Ul>
        </NavDesktop>
      </HeaderStyle>
    </>
  );
};
