export  class Helper {

  /**
  * Generate Alphabet
  * @returns array of characters from A to Z
  */

  static generateAlphabet() {
   const a = 'A';
   const z = 'Z';
   const list = []
   for (let i = a.charCodeAt(0); i < z.charCodeAt(0); i++) {
     list.push(String.fromCharCode(i));
   }

   return list;
 }

}
