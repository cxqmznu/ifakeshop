# Run this script to push the project to GitHub
# Requires Git: https://git-scm.com/download/win

Set-Location -LiteralPath (Split-Path -Parent $MyInvocation.MyCommand.Path)

git init
git add .
git commit -m "Initial commit: iFakeShop - fictional shopping universe"
git branch -M main
git remote add origin https://github.com/cxqmznu/ifakeshop.git
git push -u origin main

Write-Host "Done! Project pushed to https://github.com/cxqmznu/ifakeshop"
