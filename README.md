# io-core-metarepo
A development metarepo for io-core team

Install lerna and meta as global dependencies with: 

```
sudo npm i -g meta
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

# repo command
The `repo` command replaces `cmd-set-mode`. It's a PoC that allows us to link and unlink local project selectively.

```
# DOC 
# ./repo <link|unlink> <relative_project_path> [absolute_repo_path]

# link local projects only for io-functions-admin
./repo link services/io-functions-admin
```
