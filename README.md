# io-core-metarepo
A development metarepo for io-core team

Install lerna and meta as global dependencies with: 

```
sudo npm i -g meta
sudo npm i -g lerna
```

Bootstrap script needs `jq` installed, on macos install it with brew:

```
brew install jq
```
# Usage

From inside io-core-metarepo folder run:

```
sh cmd-init
```

To develop with locally linked projects run:

```
sh cmd-set-mode local
```

To develop with original dependencies taken from package.json:

```
sh cmd-set-mode npm
```

# repo command
The `repo` command replaces `cmd-set-mode`. It's a PoC that allows us to link and unlink local project selectively.

```
# DOC 
# ./repo <link|unlink> <relative_project_path> [absolute_repo_path]

# link local projects only for io-functions-admin
./repo link services/io-functions-admin
```
