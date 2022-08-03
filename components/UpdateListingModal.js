import React from "react"
import { useState } from "react"
import { Modal, Input } from "web3uikit"
import { useWeb3Contract } from "react-moralis"
import nftMarketplaceAbi from "../constants/NftMarketplace.json"
import { ethers } from "ethers"

function UpdateListingModal({ nftAddress, tokenId, isVisible, contractAddress, onClose }) {
    const [priceToUpdateListingWith, setPriceToUpdateListingWith] = useState(0)

    const { runContractFunction, updateListing } = useWeb3Contract({
        abi: nftMarketplaceAbi,
        contractAddress: contractAddress,
        functionName: "updateListing",
        params: {
            nftAddress: nftAddress,
            tokenId: tokenId,
            newPrice: ethers.utils.parseEther(priceToUpdateListingWith || "0"),
        },
    })

    return (
        <Modal
            isVisible={isVisible}
            onCancel={onClose}
            onCloseButtonPressed={onClose}
            onOk={() => {
                updateListing({ onError: (error) => console.log(error) })
            }}
        >
            <Input
                label="Update listing price in L1 curreny ETH"
                name="New listing price"
                type="number"
                onChange={(event) => {
                    setPriceToUpdateListingWith(event.target.value)
                }}
            ></Input>
        </Modal>
    )
}

export default UpdateListingModal
