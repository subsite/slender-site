/* Simple two level navigation hierarchy */
export interface Navi {
    page: string;
    name: string;
    sub?: {
        page?: string;
        name?: string;
    }
}
export var NAVI: Navi[] = [
    {
        "page": "suomeksi",
        "name": "Suomeksi",
        "sub": [
            {
                "page": "subsite",
                "name": "SubSite"
            },
            {
                "page": "tuotteet",
                "name": "Tuotteet"
            },
            {
                "page": "referensseja",
                "name": "Referenssejä"
            },
            {
                "page": "yhteys",
                "name": "Yhteys"
            },
            {
                "page": "free-stuff",
                "name": "Free Projects"
            }

        ]
    },
    {
        "page": "in-english",
        "name": "In English",
        "sub": [
            {
                "page": "subsite",
                "name": "SubSite"
            },
            {
                "page": "products",
                "name": "Tuotteet"
            },
            {
                "page": "references",
                "name": "References"
            },
            {
                "page": "contact",
                "name": "Contact"
            },
            {
                "page": "free-stuff",
                "name": "Free Projects"
            }

        ]
    }
    
]

    /* { "page": "foo", "name": "Foo" },
     { "page": "bar", "name": "Bar" } */