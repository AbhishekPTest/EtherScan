import { useCallback, useContext } from "react";
import context from "../contextAPI/contextAPIWeb3";



const useWeb3Js = () => {
    // useWeb3Js();
    const {web3} =useContext(context);

    const getLatestBlocks=useCallback( async()=>{
        const tempList=[];

        for (var i = 0; i < 10; i++) {
            tempList.push(  await web3.eth.getBlock(await web3.eth.getBlockNumber()- i));
            tempList[i]['txn'] = tempList[i].transactions.length;

        }

        return tempList;
    },[web3]);
    

    const getBlockDetails=useCallback(async(blockNumber)=>{
        let blockDetail= await web3.eth.getBlock(blockNumber);
        blockDetail['txn']= blockDetail.transactions.length;
        return blockDetail;

    },[web3.eth]);

    const getAllTransactionsDetailsForAllBlock = useCallback(async(blockNumber)=>{

        let blockDetail= await web3.eth.getBlock(blockNumber);

        let list=await Promise.all(blockDetail.transactions.map(async(transactionHash)=>{
            const detail=await web3.eth.getTransaction(transactionHash);
            return detail;
        }))
        console.log(list)
       return list; 
        
    },[web3.eth]);

    return {getLatestBlocks,getBlockDetails,getAllTransactionsDetailsForAllBlock};
}

export default useWeb3Js;