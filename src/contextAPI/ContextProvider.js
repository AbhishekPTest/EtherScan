import context from "./contextAPIWeb3";
import Web3 from "web3";



const initialState={
    web3:new Web3("https://eth-sepolia.g.alchemy.com/v2/ELFbzey4z5C22q4dq7EsbELHi2vJd-9t"),
}

const ContextProvider =({children})=>{

        
    return (
        <context.Provider value={initialState}>
            {children}
        </context.Provider> 
    );
   
}

export default ContextProvider;