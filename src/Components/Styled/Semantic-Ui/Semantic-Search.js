import styled from "styled-components";
import { Input, Button } from "semantic-ui-react";

export const SemanticSearch = styled(Input)`
& input {
    background-color: #474E68 !important;
    color: white !important;
    max-width: none !important;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
&::placeholder {
    color: white !important;
    }
}
`;

export const SemanticButton = styled(Button)`

`;