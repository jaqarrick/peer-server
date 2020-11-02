import { PeerServer } from "peer"

const peerServer = PeerServer({ port: 9000, path: "/convergence" }, server => {
	console.log("the peer server is up and running on port 9000")
})

peerServer.on("connection", client => {
	console.log("a peer client has connected")
	console.log(client.getId())
})
