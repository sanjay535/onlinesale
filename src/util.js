export function generateUniqueId() {
  const timestamp = new Date().getTime();
  const randomPart = Math.random().toString(36).substr(2, 5); // You can adjust the length of the random part as needed
  const uniqueId = `${timestamp}-${randomPart}`;
  return uniqueId;
}
