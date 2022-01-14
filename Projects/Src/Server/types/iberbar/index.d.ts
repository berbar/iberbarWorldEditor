
// export {}
// declare global {
//   // Definition or type for the function.
//   type Debug = (label: string) => (message: any, ...args: any[]) => void

//   // If defining an object you might do something like this
//   // interface IConfig { a: number, b: number }

//   type ObjectExtension =
//   {
//     GetType: ()=> any;
//   }

//   // Extend the Global interface for the NodeJS namespace.
//   namespace NodeJS {
//     interface Global {
//       // Reference our above type, 
//       // this allows global.debug to be used anywhere in our code.
//       debug: Debug & typeof Object
//       //Object: typeof Object & ObjectExtension;
//     }
//   }
  
//   // This allows us to simply call debug('some_label')('some debug message')
//   // from anywhere in our code.
//   const debug: Debug
//   const Object: typeof Object & ObjectExtension
// }


interface Object
{
  GetType(): any;
}

declare interface Array<T> {
  firstOrDefault(predicate?: (e: T, index: number) => boolean): T;
  where(predicate: (e: T, index: number) => boolean): Array<T>;
  removeAt(index: number): Array<T>;
  remove<T>(element: T): Array<T>;
  removeWhere<T>(predicate: (e: T, index: number) => boolean): Array<T>;
}
declare interface ReadonlyArray<T> {
  firstOrDefault(predicate?: (e: T, index: number) => boolean): T;
  where(predicate: (e: T, index: number) => boolean): Array<T>;
  safeForEach(func: (e: T, index: number) => boolean): void;
}