async function testTelegram() {
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;

  if (!telegramToken || !telegramChatId) {
    console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
    return;
  }

  try {
    const tgResponse = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: "Testing Telegram notification for Midaum Design",
      }),
    });

    if (!tgResponse.ok) {
       const tgErrorData = await tgResponse.text();
       console.error(`Telegram API responded with ${tgResponse.status}: ${tgErrorData}`);
    } else {
       console.log("Telegram message sent successfully!");
    }
  } catch (tgError) {
    console.error("Telegram send error:", tgError);
  }
}

testTelegram();
