
import { createRequestApi } from "../src/api";

it("Api test case",async function(){
    global.fetch=jest.fn().mockImplementation(()=>{
     var result = new Promise((resolve,reject)=>{
            resolve({
                json:function(){
                   return{ "id":26 }
                }
            })
        })
        return result;
    })
    const response=await createRequestApi()
    console.warn(response)
    expect(response.id).toBe(26)
})