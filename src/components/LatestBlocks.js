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
    return (
        <>
            <h2>Blocks</h2>
            <div className={styles['custom-container']}>
                <table>
                    <thead>
                        <tr>
                            {ColumnArray_Blocks_List.map((item, index) => {
                                return (<th key={item}>
                                    {item}
                                </th>);
                            })}

                        </tr>
                    </thead>

                    <tbody>
                        {blockList.length > 0 && (
                            blockList.map((item) => {
                                return (
                                    <tr key={item.miner}>

                                        <th onClick={() => NavigateToBlockPage(item.number)}>{item.number}</th>
                                        <th>{item.timestamp}</th>
                                        <th>{item.txn}</th>
                                        <th>{item.miner}</th>
                                        <th>{item.gasUsed}</th>
                                        <th>{item.gasLimit}</th>
                                        <th>{item.baseFeePerGas}</th>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default LatestBlocks;