const LIBRARIES = {
  Skill: require("../../../Libraries/Skill")
};

class Facebook extends LIBRARIES.Skill {
  constructor(_main, _settings) {
    super(_main, _settings);
    const SELF = this;

    SELF.Main.FunctionsToAddToIOClientClients["volume_get4"] = function(_volume){
      const MESSAGE = _volume + "%";
      this.emit("sc_message", {
        Content: MESSAGE,
        FromServer: true
      });
      SELF.Main.TTS(this, MESSAGE);
    };

    // 1 L'utilisateur demande à connaitre la valeur du volume du client.
    this.Main.Manager.addAction("Volume.get", function(_intent, _socket){
      _socket.emit("volume_get1");
    });
  }
}

module.exports = Facebook;
