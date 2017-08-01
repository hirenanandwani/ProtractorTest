describe("My First Test",function(){
	
	browser.get("http://localhost:8080/#!/login");
	
		var fname = element(by.model('vm.user.firstName'));
		var lname = element(by.model('vm.user.lastName'));
		var user = element(by.model('vm.user.username'));
		var password = element(by.model('vm.user.password'));
		var regis = element(by.css('.btn.btn-primary'));

		
		var user1 = element(by.model('vm.username'));
		var pass1 = element(by.model('vm.password'));
		var login1 = element(by.css('.btn.btn-primary'));
		var logout1 = element(by.css('.btn.btn-primary'));
			
	

	var register = element(by.css('.btn.btn-link'));
		
		
	it("To Test Output",function(){
		//browser.get("http://localhost:8080/#!/login");	
	
		browser.driver.sleep(3000);
		register.click();
		browser.driver.sleep(3000);	
	});
	
	it("Register a User",function(){
		
		
		fname.sendKeys("Hiren");
		lname.sendKeys("Anandwani");
		user.sendKeys("hiren");
		password.sendKeys(123456);
		regis.click();
		
		browser.driver.sleep(3000);
		
	});
	
	
	it("Null Values Testing",function(){
		
		
		register.click();
		fname.sendKeys("Aman");
		browser.driver.sleep(2000);
		fname.clear();
		
		lname.sendKeys("Mehta");
		browser.driver.sleep(2000);
		lname.clear();
		
		user.sendKeys("aman");
		browser.driver.sleep(2000);
		user.clear();
		
		password.sendKeys(123456);
		browser.driver.sleep(2000);
		password.clear();
		
		
		browser.driver.sleep(1000);
		
		fname.sendKeys("Aman");
		lname.sendKeys("Mehta");
		user.sendKeys("aman");
		password.sendKeys(123456);
		
		
		
		regis.click();
		
		browser.driver.sleep(3000);
		
	});
	
	it("Register a User With Same UserName",function(){
		
		register.click();
		fname.sendKeys("Hiren");
		lname.sendKeys("Anandwani");
		user.sendKeys("hiren");
		password.sendKeys(123456);
		regis.click();
		
		browser.driver.sleep(3000);
		
	});
	
	
	it("User Log In",function(){
		
		browser.get("http://localhost:8080/#!/login");	
		user1.sendKeys("hiren");
		pass1.sendKeys(123456);
		login1.click();
		browser.driver.sleep(3000);
		logout1.click();

	});
	
	it("User Log In - Null Value Check",function(){
		
		browser.get("http://localhost:8080/#!/login");	
		user1.sendKeys("hiren");
		browser.driver.sleep(2000);
		user1.clear();
		pass1.sendKeys("123456");
		browser.driver.sleep(2000);
		pass1.clear();
		browser.driver.sleep(2000);
		
	
		user1.sendKeys("hiren");
		pass1.sendKeys(123456);
		
		login1.click();
		
		browser.driver.sleep(3000);
		logout1.click();
		
	});
	
	it("User Log In - Invalid Username or Password",function(){
		
		browser.get("http://localhost:8080/#!/login");	
		user1.sendKeys("hiren");
		browser.driver.sleep(2000);
		pass1.sendKeys("1234");
		login1.click();
		browser.driver.sleep(3000);
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});