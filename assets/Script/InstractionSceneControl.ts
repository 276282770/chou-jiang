
import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = InstractionSceneControl
 * DateTime = Mon Dec 13 2021 16:39:05 GMT+0800 (中国标准时间)
 * Author = 276282770
 * FileBasename = InstractionSceneControl.ts
 * FileBasenameNoExtension = InstractionSceneControl
 * URL = db://assets/Script/InstractionSceneControl.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('InstractionSceneControl')
export class InstractionSceneControl extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Node)
    ndEnter:Node;



    start () {
        // [3]
        this.setEnterButton();
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
    enterMainGame(){
        director.loadScene("Main");
    }

    setEnterButton(){
        var that=this;
        this.ndEnter.active=false;
        this.scheduleOnce(function(){
            that.ndEnter.active=true;
        },5)
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
 */
