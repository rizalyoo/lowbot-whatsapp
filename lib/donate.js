exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `[ *MENU DONASI ${BotName}* ]
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? ✨

🗓️ *${tampilTanggal}*
⏲️ *${tampilWaktu}*

✌️ Silahkan donasi dibawah ini :
   
💰*OVO*: 085645700171
💰 *#PULSA*: 085645700171
💰 *#GOPAY*: 085645700171
💰 *#SAWERIA*: https://saweria.co/rizalyoo

📍 Follow akun instagram ${instagramlu}

ℹ️ INFORMASI COVID-19 TERBARU!

- POSITIF: *${corohelp.confirmed.value}*
- SEMBUH: *${corohelp.recovered.value}*
- MENINGGAL: *${corohelp.deaths.value}*
- UPDATE: *${corohelp.lastUpdate}*

✌️_TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_😷
  
⛔ Gunakan dengan bijak ‼️
⛔ Bot ini berjalan ${kapanbotaktif} ‼️

 
}
