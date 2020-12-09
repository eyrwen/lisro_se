// custom typefaces
import "typeface-merriweather"
import "fontsource-montserrat"
import "fontsource-raleway"
import "fontsource-playfair-display"
// normalize CSS across browsers
import "./src/normalize.scss"
// custom CSS styles
import "./src/style.scss"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

// icon library
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faFileAlt, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"

library.add(fab, faTwitter, faGithub, faFileAlt, faPlus, faMinus, faLinkedin)
