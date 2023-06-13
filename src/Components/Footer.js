//TODO Add a footer to the bottom of the page to allow users to search for a city and possibly save and view the cities when they look at the app.
import { FooterContainer } from "./Styled/Container-styled";
import { FooterItem } from "./Styled/City-Styled";
import Search from "./SearchBar";
//Fontawesome Icons
import { FontAwesomeDesign } from "./Styled/City-Styled";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
    return (
        <>
        <FooterContainer>
            <FooterItem>
                <Search />
                {/* <FontAwesomeDesign icon={faSearch} size="2xl" /> */}
            </FooterItem>
        </FooterContainer>
        </>
    );
}