import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
    tr: "Turkce",
    en: "English",
    ku: "Kurdî",
}

const Language = () => (
    <div>
        <IntlContextConsumer>
            {({ languages, language: currentLocale }) =>
                languages.map(language => (
                    <a
                        key={language}
                        onClick={() => changeLocale(language)}
                        style={{
                            color: currentLocale === language ? `yellow` : `white`,
                            margin: 10,
                            textDecoration: `underline`,
                            cursor: `pointer`,
                            zIndex: '9999'
                        }}
                    >
                        {languageName[language]}
                    </a>
                ))
            }
        </IntlContextConsumer>
    </div>
)

export default Language