module.exports = {

  
        
            var ConvertBase = function (num) {
                return {
                    from : function (baseFrom) {
                        return {
                            to : function (baseTo) {
                                return parseInt(num, baseFrom).toString(baseTo);
                            }
                        };
                    }
                };
            };
   
            ConvertBase.dec2bin = function (num) {
                return ConvertBase(num).from(10).to(2);
            };
            
            ConvertBase.dec2bin(10)


        let layouts = [];
            let base = 8;

        for (let i=0; i<base;i++){
            let number = i;
            let element = number.toString(2);
            if (element.length<4){
                let stringZeros = '0';
                for(let i=1; i<element.length;i++){
                    stringZeros = "0" + stringZeros
                }
                element = element+stringZeros
                
            }
            layouts.push(element);
            

        }
        console.log(layouts)

}