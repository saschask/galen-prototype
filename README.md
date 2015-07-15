# galen-prototype
Small prototype to show the general workflows and basic features of Galen Framework.

## Available Grunt tasks

### Basic tasks
- `grunt clean`: Cleans the `build` folder.
- `grunt copy`: Copies all relevant folders and files from the `source` folder into the `build` folder.
- `grunt build`: Executes the `clean` and `copy` task.
- `grunt connect`: Starts a local server which is available at [http://localhost:8000](http://localhost:8000).
- `grunt watch`: Starts monitoring of all relevant files inside of the `source` folder and executes several targets of the `copy` task in case of changes. Please note that *livereload* is activated so you do not need to reload the browser on your own.
- `grunt shell`: Executes several commands in the global shell which is basically used for the execution of Galen Framework test files.

### Main tasks
- **`grunt start`**: Should be used for local development of the frontend. Executes the `build`, `connect` and `watch` task.
- **`grunt testSpec`**: Executes the `build`, `connect` and `shell:galenSpec` task for running all the Galen Framework tests defined in files that match `tests/galenframework/spec-*.spec`. 
- **`grunt testSuite`**: Executes the `build`, `connect` and `shell:galenSuite` task for running all the Galen Framework tests defined in files that match `tests/galenframework/suite-*.test`.

## Further informations

### Selenium browser drivers

Additional Selenium browser drivers are necessary to execute Galen Framework tests in other browsers than Firefox (which is the Selenium default browser). You can already find these driver binaries for Windows in `tests/galenframework/drivers/` and the corresponding configuration in the `Gruntfile.js`' `shell` task.

If you are working on another OS, then please get the respective files at the [Selenium download page](http://www.seleniumhq.org/download/) and adapt the `Gruntfile.js` afterwards.

### Test report

Every time a Galen Framework test has been executed, a `report.html` can be found inside of `reports/galenframework/htmlreport/` with very detailed informations, screenshots and error/warning messages.