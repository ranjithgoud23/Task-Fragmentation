import React from 'react';

interface TransactionTableProps {
  data: any[]; // Replace with the actual type of data
  priceUSD: number | undefined;
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  data,
  priceUSD,
}) => {
  return(
    <div>
        <div className="header">
          <p className="header_label">Burn Transactions</p>
        </div>
        <BurnTxTable
          data={burnTransactions}
          priceUSD={coinData?.current_price?.usd}
        />
    </div>
  )
};

export default TransactionTable;