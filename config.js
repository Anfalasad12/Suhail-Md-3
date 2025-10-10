const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923497749223";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_14_10_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODksXG4gICAgICAgIDI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDM0LFxuICAgICAgICAzMixcbiAgICAgICAgNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDc3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDg0LFxuICAgICAgICA5MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcxLFxuICAgICAgICA4MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDczLFxuICAgICAgICAxNDYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5LFxuICAgICAgICA3MCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxODYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEzLFxuICAgICAgICA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTksXG4gICAgICAgIDMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzLFxuICAgICAgICA4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicW9kanpYanF2YXl1R0FEV3QrdW1TMmNqbEtGRjYrdVIvc3BseW4zVlFqQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0OTc3NDkyMjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE1NkIwQjc4MkM3QjgzQTFBQzNBRTdCRDYyMTlCOEY5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc2MDA1NTI2MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IHRydWVcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJUdnhwSTZGUUdDODBHX05zdGdRd2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTI3ZjdiMTMtOTc4OS00NzI5LWFlZGYtNGIxYTk1NmZiZjU0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMSxcbiAgICAgIDAsXG4gICAgICA5NyxcbiAgICAgIDE4MixcbiAgICAgIDIwOSxcbiAgICAgIDMzLFxuICAgICAgODgsXG4gICAgICA3MyxcbiAgICAgIDExNSxcbiAgICAgIDExLFxuICAgICAgOTMsXG4gICAgICAxNDUsXG4gICAgICAyNDUsXG4gICAgICAyMTIsXG4gICAgICAxOTAsXG4gICAgICA0NSxcbiAgICAgIDEzOSxcbiAgICAgIDE4NyxcbiAgICAgIDI0MCxcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTIsXG4gICAgICAxNDQsXG4gICAgICAxOTYsXG4gICAgICAxMzUsXG4gICAgICAzMCxcbiAgICAgIDIwMSxcbiAgICAgIDEyOSxcbiAgICAgIDIwMixcbiAgICAgIDMzLFxuICAgICAgMjMwLFxuICAgICAgMTY4LFxuICAgICAgMTU5LFxuICAgICAgNDUsXG4gICAgICAxODcsXG4gICAgICAxODcsXG4gICAgICAzNSxcbiAgICAgIDEyMixcbiAgICAgIDIzMSxcbiAgICAgIDI0NixcbiAgICAgIDgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVBOMjJnUTFaK2h4d1lZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5dHZ1cSs2Y0s2a3lJWDZ1L0p0NU1TUjhuRk9HMzVkNU1rVExLa2llbFRBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImliNkNVYi9EVVh6RmFpbGVSalRyV3BjRElCR01FVktiWTczUE91aUtRWmFSci94LzRzQk9LdmRsc3B2OXpmT1NJc3pIVS96Q3BEdTRTZ010R1JLM0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndDQ25PR1VRNzh4eERBRUh4bGtTb1E1QzlRcmlLc0wrYUhOcjU3N2tDTFNiRHowdEp2cDltYzNlZ0NzWG9ZQkllVzNwQjB0TVVtak93QjlDcmJCeGdnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDk3NzQ5MjIzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOb1dheVwiLFxuICAgIFwibGlkXCI6IFwiMTAzNjIwODY3NTQzMTAyOjRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0OTc3NDkyMjM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NjAwNTUyNTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIV0NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhXQy5qc29uIjogIntcImtleURhdGFcIjpcIklMeFh4Wko1dG5LQk9oMmxzN1NqTkNhRnM3OWpjRjQxY2ZUVjVuUlh1Mzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjE5NjA0Njc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTkzNzQ2NzAzNTZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Asad",
  packname: process.env.PACK_NAME || "❤️Asad",
  botname : process.env.BOT_NAME  || "Asad-MD",
  ownername:process.env.OWNER_NAME|| "ASAD MALIK",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ASAD"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

