export var CONF: any = {
    
    pageroot: '/pages', // Root url for markdown pages
    
    navi: [             // Navigation tree
        {
            page: "suomeksi", // First = default
            name: "Suomeksi",
            sub: [
                {
                    page: "subsite", // First = default
                    name: "SubSite"
                },
                {
                    page: "tuotteet",
                    name: "Tuotteet"
                },
                {
                    page: "referensseja",
                    name: "Referenssejä"
                },
                {
                    page: "yhteys",
                    name: "Yhteys"
                },
                {
                    page: "free-stuff",
                    name: "Free Projects"
                }

            ]
        },
        {
            page: "in-english",
            name: "In English",
            sub: [
                {
                    page: "subsite",
                    name: "SubSite"
                },
                {
                    page: "products",
                    name: "Products"
                },
                {
                    page: "references",
                    name: "References"
                },
                {
                    page: "contact",
                    name: "Contact"
                },
                {
                    page: "free-stuff",
                    name: "Free Projects"
                }
            ]
        }
    ]
}
