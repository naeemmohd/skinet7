For trusting certs 
dotnet dev-certs https --clean
dotnet dev-certs https --check
dotnet dev-certs https 
dotnet dev-certs https --trust
dotnet dev-certs https --check

for hotreload run - 
dotnet watch --no-hot-reload

for scaffolding EF code migration - 
 tool - dotnet tool install --global dotnet-ef --version 7.0.10
 migration - dotnet ef migrations add InitialCreate -o Data/Migrations
 create/update DB - dotnet ef database update


Dotnet commands - 

    for list of commands - dotnew new list

    to add a class library - 
        dotnet new classlib -n Core
        dotnet new classlib -n InfraStructure

    to add projects to solution - 
        dotnet sln add Core
        dotnet sln add InfraStructure

    to add reference or dependency on projects 
        e.g. API depends on Infrastructure and then that depends on Core
        cd API and then - dotnet add reference ../InfraStructure
        cd InfraStructure and then - dotnet add reference ../Core
    
    to refresh above changes 
        cd skinet and then - dotnet restore 

To add a project from CLI to GitHub
    git status
    git init
    git branch -m main

    dotnet new gitignore

    git add -a
    git commit -m "Describe your commit here"

    git remote add origin https://github.com/naeemmohd/skinet7.git


    git config --list
    git config --global user.name "Mohd Naeem"
    git config --global user.email "naeem.mohd@hotmail.com"

    git push origin main

    git config --list
