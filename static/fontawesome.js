import { library } from '@fortawesome/fontawesome-svg-core'

import {
    // Nav
    faDungeon, 
    faSearch, 
    faShoppingCart,   
    // Panels
    faPlus, 
    faMinus, 
    faTimes, 
    faStar,
    // Carousel 
    faChevronRight, 
    faChevronLeft,
    // Product
    faLongArrowAltLeft,
    // Sort Bar
    faAngleDown,
    // Upload
    faUpload
} from '@fortawesome/free-solid-svg-icons'

import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
// Footer
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


library.add(
    faDungeon, faSearch, faShoppingCart,
    faPlus, faMinus, faTimes, faStar, farStar,
    faChevronRight, faChevronLeft,
    faLongArrowAltLeft,
    faAngleDown,
    faUpload,
    faTwitter, faInstagram, faLinkedin
)
