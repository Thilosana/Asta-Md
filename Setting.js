const fs = require('fs-extra')
//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94770036140' ;
global.mongodb = process.env.MONGODB_URI || "" ; 
global.port=5000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363169665426586@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363169665426586@g.us' ;
global.email = 'astromedia0010@outlook.com' ; 
global.github = 'https://github.com/Astropeda/Asta-Md' ;
global.location = 'Nigeria Lagos' ;
global.timezone  = process.env.TIME_ZONE || 'Africa/Lagos'
global.gurl = '' ; 
global.sudo =  process.env.SUDO || "94770036140" ;
global.devs = "2348039607375"; //Dont change it
global.mztit = process.env.MZTIT ||"Asta-Md", 
global.Gname = process.env.GNAME ||"Asta-Md-sᴜᴘᴘᴏʀᴛ",
global.zyt = process.env.ZYT || '1',
global.waUrl = process.env.WAURL ||"",
global.website = '' ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || '' ;
module.exports = {
  sessionName: process.env.SESSION_ID || 'SUHAIL_05_46_03_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4LFxuICAgICAgICA0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDg5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODgsXG4gICAgICAgIDgyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY2LFxuICAgICAgICA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMixcbiAgICAgICAgMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDY4LFxuICAgICAgICA5NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDcwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDczLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg5LFxuICAgICAgICA0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTksXG4gICAgICAgIDU1LFxuICAgICAgICA0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM5LFxuICAgICAgICA1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxLFxuICAgICAgICA5MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3LFxuICAgICAgICA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRWUStPVmVWenNEUWVJYjZwMHV6dTZKSHVsQnRUOWozeU0xNG95bGlUSGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRYbGxBRFlRUjMyNEtLaWJtNXhIaWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTEyNGViM2QtNmIwZi00YTM0LWFlNzItYjgxMjk0NzgzZjEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOCxcbiAgICAgIDEyMixcbiAgICAgIDY2LFxuICAgICAgMTA3LFxuICAgICAgODMsXG4gICAgICAxNzMsXG4gICAgICAzMSxcbiAgICAgIDIzNixcbiAgICAgIDIzNyxcbiAgICAgIDksXG4gICAgICAxNzIsXG4gICAgICA5NCxcbiAgICAgIDE3MixcbiAgICAgIDI1MixcbiAgICAgIDE0MyxcbiAgICAgIDE1OCxcbiAgICAgIDY4LFxuICAgICAgMTQzLFxuICAgICAgMTA0LFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgMzAsXG4gICAgICAxLFxuICAgICAgMjM3LFxuICAgICAgNTcsXG4gICAgICAxODUsXG4gICAgICAxNTgsXG4gICAgICAyMDcsXG4gICAgICA4MSxcbiAgICAgIDE5MSxcbiAgICAgIDIxNyxcbiAgICAgIDY1LFxuICAgICAgMTM5LFxuICAgICAgMTIwLFxuICAgICAgMTAzLFxuICAgICAgODYsXG4gICAgICAyMSxcbiAgICAgIDkyLFxuICAgICAgOTAsXG4gICAgICAyMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0JZM01OUTRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzcwMDM2MTQwOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MjcyNjc0OTExODY3MzozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wrUm41a0hFTWY2ODc0R0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidmJ6a0tqbHM4OU9JbTAvN2lJbElFWXNvVit1Z3BsaFJMSVZSbzM0Y0NRZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGckY2U1JBVk9Ya0xwQUZFVm1Sci9lVEhpamhmQ3lpNnRreThPS2M2RUwxNlFvSXY5eVlpSmtFVXZqN3lDSDZBRkdtcC9oUFV1WHZZZHcyWERrcGJEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzR3lNSUpNaHREeHBuY1VVbmxNNHVrbG9uUVNrZFV3dWpWK1ZFcHJQaU1kOGY2VmpmUVpVTG5VbFF6dFQ4WTFxdGN4WUN4L2xIQ0F6NkRUOVhwWllpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3MDAzNjE0MDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDI1MzYwMTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKdEJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp0Qi5qc29uIjogIntcImtleURhdGFcIjpcIjhYL2ZnR0NYKzBxcitLamg5MFhDOEY4cXpUN1JCaDVQbnA2bFN5MlVWMHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzMTk4NzEzNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQyNTMzOTA5MzMzXCJ9Igp9',
  botname: process.env.BOT_NAME || 'Asta-Md',
  ownername:  process.env.OWNER_NAME || `Astro`,
  author:  process.env.PACK_AUTHER || 'Astro', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname:  process.env.PACK_NAME || "Asta-Md" , 
  autoreaction: process.env.AUTO_REACTION || 'true',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true', 
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'true',
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 2,
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true', 
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "34wcCGPoe3yaGtpiBZgx4SN7",
  caption :process.env.CAPTION || "\t*ᴘᴏᴡᴇʀᴇᴅ ʙʏ Asta-Md* ",
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'true' ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || 'V.4.5.0',
  LANG: process.env.THEME|| 'Asta_Md',
  menu : process.env.MENU || '',
  WORKTYPE: process.env.WORKTYPE || 'private'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
