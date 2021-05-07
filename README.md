# io-core-metarepo
A development metarepo for io-core team

NOTES: 
* Clone this repository inside a new folder because it will create siblings folders for other cloned repositories once used.
* Install lerna and meta as global dependencies

# Usage

From inside io-core-metarepo folder run:
* yarn install
* meta git update
* lerna bootstrap -- --frozen-lockfile

This process should create sibling folders calle utils, commons and services that contain io-core repositories.

You can operate on repos as usually, local repositories are linked by lerna. You can run meta commands to make git operations, and lerna commands to build any project with its referenced ones.

# Todo
Check if local lerna and package json are still needed.
