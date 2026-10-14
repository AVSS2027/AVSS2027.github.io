(() => {
  const countdown = document.querySelector("[data-conference-countdown]");
  if (!countdown) return;

  const number = countdown.querySelector("[data-countdown-days]");
  const label = countdown.querySelector("[data-countdown-label]");
  const startDate = countdown.querySelector("time").getAttribute("datetime");
  const startDay = Date.parse(`${startDate}T00:00:00Z`);
  const macauDate = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Macau",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  function updateCountdown() {
    const parts = macauDate.formatToParts(new Date());
    const datePart = (type) => Number(parts.find((part) => part.type === type).value);
    // Compare calendar dates so the count changes at midnight in Macau.
    const today = Date.UTC(datePart("year"), datePart("month") - 1, datePart("day"));
    const days = Math.max(0, Math.round((startDay - today) / 86400000));
    const text = days === 0 ? "Conference has started" : days === 1 ? "day to go" : "days to go";

    if (number.textContent !== String(days)) number.textContent = String(days);
    if (label.textContent !== text) label.textContent = text;
  }

  updateCountdown();
  setInterval(updateCountdown, 60000);
})();
