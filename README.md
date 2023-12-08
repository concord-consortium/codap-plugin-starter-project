# CODAP Plugin Starter Project

 This is simply a React view with the libraries for using the [CODAP Plugin API](https://github.com/concord-consortium/codap/wiki/CODAP-Data-Interactive-Plugin-API).

## Development

### Copying a starter project
You can use [degit](https://www.npmjs.com/package/degit) to make clone this repo to make your plugin.

OR

1. Create a new public repository for your project (e.g. `new-repository`)
2. Create a clone of the starter repo
    ```
    git clone --single-branch https://github.com/concord-consortium/codap-plugin-starter-project.git new-repository
    ```
3. Update the starter repo

    First, update and run the starter project:
    ```
    cd new-repository
    npm install
    npm update
    npm start
    ```
    Then, verify the project works by visiting [localhost:8080](http://localhost:8080). Note that after a few seconds, you will see an `Uncaught runtime errors`. This is because the plugin is looking for CODAP. You should not see this error if the plugin is embedded in CODAP.

### Initial steps

1. Clone this repo and `cd` into it
2. Run `npm install` to pull dependencies
3. Run `npm start` to run `webpack-dev-server` in development mode with hot module replacement

## Testing the plugin in CODAP

Currently there is no trivial way to load a plugin running on a local server with `http` into the online CODAP, which forces `https`. One simple solution is to download the latest `build_[...].zip` file from https://codap.concord.org/releases/zips/, extract it to a folder and run it locally. If CODAP is running on port 8081, and this project is running by default on 3000, you can go to

http://127.0.0.1:8081/static/dg/en/cert/index.html?di=http://localhost:8080

to see the plugin running in CODAP.

For further information on [CODAP Data Interactive Plugin API](https://github.com/concord-consortium/codap/wiki/CODAP-Data-Interactive-Plugin-API),
