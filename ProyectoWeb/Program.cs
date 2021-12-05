var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/api/users", () =>{

    var user = new User("bautista","clem");

    var user2 = new User("b","c");

    var users = new List<User>();

users.Add(user);
users.Add(user2);

    return users;


} );

app.Run();
