import { SmallContainer } from './Styled/Container-styled';
import { SmallCard } from './Styled/City-Styled';

export default function Bonus() {
    return (
        <>
        <SmallContainer>
            <SmallCard>UV Index</SmallCard>
            <SmallCard>Sunrise</SmallCard>
            <SmallCard>Wind</SmallCard>
            <SmallCard>Sunset</SmallCard>
        </SmallContainer>
        </>
    );
}