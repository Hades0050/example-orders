class User {
  public user: string;
  public password: string;
  public name?: string;
  public role?: string;

  constructor(user?: User) {
    this.user = user?.user ? user.user : '';
    this.password = user?.password ? user.password : '';
    this.name = user?.name ? user.name : '';
    this.role = user?.role ? user.role : '';
  }

  static getFormAuth() {
    return {
      fields: [
        {
          placeholder: 'username',
          name: 'username',
          as: 'input',
          rules: 'required',
        },
        {
          placeholder: 'password',
          name: 'password',
          as: 'input',
          rules: 'required',
        },
      ],
    };
  }
}

export { User };
