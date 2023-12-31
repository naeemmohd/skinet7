For trusting certs 
dotnet dev-certs https --clean
dotnet dev-certs https --check
dotnet dev-certs https 
dotnet dev-certs https --trust
dotnet dev-certs https --check --trust

for hotreload run - 
dotnet watch --no-hot-reload

for scaffolding EF code migration - 
 tool - dotnet tool install --global dotnet-ef --version 7.0.10
 migration - dotnet ef migrations add InitialCreate -o Data/Migrations
 create/update DB - dotnet ef database update
 for dropping an exiting database - dotnet ef database drop -p InfraStructure -s API
 for dropping an exiting migration - dotnet ef migrations remove -p InfraStructure -s API
 for adding new migration (SQLite) - dotnet ef migrations add InitialCreate -p InfraStructure -s API -o Data/Migrations
 for adding new migration (Postgres) - 
  - dotnet ef migrations add "Postgres initial" -p InfraStructure -s API -c StoreContext -o Data/Migrations
  - dotnet ef migrations add "Postgres initial" -p InfraStructure -s API -c AppIdentityDbContext -o Identity/Migrations
  
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

    git add --all
    git commit -m "End of section 3"

    git remote add origin https://github.com/naeemmohd/skinet7.git


    git config --list
    git config --global user.name "Mohd Naeem"
    git config --global user.email "naeem.mohd@hotmail.com"

    git push origin main

    git config --list
    
	
	git init
	git branch -M main
	git add --all
	git commit -m "Intial commit for IMB MQ"
	
	git remote add origin https://github.com/naeemmohd/IBMMQ.git
	git push -u origin main

