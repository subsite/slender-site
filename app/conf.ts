export var CONF: any = {
    
    pageroot: '/pages', // Root url for markdown pages
    
    navi: [             // Navigation tree
        {
            page: "about", // First = default folder
            name: "About",
            sub: [
                {
                    page: "about", // First = default page
                    name: "About"
                }
            ]
        },
        {
            page: "foobar", 
            name: "Foobar",
            sub: [
                {
                    page: "foo", 
                    name: "Foo"
                },
                {
                    page: "bar",
                    name: "Bar"
                }
            ]
        },
        {
            page: "lipsum",
            name: "Lipsum",
            sub: [
                {
                    page: "lorem",
                    name: "Lorem"
                },
                {
                    page: "ipsum",
                    name: "Ipsum"
                }
            ]
        }
    ]
}
