# SlenderSite by SubSite

## About

SlenderSite is a simple Angular2 website system for no-nonsense sites with nothing but content.

- Demo page: http://www.subsite.fi/slender-site/ 
- GitHub repository: https://github.com/subsite/slender-site/

**Features**
- Small source code
- Two level navigational hierarchy
- Markdown parsing using *marked.js*
- Sample css 

**Why?**

This is really just a testbead for Angular2, but it is currently in production here: http://www.subsite.fi/

## ToDo

- Make navigational depth unlimited. The angular2-router is apparently still under heavy development, so we'll leave it alone for the moment.
- Swap ot marked.js to Angular2 library when available
- Use other upcoming new features of Angular2

## Found a bug? Want to comment?

Use the issue tracker of this repository to file found bugs, opinions. Feel free to fork and pull-request! Angular2 is still beta, and thus lacking in documentation and prone to change. Some of this code - and coding style - might become obsolete as angular2 developes further. We'll be glad to hear your comments concerning this also!

## Installation

Clone the repository and compile the source:
    
    git clone https://github.com/subsite/slender-site.git
    cd slender-site/
    npm install && npm start 


## Local configuration

 1. Edit the file conf.ts 
 2. Replace everything in *content/pages* with markdown files structured as in conf.ts
 3. Edit or replace *app/app.html* and everything in assets 
 4. If you plan to use git to fetch updates, edit .gitignore to ignore itself and everything you want to keep. No guarantees an upgrade won't break you site anyway...

HINT: Visual Studio Code is good for editing angular2, it also features real-time markdown preview.


## Directory structure

```
├── app
│   ├── footer 
│   │   ├── footer.component.ts
│   ├── loader 
│   │   ├── loader.html 
│   │   ├── loader.component.ts
│   │   └── loader.service.ts
│   ├── navi 
│   │   ├── navi.component.ts
│   │   ├── navi-sub.component.ts
│   │   └── navi.service.ts
│   ├── app.html
│   ├── app.component.ts
│   ├── conf.ts 
│   └── main.ts
├── assets
│   ├── css
│   └── img
├── content
│   ├── img
│   └── pages
├── index.html
├── package.json
├── readme.md
└── .gitignore
```
   
   
