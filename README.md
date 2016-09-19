# SlenderSite by SubSite

## About

SlenderSite is a simple Angular2 website framework for no-nonsense sites with nothing but content.

- Demo page: http://www.subsite.fi/slender-site/ 
- GitHub repository: https://github.com/subsite/slender-site/

**Features**
- Small source code
- Two level navigational hierarchy
- Markdown parsing using *marked.js*
- Sample css 

**Why?**

This project started out as a testbed for Angular2, but is currently in production here: http://www.subsite.fi/

**WARNING**

This framework *"should"* work, but I offer no guarantees. Don't use on a production site unless you know what you are doing, and be extremely careful with merging in new versions. 

## ToDo

- Make navigational depth unlimited. The angular2-router is apparently still under heavy development, so we'll leave it alone for the moment.
- Swap ot marked.js to Angular2 library when available
- Use other upcoming new features of Angular2


## Found a bug? Want to comment?

Use the issue tracker of this repository to file found bugs, opinions. Feel free to fork and pull-request! This is a side project for me, so I can't guarantee bugs will be fixed very fast or at all... I'll try, though. 

## Installation

Clone the repository and compile the source. Remember --recursive flag to get submodule.
    
    git clone --recursive https://github.com/subsite/slender-site.git
    cd slender-site/
    npm install 
    npm start 

## Local configuration and content

All important local content is under the `local/` folder. The idea is that it should be safe to update the main app (submodule app) without having to fix anything locally. This feature is still under development, so no guarantees...

 1. Edit the file *local/conf.ts* 
 2. Replace everything in *local/content/pages* with markdown files structured as in conf.ts
 3. Edit or files in *local/templates* and *local/assets*
 4. Edit index.html changing the title-tag
 5. `npm start` and see if it works!

HINT: Visual Studio Code is good for editing angular2, it also features real-time markdown preview.


## Update main app (keeping local changes)

**N.B. This will only work for v1.1.0 and newer installations. If you use an older version, your best bet is to make a new clone (--recursive) and copy your markdown-pages and other content to the new local-folder**

New features and vendor code upgrades will be commited to app submodule. In order not to have to manually edit you local package.json and other system conf files, you can run the npm script `build-conf` to update these. Systemjs, tsconfig and typings are overwritten, but package.json is merged (meaning local changes won't be overwritten unless the same key exists in ./app/build-conf/package.json).

    cd slender-site/app
    git pull # pull submodule app
    cd ..
    npm run build-conf # Does the following:
        # COPY ./app/build-conf/systemjs.config.js => ./systemjs.config.js
        # COPY ./app/build-conf/tsconfig.json => ./tsconfig.json
        # COPY ./app/build-conf/typings.json => ./typings.json
        # MERGE ./app/build-conf/package.json => ./package.json 
    npm install
    npm start



## Directory structure

```
├── app # submodule repository https://github.com/subsite/slender-app
│   ├── build-conf
│   │   ├── build-conf.js 
│   │   └── package.json etc...
│   ├── footer 
│   │   └──footer.component.ts
│   ├── loader 
│   │   ├── loader.component.ts
│   │   └── loader.service.ts
│   ├── navi 
│   │   ├── navi.component.ts
│   │   ├── navi-sub.component.ts
│   │   └── navi.service.ts
│   ├── app.component.ts
│   └── main.ts
│
│ # repository https://github.com/subsite/slender-site  
├── local 
│   ├── assets
│   │   ├── css
│   │   └──img
│   ├── content
│   │   ├── img
│   │   └──pages
│   ├── templates
│   │   ├── app.template.html
│   │   ├── footer.template.html
│   │   ├── navi.template.html
│   │   └── navi-sub.template.html
│   └── conf.ts
│ 
├── index.html
├── package.json
├── systemjs.config.js
├── tsconfig.json
├── typings.json
├── README.md
└── .gitignore
```
   
   
