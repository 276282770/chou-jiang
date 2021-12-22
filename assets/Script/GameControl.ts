
import { _decorator, Component, Node, instantiate, Prefab, random } from 'cc';
import { RedEnv } from './RedEnvelope';
import { RedEnvelopeOpen } from './RedEnvelopeOpen';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = GameControl
 * DateTime = Tue Dec 07 2021 19:27:49 GMT+0800 (中国标准时间)
 * Author = 276282770
 * FileBasename = GameControl.ts
 * FileBasenameNoExtension = GameControl
 * URL = db://assets/Script/GameControl.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('GameControl')
export class GameControl extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Node)
    ndRedEnvelopeOpen: Node;  //红包界面
    @property(Node)
    ndRedEnvelopeRoot: Node; //红包根路径
    @property(Prefab)
    preRedEnve: Prefab;   //红包预制体

    hongBaoArr:RedEnv[]=[];

    start() {
        // [3]
        this.initRedEnvelope();
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
    onShowRedEnvelopeOpen(id) {
        this.ndRedEnvelopeOpen.active = true;
        this.ndRedEnvelopeOpen.getComponent(RedEnvelopeOpen).rid=id;
    }

    initRedEnvelope() {
        //TODO: 从服务器取
        let hongBaoCount = 20;

        for (var i = 0; i < hongBaoCount; i++) {
            let newHongBao = instantiate(this.preRedEnve);
            newHongBao.parent = this.ndRedEnvelopeRoot;
            let hbScr= newHongBao.getComponent(RedEnv);
            hbScr.setInfo(i,0);
            this.hongBaoArr.push(hbScr);
        }
    }
    getAward(id){
        

        //测试数据
        let awards=[
            {"name":"ipone","description":"IPhone 14 一台","code":"XXX01"}
            ,{"name":"ipad","description":"IPAD 14 一台","code":"XXX01"}
            ,{"name":"fanpiao","description":"公司食堂饭票 三张","code":"XXX01"}
            ,{"name":"fanpiao","description":"公司食堂饭票 三张","code":"XXX01"}
            ,{"name":"fanpiao","description":"公司食堂饭票 三张","code":"XXX01"}
            ,{"name":"fanpiao","description":"公司食堂饭票 三张","code":"XXX01"}
            ,{"name":"fanpiao","description":"公司食堂饭票 三张","code":"XXX01"}
            ,{"name":"fanpiao","description":"公司食堂饭票 三张","code":"XXX01"}
            ,{"name":"fanpiao","description":"公司食堂饭票 三张","code":"XXX01"}
            ,{"name":"fanpiao","description":"公司食堂饭票 三张","code":"XXX01"}
            ,{"name":"dianshi","description":"康佳电视 一台","code":"XXX01"}
            ,{"name":"upan","description":"金士顿U盘128G 一个","code":"XXX01"}
            ,{"name":"laopo","description":"老婆 一名","code":"XXX01"}
                ];
        
        
        let award=awards[Math.floor( random()*awards.length)];

        this.hongBaoArr[id].rstate=2;
        this.hongBaoArr[id].award=award;
        return award;
    }
    updateRedEnve(){
        for(let i=0;i<this.ndRedEnvelopeRoot.children.length;i++){
            this.ndRedEnvelopeRoot.children[i].getComponent(RedEnv).setState(this.hongBaoArr[i].rstate);
        }
    }

}

