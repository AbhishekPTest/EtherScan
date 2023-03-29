import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import useWeb3Js from "../../customHook/useWeb3Js";
import styles from './BlocksDetails.module.css'

const BlocksDetails = () => {
    const [blockDetails, setBlockDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const { blockNumber } = useParams();
    const { getBlockDetails } = useWeb3Js();
    const navigate = useNavigate();

    const getAllTransactions = (blockNumber) => {
        navigate('/txns/block/' + blockNumber);
    }

    useEffect(() => {

        const fetchDetails = async () => {
            const details = await getBlockDetails(blockNumber);
            setBlockDetails(details);
            setLoading(false);
        }
        fetchDetails();
    }, [blockNumber, getBlockDetails])


    if (loading) {
        return (
            <h3>Loading</h3>
        )
    }
    return (
        <div className={styles['block-details-custom-container']}>
            <div>
                <h4>Block Height</h4>
                <h4>Status</h4>
                <h4>timestamp</h4>
                <h4>txn</h4>
                <h4>Transactions</h4>
                <h4>Fee Recipient</h4>
                <h4>Block Reward</h4>
                <h4>Total Difficulty</h4>
                <h4>Size</h4>
                <h4>Gas Used</h4>
                <h4>Gas Limit</h4>
                <h4>Base Fee per gas</h4>
                <h4>Burnt fee</h4>
                <h4>Extra Data</h4>
            </div>

            <div>
                <h4>{blockDetails.number}</h4>
                <h4>Status</h4>
                <h4>{blockDetails.timestamp}</h4>
                <h4 onClick={() => getAllTransactions(blockDetails.number)}>{blockDetails.txn}</h4>
                <h4>Transactions</h4>
                <h4>{blockDetails.miner}</h4>
                <h4>Block Reward</h4>
                <h4>Total Difficulty</h4>
                <h4>Size</h4>
                <h4>{blockDetails.gasUsed}</h4>
                <h4>{blockDetails.gasLimit}</h4>
                <h4>{blockDetails.baseFeePerGas}</h4>
                <h4>Burnt fee</h4>
                <h4>{blockDetails.extraData}</h4>
            </div>
        </div>
    );
}



export default BlocksDetails;

