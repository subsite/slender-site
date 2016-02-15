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
                },
                {
                    page: "angular2", // First = default page
                    name: "Angular2",
                    custom_url: "http://raw.githubusercontent.com/angular/angular/master/README.md",
                    page_as_header: true // show markdown page from tree before custom_url content
                }
            ]
        },
        {
            page: "foobar", 
            name: "Example pages",
            sub: [
                {
                    page: "foo", 
                    name: "Example 1",
                    
                },
                {
                    page: "bar",
                    name: "Example 2"
                }
            ]
        }
    ]
}
