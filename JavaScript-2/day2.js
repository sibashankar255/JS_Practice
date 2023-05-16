//HTTP-> (Hypertext Transfer Protocol) is a protocol used for communication between web browsers and web servers over the internet.
// search on browser-> send a request and get back the response, connection has been terminated

//UDP->UDP (User Datagram Protocol) is a transport layer protocol that provides a connectionless 
// and unreliable communication service between two devices over an IP network.
// i request data only once and it keeps on sending the data as it has, unlessa and until i terminate the connection

//TCP->TCP (Transmission Control Protocol) is a widely used transport layer protocol
// that provides reliable, connection-oriented communication between devices over IP networks.
//

//HTTP 1: if a client is requesting data, the server will respond back with data
//request-> textual data
//it will wait for the server to return a data and terminate it's connection
//the date will be given in the compressed format
//quite slower when compared to HTTP 2

//HTTP 2: if a client is requesting data, the server will respond back with data
// The server can send data even if it is not requested by client
//request-> binary data
//it can take multiple request at a time and respind with appropriate date for that request(multiplexing)
//it processes faster then HTTP 1


//When you type an URL in a browser
//it will search in DNS and look up the location of the server hosting that website
//make the connection to that server
//handle the response
//it renders the page in UI

//DNS -> Domain Name System
// 101.98.54.10 mapped to -> www.hoststar.com
// 102.75.10.24 mapped to -> www.youtube.com

