import type { City } from '../lib/panchang/astro'

const c = (id: string, name_hi: string, name_en: string, lat: number, lon: number): City => ({ id, name_hi, name_en, lat, lon, tz: 330 })

export const CITIES: City[] = [
  c('indore', 'इंदौर', 'Indore', 22.7196, 75.8577),
  c('ujjain', 'उज्जैन', 'Ujjain', 23.1765, 75.7885),
  c('bhopal', 'भोपाल', 'Bhopal', 23.2599, 77.4126),
  c('delhi', 'दिल्ली', 'Delhi', 28.6139, 77.209),
  c('mumbai', 'मुंबई', 'Mumbai', 19.076, 72.8777),
  c('kolkata', 'कोलकाता', 'Kolkata', 22.5726, 88.3639),
  c('chennai', 'चेन्नई', 'Chennai', 13.0827, 80.2707),
  c('bengaluru', 'बेंगलुरु', 'Bengaluru', 12.9716, 77.5946),
  c('hyderabad', 'हैदराबाद', 'Hyderabad', 17.385, 78.4867),
  c('ahmedabad', 'अहमदाबाद', 'Ahmedabad', 23.0225, 72.5714),
  c('jaipur', 'जयपुर', 'Jaipur', 26.9124, 75.7873),
  c('lucknow', 'लखनऊ', 'Lucknow', 26.8467, 80.9462),
  c('varanasi', 'वाराणसी', 'Varanasi', 25.3176, 82.9739),
  c('patna', 'पटना', 'Patna', 25.5941, 85.1376),
  c('pune', 'पुणे', 'Pune', 18.5204, 73.8567),
  c('nagpur', 'नागपुर', 'Nagpur', 21.1458, 79.0882),
  c('raipur', 'रायपुर', 'Raipur', 21.2514, 81.6296),
  c('chandigarh', 'चंडीगढ़', 'Chandigarh', 30.7333, 76.7794),
  c('dehradun', 'देहरादून', 'Dehradun', 30.3165, 78.0322),
  c('guwahati', 'गुवाहाटी', 'Guwahati', 26.1445, 91.7362),
]

export const DEFAULT_CITY = 'indore'
