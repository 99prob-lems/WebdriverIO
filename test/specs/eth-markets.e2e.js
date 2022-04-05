const assert = require('chai').assert

describe('Compare ETH Markets', () => {
    
    
    it('Compare ETH market in native to that in etharnet pool', async () => {
        await browser.url(`https://app.aave.com/markets/`);
        await browser.newWindow('https://etherscan.io/token/0x030ba81f1c18d280636f32af80b9aad02cf0854e')
        await browser.maximizeWindow()
        const handles = await browser.getWindowHandles()

        // Aave parkets Eth element 
        const aaveEthValue = await $("//*[@class='MuiBox-root css-akr5kn' and .//*[text()='Ethereum']]//*[last()-5]");

        // Pool markets Eth element
        const poolEthValue = await $("//*[@class='col-6 u-ver-divider u-ver-divider--left' and //*[@id='marketcaptitle']]//*[@class='d-block']");
        // Collect pool Eth value
        const poolResult = await poolEthValue.getText()

        // switch to aave tab
        await browser.switchToWindow(handles[0])
        await aaveEthValue.scrollIntoView();
        // collect aave Eth value
        const aaveResult = await aaveEthValue.getText()

        //Format strings
        const poolFinal = getSubstring(poolResult, 1,5)
        const aaveFinal = getSubstring(aaveResult, 1, 6)

        //Compare Eth values
        assert.equal(poolFinal, aaveFinal.toString())
        
        //function to get a substring
        function getSubstring(string, firstind, secondind){
            toString(string)
            const before = string.substring(firstind, secondind)
            const format = before.replace(/(\r\n|\n|\r)/gm, "");
            const result = format.replace(',','.')
            return result;
          }
    });
});
