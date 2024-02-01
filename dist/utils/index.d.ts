export function uniq(a: any): any;
export const emptyAddress: "0x0000000000000000000000000000000000000000";
export function getEtherScanAddr(): Promise<"https://etherscan.io/" | "https://ropsten.etherscan.io/" | "https://rinkeby.etherscan.io/">;
export function getEnsStartBlock(): Promise<0 | 3327417 | 25409>;
export function validateName(name: any): any;
export function parseSearchTerm(term: any, validTld: any): "invalid" | "short" | "supported" | "unsupported" | "address" | "tld" | "search";
export function isLabelValid(name: any): boolean | undefined;
import { labelhash } from "./labelhash";
import { isEncodedLabelhash } from "./labelhash";
import { isDecrypted } from "./labelhash";
import { decodeLabelhash } from "./labelhash";
import { encodeLabelhash } from "./labelhash";
import { namehash } from "./namehash";
import { encodeContenthash } from "./contents";
import { decodeContenthash } from "./contents";
import { isValidContenthash } from "./contents";
import { getProtocolType } from "./contents";
export { labelhash, isEncodedLabelhash, isDecrypted, decodeLabelhash, encodeLabelhash, namehash, encodeContenthash, decodeContenthash, isValidContenthash, getProtocolType };
//# sourceMappingURL=index.d.ts.map