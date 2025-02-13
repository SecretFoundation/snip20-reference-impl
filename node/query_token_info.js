import { SecretNetworkClient, Wallet, coinsFromString } from "secretjs";
import * as fs from "fs";
// import dotenv from "dotenv";
// dotenv.config();

const wallet = new Wallet("desk pigeon hammer sleep only mistake stool december offer patrol once vacant");

const secretjs = new SecretNetworkClient({
    chainId: "pulsar-3",
    url: "https://pulsar.lcd.secretnodes.com",
    wallet: wallet,
    walletAddress: wallet.address,
  });
  
let contractAddress = "secret136acktxpd0arjprneqxtgxt832n8rnq8rrk7fy"
let contractCodeHash = "82b35f533630d1b40e43729dc173e0f0e762d718be5e76824fec2af3dca14c13"

let query_token_info = async () => {
    const tokenInfoQuery = await secretjs.query.compute.queryContract({
      contract_address: contractAddress,
      query: {
        token_info: {},
      },
      code_hash: contractCodeHash,
    });
  
    console.log(tokenInfoQuery);
  };
  query_token_info();