import { dragItem } from "../App"

export type arrT = {
        name: string,
        order: number
}


export function extractNames (arr:arrT[] | dragItem[]): string[] | null {
   if(!arr.length){
    return null
   }

   let stack = [...arr]
   let newArr:string[] = []
   while(stack.length > 0){
    let node = stack.pop()
    if(!node){
        return null
    }
    newArr.push(node.name)
   }

   return newArr
}