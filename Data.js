class Data{
    constructor(){
        this.input1 = null;
        this.input2 = null;

        this.options1 = null;
        this.options2 = null;
        this.options3 = null;
        this.options4 = null;

        this.index = null;

    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        });
    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.input1,
            email:this.input2,
            options1:this.options1,
            options2:this.options2,
            options3:this.options3,
            options4:this.options4
            
        });
    }
}