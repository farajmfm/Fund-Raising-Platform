import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const {contract} = useContract
    ('0x1DbaC08cb2e3AFf12ebaE78C2E69F23eab03D8a3');
    const { mutateAsync: createCampaign } = useContractWrite(contract, 'createContract');

    const address = useAddress();
    const connect = useMetamask();

    const publishCampaign = async (form) => {
        try {
            const data = await createCampaign([
                //We can get it from createCampaign in CrowdFunding.sol 
                address, //owner
                form.title, //title
                form.description, //description
                form.target, 
                new Date(form.deadline).getTime(), //deadline
                form.image
            ])

            console.log("Contract Call Successfully", data)

        } catch (error) {
            console.log("Contract Call Unsuccessfully", error)
        }
    }

    return (
        <StateContext.Provider
           value={{
            address, 
            contract, 
            connect,
            createCampaign : publishCampaign,
           }}
           >
            {children}
           </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);