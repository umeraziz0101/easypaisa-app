// import Strings from './constants/Strings';

// function pad2(n) {
//   return n < 10 ? '0' + n : n;
// }

// export function formatDateTimeShort(date) {
//   const day = pad2(date.getDate());
//   const month = pad2(date.getMonth() + 1);
//   const year = date.getFullYear() % 100;
//   const hour24 = date.getHours();
//   const minute = pad2(date.getMinutes());

//   const ampm = hour24 >= 12 ? Strings.texts.pm : Strings.texts.am;
//   const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;

//   return `${day}-${month}-${pad2(year)} ` + `${pad2(hour12)}:${minute} ${ampm}`;
// }
