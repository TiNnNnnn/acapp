class AcGameMenu{
    constructor(root){
        this.root = root;
        this.$menu = $(`
            <div class="ac-game-menu">
                <div class="ac-game-menu-field">
                    <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
                        单人模式
                    </div>
                    <br>
                    <div class="ac-game-menu-field-item ac-game-menu-field-item-muti-mode">
                        多人模式
                    </div> 
                    <br>
                    <div class="ac-game-menu-field-item ac-game-menu-field-item-settings">
                        设置
                    </div>
                </div>
            </div>
        `);
        this.root.$ac_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$muti_mode = this.$menu.find('.ac-game-menu-field-item-muti-mode');
        this.$settings = this.$menu.find('.ac-game-menu-field-item-settings');

        this.start();
    }

    start(){
        this.add_listening_events();
    }

    add_listening_events(){//点击时间监听

        let outer = this;
        this.$single_mode.click(function(){
            outer.hide(); //隐藏菜单
            outer.root.playground.show(); //显示游戏界面
        });
        this.$muti_mode.click(function(){
            console.log("click muti mode");
        });
        this.$settings.click(function(){
            console.log("click settings");
        });
    }
    show(){ //显示menu界面
        this.$menu.show();
    }
    hide(){ //关闭界面
        this.$menu.hide();
    }
}