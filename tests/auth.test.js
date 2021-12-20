const auth=require("../controllers/auth");

test("login ",async()=>{
    expect(auth.login).toBeDefined();
})

test('register ', () => {
    expect(auth.register).toBeDefined();
})

test('forgot_password',()=>{
    expect(auth.forgotpassword).toBeDefined();
})

test('reset_password',()=>{
    expect(auth.resetpassword).toBeDefined();
})