// import React from "react"
// import { Helmet } from "react-helmet"
// import Header from '../components/header'
// import '../styles/layout.css'
// import Footer from '../components/footer'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'

import React from "react"
import { Helmet } from "react-helmet"
import Header from '../components/header'
import '../styles/layout.css'
import Footer from '../components/footer'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"


const Layout = ({ children, intl }) => {
    return (
        <div>
            <Helmet>
                <title>
                    Bagimsiz Akademi
                    {/* {breadcrumbs ? ` - ${breadcrumbs.join(" - ")}` : ``} */}
                </title>
                <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
            </Helmet>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}


export default injectIntl(Layout)



// export default function Layout({ children, breadcrumbs }) {
//     return (
//         <div>
//             <Helmet>
//                 <title>
//                     Bagimsiz Akademi
//             {breadcrumbs ? ` - ${breadcrumbs.join(" - ")}` : ``}
//                 </title>
//                 <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
//             </Helmet>
//             <Header />
//             <main>{children}</main>
//             <Footer />
//         </div>
//     )
// }