exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah info pada bot ini!✨

🗓️ *${tampilTanggal}*
⏲️ *${tampilWaktu}*

ℹ️ INFO BOT! :
   
⚜ *SCRIPT ORIGINAL BY*: ABDUL MUTTAQIN / FDCIABDUL

ℹ️ INFO LAIN! :

💰 JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
💰 MAU DONASI? SILAHKAN KETIK #donate

📍 Follow akun instagram admin ${instagramlu}

ℹ️ INFORMASI COVID-19 TERBARU!

- POSITIF: *${corohelp.confirmed.value}*
- SEMBUH: *${corohelp.recovered.value}*
- MENINGGAL: *${corohelp.deaths.value}*
- UPDATE: *${corohelp.lastUpdate}*

✌️_TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_😷
  
⛔ Gunakan dengan bijak ‼️
⛔ Bot ini berjalan ${kapanbotaktif} ‼️
}
