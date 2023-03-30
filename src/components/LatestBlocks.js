import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ColumnArray, ColumnArray_Blocks_List } from "../constants/objectConstants";
import useWeb3Js from "../customHook/useWeb3Js";
import styles from "./LatestBlocks.module.css"


const LatestBlocks = () => {
    const { getLatestBlocks } = useWeb3Js([]);
    const [blockList, setBlockList] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const NavigateToBlockPage = (blockNumber) => {
        navigate('/block/' + blockNumber);
    }
    useEffect(() => {
        const fetchList = async () => {
            const list = await getLatestBlocks();
            setBlockList(list);
            setLoading(false);
        }
        fetchList();
    }, [getLatestBlocks])

    if (loading) {
        return (
            <h3>Loading</h3>
        );
    }
    console.log(blockList)
    return (
        <div className={styles['custom-container-main']}>
            <h3 className={styles['title']}>Blocks</h3>
            <div className={styles['custom-table-container']}>
                <div className={styles['custom-table-caption']}>
                    <span>Total of {blockList.length} blocks</span>
                    <span>(Showing blocks between #{blockList[0].number} to #{blockList[blockList.length-1].number})</span>
                </div>
                <table  className={styles['custom-table']}>
                    <thead>
                        <tr>
                            {ColumnArray_Blocks_List.map((item, index) => {
                                return (<th key={item} className={styles['custom-table-headers']}>
                                    {item}
                                </th>);
                            })}

                        </tr>
                    </thead>

                    <tbody >
                        {blockList.length > 0 && (
                            blockList.map((item) => {
                                return (
                                    <tr key={item.miner}  >

                                        <th  className={styles['custom-table-row-data']} onClick={() => NavigateToBlockPage(item.number)}>{item.number}</th>
                                        <th  className={styles['custom-table-row-data']}>{item.timestamp}</th>
                                        <th  className={styles['custom-table-row-data']}>{item.txn}</th>
                                        <th className={styles['custom-table-row-data']}>{item.miner}</th>
                                        <th className={styles['custom-table-row-data']}>{item.gasUsed}</th>
                                        <th className={styles['custom-table-row-data']}>{item.gasLimit}</th>
                                        <th className={styles['custom-table-row-data']}>{item.baseFeePerGas}</th>
                                        <th className={styles['custom-table-row-data']}></th>
                                        <th className={styles['custom-table-row-data']}></th>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default LatestBlocks;