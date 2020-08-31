import { _decorator, Component, Node, Prefab, instantiate, Tween, JsonAsset, v3, PhysicsSystem } from 'cc';
import { State } from './util/State'
import { EnemyBase } from './Enemys/EnemyBase';
import { TowerBuildBase } from './TowerBuildBase';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    //重力加速度
    public static accY: number = -100;
    @property({ type: Node })
    public pathNodeList: Node[] = [];

    @property({ type: Node })
    public enemyHealthBarCtlNode: Node = null;

    @property({ type: JsonAsset })
    public gameConfigJson: JsonAsset = null;

    @property({ type: Prefab })
    public towersPrefabList: Node[] = [];

    private state = new State();
    // private currentAddEnemyTime: number = 0;
    // private addEnemyDuraction: number = 4;
    // private enemyNodeList: Node[] = [];
    public static enemyBeLockMaxNum: number = 1;
    start() {
        PhysicsSystem.instance.enable = true;
        // Your initialization goes here.
        this.state.addState("ready", () => {
            console.log("enter state ", this.state.getState());
        })
        this.state.setState("run");

        this.node.on("build-one-tower", (index, towerBaseNode: Node) => {
            //建造一座塔
            if (index < this.towersPrefabList.length) {
                let node = instantiate(this.towersPrefabList[index]);
                node.parent = this.node;
                let pos = v3(towerBaseNode.position.x, 0, towerBaseNode.position.z);
                node.setPosition(pos);
                towerBaseNode.getComponent(TowerBuildBase).setTargetTower(node);
            }

        });
    }
    update(dt: number) {
        
    }
    getGameConfig():JsonAsset{
        return this.gameConfigJson;
    }
   
    
}
