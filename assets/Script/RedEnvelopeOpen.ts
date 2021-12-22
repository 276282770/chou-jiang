
import { _decorator, Component, Node, Animation, find, Label, labelAssembler } from 'cc';
import { GameControl } from './GameControl';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = RedEnvelopeOpen
 * DateTime = Tue Dec 14 2021 17:37:00 GMT+0800 (中国标准时间)
 * Author = 276282770
 * FileBasename = RedEnvelopeOpen.ts
 * FileBasenameNoExtension = RedEnvelopeOpen
 * URL = db://assets/Script/RedEnvelopeOpen.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('RedEnvelopeOpen')
export class RedEnvelopeOpen extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Node)
    ndRedEnvelopeClose:Node;
    @property(Node)
    ndRedEnvelopeOpen:Node;
    @property(Label)
    txtAward:Label;

    rid:number=0;  //红包ID

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
    onEnable(){
        //this.animRedEnvelopeShow.play();
        this.initial();
    }
    initial(){
        this.ndRedEnvelopeOpen.active=false;
        this.ndRedEnvelopeClose.active=true;
        this.ndRedEnvelopeClose.getComponent(Animation).play();
    }

    onClose(){
        this.node.active=false;
    }
    onOpenRedEnvelope(){
        let gameControl=find("Canvas").getComponent(GameControl);
        let awaid= gameControl.getAward(this.rid);
        if(awaid==null)
            return;
        this.ndRedEnvelopeClose.active=false;
        this.ndRedEnvelopeOpen.active=true;
        this.txtAward.string=awaid.description;

        let anims=this.ndRedEnvelopeOpen.getComponentsInChildren(Animation);
        anims.forEach(anim => {
            anim.play();
        });

        gameControl.updateRedEnve();
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
