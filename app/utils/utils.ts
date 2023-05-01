export const formatDate = (date: Date): string => {
  const now = new Date();
  const today = new Date(date);
  const diffInSeconds = Math.floor((+now - +today) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  const monthNames = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  
  if (diffInSeconds < 60) {
    return `Recien! hace ${diffInSeconds} segundos`;
  } else

  if (diffInMinutes < 60) {
    return `hace ${diffInMinutes} minutos`;
  } else if (diffInHours < 24) {
    return `hace ${diffInHours} horas`;
  } else if (diffInDays < 10) {
    return `hace ${diffInDays} días`;
  } else {
    const todayDate = today.getDate();
    const todayMonth = monthNames[today.getMonth()];
    const todayYear = today.getFullYear();

    return `${todayDate} de ${todayMonth} de ${todayYear}`;
  }
};