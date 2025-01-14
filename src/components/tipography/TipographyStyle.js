import styled from "styled-components";

export const Paragraph = styled.p`
  color: var(--light-white);
  margin-top: 0.7em;
`;

export const ItalicParagraph = styled(Paragraph)`
  color: #edcca4;
  margin-top: 0.7em;
  font-style: italic;
`;

export const SecundaryParagraph = styled(Paragraph) `
color: red;
`

export const LinkStyle = styled.span`
color: var(--yellow);
`

export const DefaultTitle = styled.p`
text-align: center;
font-size: 1.5em;
margin: 0.7em;
color: var(--light-white);
font-family: 'Courgette', cursive;

`
export const ResumeTitle = styled.h2`
color: var(--dark-orange);
font-weight: bold;
font-size: 1.2em;
`