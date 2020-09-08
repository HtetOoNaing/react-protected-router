class Auth {
  constructor() {
    if (localStorage.getItem("auth")) {
      this.authenticated = localStorage.getItem("auth");
    } else {
      this.authenticated = false;
    }
  }
  login(cb) {
    this.authenticated = true;
    localStorage.setItem("auth", true);
    cb();
  }
  logout(cb) {
    this.authenticated = false;
    localStorage.removeItem("auth");
    cb();
  }
  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
