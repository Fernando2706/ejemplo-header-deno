export const typeDefs = `
  type User {
    name: String
    pass: String
  }

  type Query {
    login(name:String, pass:String): String
    modPass(newPass: String): String
  }
`;