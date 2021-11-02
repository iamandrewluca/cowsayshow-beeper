// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import mqtt from "mqtt";

type Data = {
  name: string
}

const username = process.env.NEXT_PUBLIC_MQTT_USER;
const password = process.env.NEXT_PUBLIC_MQTT_PASS;

const client = mqtt.connect("mqtt://cowsay.show", {
      username: username,
      password: password,
});

const soundboardTopic = "soundboard/play"

client.on('connect', function () {


  client.subscribe('soundboardTopic', function (err) {
  	if (err) {
  		console.log("Error", err);
  	}
   if (!err) {
     client.publish(soundboardTopic, "list");
   }
  })


});

client.on('message', function (topic, message) {
  console.log("Got message: " + message.toString());
});

function sendMessage(msg) {
  console.log("Send message: " + msg);
  client.publish(soundboardTopic, msg);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
	 const {
    body: { name },
    method,
  } = req;

  sendMessage(name);

  res.status(200).json({ name: 'ok' })
}
