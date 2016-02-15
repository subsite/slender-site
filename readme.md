## About

This is a simple Angular2 website framework for no-nonsense sites with nothing but content.

**Features**
- Very short source code
- Two level navigational hierarchy
- Markdown parsing using *marked.js*
- Sample css 

**Why?**

This is really a just testbead for Angular2, but it is currently in production here: http://www.subsite.fi/in-english

## ToDo

- Code restructuring, probably
- Make navigational depth unlimited
- Swap ot marked.js to Angular2 library when available
- Use upcoming new features of Angular2

## Installation

Clone the repository, then:

    npm install
    npm start 



## Local configuration

 1. Edit the file conf.ts 
 2. Replace everything in *content/pages* with markdown files structured as in conf.ts
 3. Edit or replace *app/app.html* and everything in assets 
 4. If you plan to use git to fetch updates, edit .gitignore to ignore itself and everything you want to keep. No guarantees an upgrade won't break you site anyway...

HINT: Visual Studio Code is good for editing angular2, it also has real-time markdown preview.


## Directory structure

```
├── app
│   ├── loader 
│   │   ├── loader.html 
│   │   ├── loader.component.ts
│   │   └── loader.service.ts
│   ├── navi 
│   │   └── navi-service.ts
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
   
   