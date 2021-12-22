
import { _decorator, Component, Node, Scene, director, CCObject } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = StartSceneControl
 * DateTime = Fri Dec 10 2021 17:36:37 GMT+0800 (中国标准时间)
 * Author = 276282770
 * FileBasename = StartSceneControl.ts
 * FileBasenameNoExtension = StartSceneControl
 * URL = db://assets/Script/StartSceneControl.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('StartSceneControl')
export class StartSceneControl extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;



    start () {
        // [3]

    }



    // update (deltaTime: number) {
    //     // [4]
    // }
    enterMainScene(){
        director.loadScene("Instruaciton");
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
