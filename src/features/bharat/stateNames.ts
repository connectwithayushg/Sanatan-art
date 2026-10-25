import type { L } from '../../content/bharatTemples'

const s = (hi: string, en: string): L => ({ hi, en })

/** State and union territory names for the map, keyed by the codes used in indiaMap.json and the temple data. */
export const STATE_NAMES: Record<string, L> = {
  JK: s('जम्मू और कश्मीर', 'Jammu & Kashmir'), LA: s('लद्दाख', 'Ladakh'), PB: s('पंजाब', 'Punjab'), HP: s('हिमाचल प्रदेश', 'Himachal Pradesh'),
  CH: s('चंडीगढ़', 'Chandigarh'), UK: s('उत्तराखंड', 'Uttarakhand'), HR: s('हरियाणा', 'Haryana'), DL: s('दिल्ली', 'Delhi'),
  RJ: s('राजस्थान', 'Rajasthan'), UP: s('उत्तर प्रदेश', 'Uttar Pradesh'), BR: s('बिहार', 'Bihar'), SK: s('सिक्किम', 'Sikkim'),
  AR: s('अरुणाचल प्रदेश', 'Arunachal Pradesh'), NL: s('नागालैंड', 'Nagaland'), MN: s('मणिपुर', 'Manipur'), MZ: s('मिज़ोरम', 'Mizoram'),
  TR: s('त्रिपुरा', 'Tripura'), ML: s('मेघालय', 'Meghalaya'), AS: s('असम', 'Assam'), WB: s('पश्चिम बंगाल', 'West Bengal'),
  JH: s('झारखंड', 'Jharkhand'), OD: s('ओडिशा', 'Odisha'), CG: s('छत्तीसगढ़', 'Chhattisgarh'), MP: s('मध्य प्रदेश', 'Madhya Pradesh'),
  GJ: s('गुजरात', 'Gujarat'), DD: s('दादरा नगर हवेली और दमन दीव', 'Dadra & Nagar Haveli and Daman & Diu'), MH: s('महाराष्ट्र', 'Maharashtra'),
  TG: s('तेलंगाना', 'Telangana'), AP: s('आंध्र प्रदेश', 'Andhra Pradesh'), KA: s('कर्नाटक', 'Karnataka'), GA: s('गोवा', 'Goa'),
  KL: s('केरल', 'Kerala'), TN: s('तमिलनाडु', 'Tamil Nadu'), PY: s('पुडुचेरी', 'Puducherry'), AN: s('अंडमान और निकोबार', 'Andaman & Nicobar'),
  LD: s('लक्षद्वीप', 'Lakshadweep'),
}
