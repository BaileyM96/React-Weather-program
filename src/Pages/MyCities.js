//TODO have the cities appear when the user clicks the add city button
//The first component can be the search bar
import SearchBar from "../Components/SearchBar";
import { H1 } from "../Components/Styled/Headers/Headers.styled";
import { AddCity } from "../Components/AddCity";




export default function myCities() {
    return (
        <>
        <H1>Weather</H1>
        <SearchBar />
        <AddCity />

        </>
    )
}