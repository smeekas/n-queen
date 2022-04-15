import { makeObservable, action, observable, autorun } from "mobx";

class Queen {
  user = {};
  queens = ["....", "....", "....", "...."];
  constructor() {
    makeObservable(this, {
      queens: observable,
      moveQueen: action,
    });
    autorun(() => console.log(this.Info));
  }
  get Info() {
    return "queens: " + this.queens;
  }
  moveQueen(board) {
    this.queens = board;
  }
  //   addUser(userData) {
  //     this.user = userData;
  //   }
  //   removeUser() {
  //     this.user = {};
  //   }
}
const queenStore = new Queen();
export { queenStore };
