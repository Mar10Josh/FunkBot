// Variables
tb = require("trollbox-bot")
const text = require('./text.json');
const welcomes = require('./welcometext.json') //Get Welcome Messages.
const hellosfile = require('./whensomeonejoins.json')
var nonowordsandsentences = ["fuck","shit","dick","FunkBot Sucks"]
var passcode = "JosiahIsCool"
OSState = "none"
avaliablecmds = ["restart"]
/*
tb.setcommand("test",function(data, socket) {
        socket.send("hello world")
      })
*/

//Connection
tb.connect("FunkBot (funk!)","#00FFFF","funk!",welcomes.welcomes[Math.round(Math.random() * welcomes.welcomes.length - 1)])

//On Connect,
tb.onconnect = function(socket) {
    //commands here
    console.log("Successful Connect, Beep?")
    tb.setcommand("help",function(data, socket) {
        socket.send(`Hello, I am FunkBot! Use any command prefixed funk! and here they are! 
        help: the current command you run XD, 
        funfact: Get A Fact!, 
        beep: beep bop skbeep?, 
        dev: Developer(s) of FunkBot! 
        randomtext: ./text.json
        debugdata: You want my data why-
        OS [action]: Do something with the OS, like SignIn.

        V3 of FunkBot (Version name Chocolate Boyfriend Microphones), Beep?
        V1 of BeepPerms (Version name is the same as funkbot), Permission to beep?`)
      })
      tb.setcommand("dev",function(data, socket) {
        socket.send(`I was developed by Josiah! He comes around!
        And credits to,
        trollbox-bot (npm i trollbox-bot)!
        codingMASTER398 on github!`)
      })
      tb.setcommand("funfact",function(data, socket) {
        socket.send(`Tryna develop, by the way, here are some things about the command!
        Gets an FNF fact.
        10 Facts for you!
        Web Facts included!
        `)
        
      })
      tb.setcommand("beep",function(data, socket) {
        socket.send("skbeep debop ebop!")
      })
     tb.setcommand("randomtext",function(data, socket) {
         socket.send(text.quotes[Math.round(Math.random() * text.quotes.length - 1)])
     })
     tb.onuserjoined(function(data) {
        console.log(data)

      })
      tb.setcommand("debugdata",function(data, socket) {
        socket.send(data)
      })
      tb.setcommand("OS SignIn",function(data, socket) {
          if (OSState = none) {
          var enteredpasscode = data.msg.split(" ")
          delete enteredpasscode[0]
          if (enteredpasscode = passcode) {
              OSState = "signin"
             socket.send("FunkLines 1.0")
           }
           else {
               socket.send("FunkError: Already Signed In As: PublicPerson")
           }
          }     
      })
      tb.setcommand("OS",function(data, socket) {
        socket.send(`Usage: OS [action]
        Description: Login or do stuff
        Avaliable for [action]:
        SignIn, SignOut, Terminal, shutdown
        `)
        tb.setcommand("OS shutdown",function(data, socket) {
            if (OSState = "signin") {
            socket.send("No Longer")
            }
            else {
             socket.send("OS already off...")
            }
          })
      })
      tb.setcommand("OS Terminal",function(data, socket) {
          socket.send("Workin On")
      })
  }
