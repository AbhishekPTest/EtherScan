import { LatestBlocks_table } from "./constants";


export const ColumnArray_Blocks_List=[
    LatestBlocks_table.BLOCK_NUMBER,
    LatestBlocks_table.AGE,
    LatestBlocks_table.TXN,
    LatestBlocks_table.FEE_RECEIPT_HASH,
    LatestBlocks_table.GAS_USED,
    LatestBlocks_table.GAS_LIMIT,
   LatestBlocks_table.BASE_FEE,
    LatestBlocks_table.REWARD,
    LatestBlocks_table.BURNT_FEES
]

export const ColumnArray_Transaction_List=[
    LatestBlocks_table.TRANSACTION_HASH,
    LatestBlocks_table.NONCE,
    LatestBlocks_table.BLOCK_HASH,
    LatestBlocks_table.BLOCK_NUMBER,
    LatestBlocks_table.FROM,
    LatestBlocks_table.TO,
    LatestBlocks_table.VALUE,
    LatestBlocks_table.GAS_PRICE,
    LatestBlocks_table.GAS
]