 class APIUtils {

    constructor(apiContext) {
        this.apiContext = apiContext;
    }

    async getToken(logInPayLoad) {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            //url will be from Network calls
            {
                data: logInPayLoad
                // ,Headers:{
                //     "Content-type":"application/json"
                // }
            }
        );
        // await expect(loginResponse.ok()).toBeTruthy();  //To check the success status as ok
        const loginResponseInJson = await loginResponse.json(); //Returns the json representation of response body
        const loginToken = loginResponseInJson.token; //to fetch the token from response
        ////await not required for above because we are not calling playwright method
        //const message = loginResponseInJson.message;
        // await expect(message).toEqual("Login Successfully");
        console.log("Token from Response is " + loginToken);
        return loginToken;
    
}
}
module.exports ={APIUtils};