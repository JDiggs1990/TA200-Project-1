
import ARElementsPage from '../pageobjects/addremove.page.js'


describe('My Add/Remove Elements application', () => {
    it('should open page', async () => {
        await ARElementsPage.open()
        await browser.pause(1500)  //waits 1.5 seconds so we can read it  
    })
        
    it ('should select and click the element five times', async () => {    
            for (let i = 0; i < 5; i++){
                await expect (path.Element).tobedisplayed
                await ARElementsPage.btn1.click(); //adds element once for each time through loop
                await browser.pause(1500);
            }
            
        })

    it ('should check the number of elements', async () =>{
        await expect (ARElementsPage.btnLength).toBeElementsArrayOfSize(5)

        })    

    it('should delete two of those elements, clicking the button twice', async () => {        

        //    for (let j = 5; j > 3; j--){
        //        await ARElementsPage.btn2.click(); //deletes element
        //        await browser.pause(1500);
        //    }
        //}

        let numBtn = btnLength.length;
        while(numBtn > 3){
            await ARElementsPage.btn2.click(); //deletes element
            console.log("Were buttons deleted? How many remain? " + numBtn);
        }
    })


    xit ('should verify that only three delete button elements remain by checking array for children', async () => {

        //await expect toBeElementsArrayOfSize(3)
        //await expect().toHaveChildren(#elements)
        //length of array

        })    


        

        
        /*
        await ARElementsPage.btn1.click() //adds element once
        await browser.pause(3000)

        await browser.pause(3000)
        await ARElementsPage.btn1.click() // array of size i, for loop, or do while size is less than
        await browser.pause(500)
        await ARElementsPage.btn1.click() 
        await ARElementsPage.btn1.click() 
        await ARElementsPage.btn1.click() 
        //await ARElementsPage.btn1.click() 
        await browser.pause(500)
*/
        
    })
/*
    xit('should Delete Element 2, check that 3 exist', async () => {
        //await ARElementsPage.open()    will reopen and effectively referesh page, causing added elements to be reomved
        await browser.pause(3000)
        await ARElementsPage.btn2.click() //deletes element?
        await browser.pause(3000)
        await ARElementsPage.btn2.click() //deletes element?
        await browser.pause(3000)
        //CHECK FOR NUMBER OF ELEMENTS or array size
    })
*/





/*


*/



