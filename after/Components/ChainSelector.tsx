import React from 'react';

interface ChainSelectorProps {
  title: string;
  openChainSelector: boolean;
  setOpenChainSelector: React.Dispatch<React.SetStateAction<boolean>>;
  chains: any[]; // Replace with the actual type of chains
  selectedChain: any; // Replace with the actual type of selectedChain
  setSelectedChain: React.Dispatch<React.SetStateAction<any>>;
}

const ChainSelector: React.FC<ChainSelectorProps> = ({
  title,
  openChainSelector,
  setOpenChainSelector,
  chains,
  selectedChain,
  setSelectedChain,
}) => {
  return(<div>
    title={"Switch Token Chain"}
        openChainSelector={openChainSelector}
        setOpenChainSelector={setOpenChainSelector}
        chains={receiveChains}
        selectedChain={suppliesChain}
        setSelectedChain={setSuppliesChain}
  </div>);
};

export default ChainSelector;