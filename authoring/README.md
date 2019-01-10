# Introduction

The Project Dyno Authoring Tool is an electron app that is used to create and configure Tours.  It is designed to be user friendly and make it simple for non-engineers to create tours.

# Workflow

When using the Project Dyno Authoring Tool a user follows this basic workflow:

- A user opens a page where they want to create or edit a tour.
- If there is a tour on the page already, the user can edit that tour.
- If there isn't a tour on the page, the user can create a new one.
- Once the user has completed the tour, they can export the tour from the authoring tool and deploy it to their web app.

# Application Architecture

The Project Dyno Authoring Tool is an [Electron](http://electronjs.org) app that utilizes [react](http://reactjs.org) and [redux](http://redux.js.org).  It was written in [TypeScript](https://www.typescriptlang.org/).

- A target page is loaded into a webview.
- If needed, the tour guide client is injected into the target page.
- IPC Channels are used to synchronize state between the Authoring Tool and Client.
- The state is exported to a JSON file.  This state is a Tour Guide Configuration Object.

# Autoupdates

- Configuration
- Server

# Build Process

The authoring tool is built using [electron builder](https://www.electron.build/).  Electron builder can produce builds for both Windows and MacOS.  Currently, a windows build needs to be built on a windows machine and a Mac OS build needs to be built on a mac. The build scripts are located in the `authoring/scripts/` folder and are run using the `yarn build` command.

> Note: Before initiating the build process, make sure the latest version of the client is available.

# Exported ZIP file.

The authoring tool's export feature creaete's a zip file the following contents:

```
├── README.md
├── tour-guide-config.json
└── tour-guide-scripts
    ├── tour-guide-initializer.js
    └── tour-guide.js
```

- `tour-guide-config.json` This file contains the tour configuration in JSON format.
- `tour-guide-initializer.js` Is a script that can be used to run a tour.
- `tour-guide.js` This contains the Dyno Client.
