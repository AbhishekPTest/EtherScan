import React, { useEffect, useState } from "react"
import useWeb3Js from "../../customHook/useWeb3Js";
import styles from './TransactionList.module.css'
import {useLocation, useParams} from "react-router-dom";
import { ColumnArray_Transaction_List } from "../../constants/objectConstants";


const TransactionList = () => {
    
    const [transactionList, setTransactionList] = useState([]);
    const [loading, setLoading] = useState(true);
    const location= useLocation();
    const { getAllTransactionsDetailsForAllBlock } = useWeb3Js();
    const { blockNumber } = useParams();
    
    useEffect(() => {

        const fetchDetails = async () => {
            const list = await getAllTransactionsDetailsForAllBlock(blockNumber);
            setTransactionList(list);
            setLoading(false);
        }
        fetchDetails();
    }, [blockNumber, getAllTransactionsDetailsForAllBlock, location.search])

    if (loading) {
        return (
            <h3>Loading</h3>
        )
    }
    return (
        <div className={styles['custom-container']}>
                <table>
                    <thead>
                        <tr>
                            {ColumnArray_Transaction_List.map((item, index) => {
                                return (<th key={item}>
                                    {item}
                                </th>);
                            })}

                        </tr>
                    </thead>

                    <tbody>
                            {transactionList.length>0 && (
                                transactionList.map((item)=>{
                                    console.log(item)
                                    return (
                                        <tr key={item.hash}>
                                            <th>{item.hash}</th>
                                             <th >{item.nonce}</th>
                                             <th>{item.blockHash}</th>
                                             <th>{item.blockNumber}</th>
                                             <th>{item.from}</th>
                                             <th>{item.to}</th>
                                             <th>{item.value}</th>
                                            <th>{item.gasPrice}</th>
                                            <th>{item.gas}</th>
                                        </tr>
                                    );
                                })
                            )}
                    </tbody>
                </table>
            </div>

    );
}



export default TransactionList;

