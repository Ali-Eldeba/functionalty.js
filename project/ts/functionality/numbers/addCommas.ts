/**
 * Returns Number With Commas To Facilitate Reading | e.g 1000000 => 1,000,000
 *
 * @param {number} number
 * @returns {string}
 */
export default function addCommas(number: number): string {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
