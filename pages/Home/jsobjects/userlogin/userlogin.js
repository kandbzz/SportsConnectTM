export default {
	loginUser: async (userId, password) => {
		try{
			let response = await user_login.run({
				userId: userId, 
				password: password
			}); 
			
			if (response.status === "success"){
				storeValue("username", response.username); 
				storeValue("isAuthenticated", true); 
				showAlert("Login successful!", "success"); 
				navigateTo("Home"); 
			}
		}catch (error){
			showAlert("Invalid username or password", "error")
		}
	}, 
	
	logoutUser: () => {
		storeValue("username", undefined); 
		storeValue("isAuthenticated", false); 
		showAlert("Logged out successfully!", "info"); 
		navigateTo("Login")
	},
}; 