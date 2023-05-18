import Page from './page.js';  //imports class

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ARElementsPage extends Page {
    /**
     * define selectors using getter methods
     */

//xpath of button 1 "assElement()" //*[@id="content"]/div/button

    get btn1 () {
        //return $('//*[@id="content"]/script/text()') 
    
        return $('//*[@id="content"]/div/button')
    }


    get btn2 (){
        //selects delete button
        //return $('/html/body/div[2]/div/div/div/button')
        //return $('//*[@id="elements"]/button')
        return $('//*[@id="elements"]')
        // /html/body/div[2]/div/div/div/button


    }

    get btnLength (){
        //return $$('XPath to button[1]')     //grabs whole array with $$
        return $('/html/body/div[2]/div/div/div/button')

    }

    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    //}

    /**
     * overwrite specific options to adapt it to page object
     */
   async open () {
        return super.open('add_remove_elements/');
    }
}

export default new ARElementsPage();