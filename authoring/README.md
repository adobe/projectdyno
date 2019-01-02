# Introduction

The Project Dyno Authoring tool is an electron app that is used to create and configure Tours.  It is designed to be user friendly and make it simple for non-engineers to create tours.

# Workflow

- A user opens a page they want to work on in the authoring tool.
- If there is a tour on the page already, the user can edit that tour.
- If there isn't a tour on the page, the user can create a new one.
- Once the user has completed the tour, they can export the tour from the authoring tool and deploy it to their web app.

# Appliction Architecture

- A target page is loaded into a webview.
- If needed, the tour guide client is injected into the target page.
- IPC Channels are used to synchronize state between the Authoring Tool and Client.
- The state is exported to a JSON file.  This state is a Tour Guide Configuration Object.

# Autoupdates

- Configuration
- Server

# Build Process

- Getting the latest client
-

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
