export var CONF: any = {
    
    pageroot: '/content/pages', // Root url for markdown pages
    
    navi: [             // Navigation tree
        {
            page: "about", // First = default folder
            name: "About",
            sub: [
                {
                    page: "about", // First = default page
                    name: "About",
                    custom_url: "/readme.md" // Overriding url (full url with extension)
                }
            ]
        },
        {
            page: "foobar", 
            name: "Foobar",
            sub: [
                {
                    page: "foo", 
                    name: "Foo",
                    
                },
                {
                    page: "bar",
                    name: "Bar"
                }
            ]
        },
        {
            page: "lipsum",
            name: "Lorem Ipsum",
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
