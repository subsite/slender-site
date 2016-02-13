export var CONF: any = {
    
    pageroot: '/pages', // Root url for markdown pages
    
    navi: [             // Navigation tree
        {
            page: "foobar", // First = default
            name: "Foobar",
            sub: [
                {
                    page: "foo", // First = default
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
