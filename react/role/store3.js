import {observable,action,computed} from "mobx";
class Store3 {
    @observable guard=true
    @action setState(){
        this.guard=!this.guard;
    }
    @computed get getState(){
        return this.guard;
    }
}

const store3=new Store3();
export default store3