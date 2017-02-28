## Create a new LoopBack application

You can do so by typing `lb` or `lb app` and this will invoke the generator.

The first step is to name the application.

### What's the name of your application?
```
     _-----_
    |       |    ╭──────────────────────────╮
    |--(o)--|    │  Let's create a LoopBack │
   `---------´   │       application!       │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? What's the name of your application? marketplace
```

### Enter name of the directory to contain the project:
```
     _-----_
    |       |    ╭──────────────────────────╮
    |--(o)--|    │  Let's create a LoopBack │
   `---------´   │       application!       │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? What's the name of your application? marketplace
? Enter name of the directory to contain the project: (workshop-marketplace)
```

The next step is simply to choose the name of the directory that you are going to build out the application into. By default, it assumes you would like to create a directory with the same name as the application that you have given in the previous step. Hitting enter will do the default, but if you want to name your directory something else, you can do so here. You may have already created this directory name and are in it within the terminal, in which case, you can simply type `.` to denote the 'current directory'.

You'll notice in the next step that the prompt informs you that it created the directory and has navigated into that directory for building the application. Note that when completed, you will be in the same directory in which you started, which may be one level above your new working directory.

### Which version of LoopBack would you like to use?

```
     _-----_
    |       |    ╭──────────────────────────╮
    |--(o)--|    │  Let's create a LoopBack │
   `---------´   │       application!       │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? What's the name of your application? marketplace
? Enter name of the directory to contain the project: (workshop-marketplace)
   create marketplace/
     info change the working directory to marketplace
? Which version of LoopBack would you like to use? (Use arrow keys)
  2.x (long term support)
❯ 3.x (current)
```

LoopBack is now on version 3, but version 2 is still being supported. It is advised to use the current version of LoopBack (`3.x`) which is chosen by default.

### What kind of application do you have in mind?
```
     _-----_
    |       |    ╭──────────────────────────╮
    |--(o)--|    │  Let's create a LoopBack │
   `---------´   │       application!       │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? What's the name of your application? marketplace
? Enter name of the directory to contain the project: (workshop-marketplace)
   create marketplace/
     info change the working directory to marketplace
? Which version of LoopBack would you like to use? 3.x (current)
? What kind of application do you have in mind? (Use arrow keys)
❯ api-server (A LoopBack API server with local User auth)
  empty-server (An empty LoopBack API, without any configured models or datasources)
  hello-world (A project containing a controller, including a single vanilla Message and a single remote method)
  notes (A project containing a basic working example, including a memory database)
```

The user is presented with 4 options as starting points for scaffolding a LoopBack application.

- api-server (A LoopBack API server with local User auth)
- empty-server (An empty LoopBack API, without any configured models or datasources)
- hello-world (A project containing a controller, including a single vanilla Message and
 a single remote method)
- notes (A project containing a basic working example, including a memory database)

We will choose the default option as it is useful to have a built-in User model to extend from when building our model for our users.

_Note: as alluded to above, it is discouraged to use the base model directly. Instead, you always should extend built-in models so they may be reused without adverse effects._

_Protip: in the command line, you can type `j` or `k` to navigate up or down._

### Scaffolding application and running `npm install`
```
     _-----_
    |       |    ╭──────────────────────────╮
    |--(o)--|    │  Let's create a LoopBack │
   `---------´   │       application!       │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? What's the name of your application? marketplace
? Enter name of the directory to contain the project: (workshop-marketplace)
   create marketplace/
     info change the working directory to marketplace
? Which version of LoopBack would you like to use? 3.x (current)
? What kind of application do you have in mind? api-server (A LoopBack API server with local User auth)
Generating .yo-rc.json


I'm all done. Running npm install for you to install the required dependencies. If this fails, try running the command yourself.


   create .editorconfig
   create .eslintignore
   create .eslintrc
   create server/boot/root.js
   create server/middleware.development.json
   create server/middleware.json
   create server/server.js
   create README.md
   create server/boot/authentication.js
   create .gitignore
   create client/README.md
```

At this point, your application has been scaffolded and then the generator runs `npm install` to retrieve all of your external dependences. This may take a moment, depending on your internet connection. Do not be alarmed by the many modules that are installed. Node.js has a large ecosystem of many small modules, in an effort to reduce duplication of effort. NPM, the node package manager, handles these modules in a smart and efficient manner.

Once the installation of external modules is complete, you will see a listing of these modules in a tree structure.

### Handy next steps for your convenience

```
Next steps:

  Create a model in your app
    $ lb model

  Run the app
    $ node .

The API Connect team at IBM happily continues to develop,
support and maintain LoopBack, which is at the core of
API Connect. When your APIs need robust management and
security options, please check out http://ibm.biz/tryAPIC
```

At this point, your application foundation is ready. The terminal outputs some helpful next steps to continue development. The first being to `cd` (change directory) into the directory of your application. You are also given the command to create your first model which will be used to build the corresponding API. And you are also told how to run your application. Let's move along to the model/API step.

**Next Step:** [Link a Datasource](01-link-datasource.md)
