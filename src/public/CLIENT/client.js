class Client {
    constructor(_main) {
        const SELF = this;

        this.Main = _main;

        this.Main.FunctionsToAddToIOServerClients["volume_get3"] = function(volume){
            SELF.Main.IOClient.emit("volume_get4", volume);
        };

        // 2 Sockets from server
        this.Main.IOClient.on("volume_get1", function(){
            SELF.Main.IOServer.sockets.emit("volume_get2");
        });
    }
}

module.exports = Client;
