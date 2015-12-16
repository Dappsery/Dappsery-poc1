contract DappseryTest {

    function DappseryTest(){

    }

struct DappseryUser{
    bytes32 userType;
    bytes32 pubName;
    address userAdr;
    bytes32 category;
    bytes32 websiteUrl;
    bytes32 logoUrl;
    uint uID;
    bytes32 token;  
    
}


uint userIndex;

mapping (address => DappseryUser) public registeredUsers;

event RegisterAlert(uint indexed _userNum, address indexed _userAddr, bytes32 indexed _userType);

modifier isExist(address newUserAdr) { if (newUserAdr != registeredUsers[newUserAdr].userAdr) _ }
modifier isUser(bytes32 token, address addr) { if (sha3(token) == registeredUsers[addr].token) _ }


function regPublisher(bytes32 newUserType, bytes32 newPubName, address newUserAdr, bytes32 newCategory, bytes32 newWebUrl, bytes32 newLogoUrl, uint newID, bytes32 newToken) isExist(newUserAdr) returns (bool success){
         
    DappseryUser account = registeredUsers[newUserAdr];
    account.userType = newUserType;
    account.pubName = newPubName;
    account.userAdr = newUserAdr;
    account.category = newCategory;
    account.websiteUrl = newWebUrl;
    account.logoUrl = newLogoUrl;
    account.uID = newID;
    account.token = sha3(newToken); 
    
    userIndex = userIndex + 1;
    
    RegisterAlert(userIndex, account.userAdr, account.userType);
    
    return true;
        
    }


    
    function login(bytes32 token, address addr) constant isUser(token, addr) returns(address user){
        
        return registeredUsers[addr].userAdr;
    }
    

}