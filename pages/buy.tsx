import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract);

  return (
    <Container maxWidth="lg">
      <h1>Compra NFTs</h1>
      <p>Productos Exclusivos y coleccionables de Granacoin.</p>
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={
          "Parece que no hay NFT en esta colección. ¿Importó su contrato en el panel https://thirdweb.com/dashboard"
        }
      />
    </Container>
  );
}
