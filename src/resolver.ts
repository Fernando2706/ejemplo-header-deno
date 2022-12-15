const user = 
    {
        name: "Fernando",
        pass: "1234"
    };

export const resolvers = {
    Query: {
        login: (_: unknown, args: {name:string, pass:string}) => {
            if (args.name === user.name && args.pass === user.pass) {
                return "123456" // return JWT here
            }
            throw new Error("User not found")
        },
        modPass: (_:unknown, args: {newPass:string}, ctx:any) => {
            if(!ctx.auth) throw new Error("Not auth") //JWT logic here
            user.pass = args.newPass
            return user.pass
        }
    },
};