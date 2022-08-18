class ChatField {
    constructor(playground) {
        this.playground = playground;
        this.$histroy = $(`
            <div class="ac-game-chat-field-histroy"></div>
        `);
        this.$input = $(`
            <input type="text" class="ac-game-chat-field-input">
        `);
        this.$histroy.hide();
        this.$input.hide();
        this.func_id = null;

        this.playground.$playground.append(this.$histroy);
        this.playground.$playground.append(this.$input);

        this.start();
    }

    start() {
        this.add_listening_events();
    }
    add_listening_events() {
        let outer = this;

        this.$input.keydown(function (e) {
            if (e.which === 27) { //ESC
                outer.hide_input();
                return false;
            }else if (e.which === 13) {
                let username = outer.playground.root.settings.username;
                let text = outer.$input.val();
                if(text){
                    outer.$input.val("");
                    outer.add_message(username,text);
                    outer.playground.mps.send_message(username,text);
                }
                return false;
            }
        });

        
    }

    render_message(message) {
        return $(`<div>${message}</div>`);
    }

    add_message(username,text) {
        this.show_histroy();
        let message = `[${username}]${text}`;
        this.$histroy.append(this.render_message(message));
        this.$histroy.scrollTop(this.$histroy[0].scrollHeight);
    }

    show_histroy() {
        let outer = this;
        this.$histroy.fadeIn();//渐变出现
        if(this.func_id)clearTimeout(this.func_id);

        this.func_id = setTimeout(function () { //三秒后隐藏
            outer.$histroy.fadeOut();
            outer.func_id = null;
        }, 3000);
    }

    show_input() {
        this.show_histroy();
        this.$input.show();
        this.$input.focus();//聚焦之后才能够输入
    }
    hide_input() {
        this.$input.hide();
        this.playground.game_map.$canvas.focus();
    }
}