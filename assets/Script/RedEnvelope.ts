
import { _decorator, Component, Node, find, SpriteFrame, Sprite } from 'cc';
import { GameControl } from './GameControl';
import { RedEnvelopeOpen } from './RedEnvelopeOpen';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = RedEnv
 * DateTime = Mon Dec 13 2021 17:35:06 GMT+0800 (中国标准时间)
 * Author = 276282770
 * FileBasename = RedEnv.ts
 * FileBasenameNoExtension = RedEnv
 * URL = db://assets/Script/RedEnv.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('RedEnv')
export class RedEnv extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    
    @property(SpriteFrame)
    spOpend:SpriteFrame;  //已拆红包精灵

    rid:number=0;
    rstate:number=0;  //状态：0：未拆；1：别人拆过；2：自己拆过
    award:any;  //奖品

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
    onShowRedEnvelopeOpen(){
        if(this.rstate==0){
        find("Canvas").getComponent(GameControl).onShowRedEnvelopeOpen(this.rid);
        }else if(this.rstate==2){
            alert("已拆：奖品："+this.award.description);
        }
    }
    setInfo(id,state){
        this.rid=id;
        this.setState(state);
    }
    setState(state){
        if(state==1){
            this.node.getComponent(Sprite).spriteFrame=null;
        }else if(state==2){
            this.node.getComponent(Sprite).spriteFrame=this.spOpend;
        }
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
