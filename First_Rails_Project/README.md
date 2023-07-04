# How the Project has to be set

First you need to creat migrate the data base with the command: rails db:migrate. this in the terminal from the current project
Then you need to enter to the rails console: rails console in the terminal
Now you have to creaet a new object of you Article, sugested: object_name = Article.new(title: "Hello there", body: "Here is the programmer")
By the end, you have to save this new article with the command: object_name.save

that's it you can run the web aplication with: rails s
