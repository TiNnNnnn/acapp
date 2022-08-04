class AcGamePlayground{
    constructor(root){
        this.root=root;
        this.$palyground = $(`
        <div>游戏界面<\div>
        `);

        this.hide();
        this.root.$ac_game.append(this.$palyground);
        
        this.start();
    }

    start(){
        
    }

    show(){ //打开playground界面
        this.$palyground.show();
    }

    hide(){ //关闭playground界面
        this.$palyground.hide();
    }
}