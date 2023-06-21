import { useState } from "react";
import { Link } from "react-router-dom";
import { FooterContainer } from "./Styled/Container-styled";
import { FooterItem } from "./Styled/City-Styled";
import { Add } from "./Styled/City-Styled";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import myCities from "../Pages/MyCities";



export default function Footer() {
    const [cityPage, setCityPage] = useState(false);

    const handleOnClick = () => {
        setCityPage(<myCities />);
    }


    return (
        <>
        <FooterContainer>
            <FooterItem>
                <Link to='/myCities'>
                <Add  icon={faAdd} size="xl" color="white" />
                </Link>
            </FooterItem>
        </FooterContainer>
        </>
    );
}