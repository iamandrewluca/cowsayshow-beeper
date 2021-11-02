mqtt = require("mqtt");


const client = mqtt.connect("mqtt://cowsay.show", {
  username: "...",
  password: "...",
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log("Got message: " + message.toString());
  //client.end()
});

client.on('connect', function () {
  soundboardTopic = "soundboard/play"


  client.subscribe(soundboardTopic, function (err) {
    if (!err) {
      client.publish(soundboardTopic, "list");
    }
  })

})