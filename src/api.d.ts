declare namespace API {
  interface Iuser {
    id: number;
    name: string;
    password?: string;
    role?: IRole;
  }
  interface IRole {
    isAdmin: boolean;
    isEditor: boolean;
  }
}
