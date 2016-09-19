System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CONF;
    return {
        setters:[],
        execute: function() {
            exports_1("CONF", CONF = {
                navi: [
                    {
                        page: "about",
                        name: "About",
                        sub: [
                            {
                                page: "about",
                                name: "About",
                                custom_url: "README.md" // Overriding url (full url with extension)
                            },
                            {
                                page: "angular2",
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
            });
        }
    }
});
//# sourceMappingURL=conf.js.map