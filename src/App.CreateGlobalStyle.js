import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: "Roboto";
  src: local("Roboto"), local("Roboto"),
    url("../fonts/Roboto-Black") format("ttf"),
    url("../fonts/Roboto-BlackItalic") format("ttf");
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
  color: #000000;
}

div,
button,
a {
  font-family: 'Roboto', sans-serif;
}

body {
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  color: #000000;
}
`;

export default GlobalStyle;
