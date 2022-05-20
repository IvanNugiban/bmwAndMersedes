import {createGlobalStyle} from "styled-components";


export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  ;
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ;
  body {
    line-height: 1;
    background: url("https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/5-series/2020/highlight1.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1641295515778.jpg") center fixed no-repeat;
    background-size: cover;
    color: white;
  }

  ;
  ol, ul {
    list-style: none;
  }

  ;
  blockquote, q {
    quotes: none;
  }

  ;
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  ;
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ;
`
