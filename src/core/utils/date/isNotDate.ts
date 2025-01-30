export function isNotDate(date: string): boolean {
  return isNaN(Date.parse(date));
}
