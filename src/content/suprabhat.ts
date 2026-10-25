import type { Bi } from './diwaliVidhi'

/** The morning card's verse for each deity: a well-known two-line stuti, and a short closing wish. */
export const SUPRABHAT: Record<string, { verse: [string, string]; close: Bi }> = {
  ganesh: {
    verse: ['वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।', 'निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥'],
    close: { hi: 'आपका दिन मंगलमय हो · जय श्री गणेश', en: 'Have a blessed day · Jai Shri Ganesh' },
  },
  shiv: {
    verse: ['कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम्।', 'सदा वसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि॥'],
    close: { hi: 'आपका दिन मंगलमय हो · हर हर महादेव', en: 'Have a blessed day · Har Har Mahadev' },
  },
  hanuman: {
    verse: ['मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्।', 'वातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये॥'],
    close: { hi: 'आपका दिन मंगलमय हो · जय बजरंगबली', en: 'Have a blessed day · Jai Bajrangbali' },
  },
  vishnu: {
    verse: ['शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं', 'विश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम्।'],
    close: { hi: 'आपका दिन मंगलमय हो · ॐ नमो नारायणाय', en: 'Have a blessed day · Om Namo Narayanaya' },
  },
  lakshmi: {
    verse: ['या देवी सर्वभूतेषु लक्ष्मीरूपेण संस्थिता।', 'नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥'],
    close: { hi: 'आपका दिन मंगलमय हो · जय माँ लक्ष्मी', en: 'Have a blessed day · Jai Maa Lakshmi' },
  },
  durga: {
    verse: ['सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके।', 'शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥'],
    close: { hi: 'आपका दिन मंगलमय हो · जय माता दी', en: 'Have a blessed day · Jai Mata Di' },
  },
  ram: {
    verse: ['रामाय रामभद्राय रामचन्द्राय वेधसे।', 'रघुनाथाय नाथाय सीतायाः पतये नमः॥'],
    close: { hi: 'आपका दिन मंगलमय हो · जय श्री राम', en: 'Have a blessed day · Jai Shri Ram' },
  },
  kali: {
    verse: ['जयन्ती मङ्गला काली भद्रकाली कपालिनी।', 'दुर्गा क्षमा शिवा धात्री स्वाहा स्वधा नमोऽस्तु ते॥'],
    close: { hi: 'आपका दिन मंगलमय हो · जय माँ काली', en: 'Have a blessed day · Jai Maa Kali' },
  },
  khatu: {
    verse: ['हारे का सहारा, बाबा श्याम हमारा।', 'शीश के दानी, खाटू वाले श्याम की जय॥'],
    close: { hi: 'आपका दिन मंगलमय हो · जय श्री श्याम', en: 'Have a blessed day · Jai Shri Shyam' },
  },
  krishna: {
    verse: ['वसुदेवसुतं देवं कंसचाणूरमर्दनम्।', 'देवकीपरमानन्दं कृष्णं वन्दे जगद्गुरुम्॥'],
    close: { hi: 'आपका दिन मंगलमय हो · जय श्री कृष्ण', en: 'Have a blessed day · Jai Shri Krishna' },
  },
}
