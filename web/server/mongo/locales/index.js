import collections from '../collections/index.js'

const locales = [
  { locale: 'af_NA', language: 'Afrikaans (Namibia)' },
  { locale: 'af_ZA', language: 'Afrikaans (South Africa)' },
  { locale: 'ak_GH', language: 'Akan (Ghana)' },
  { locale: 'am_ET', language: 'Amharic (Ethiopia)' },
  { locale: 'ar_AE', language: 'Arabic (United Arab Emirates)' },
  { locale: 'ar_BH', language: 'Arabic (Bahrain)' },
  { locale: 'ar_DZ', language: 'Arabic (Algeria)' },
  { locale: 'ar_EG', language: 'Arabic (Egypt)' },
  { locale: 'ar_IQ', language: 'Arabic (Iraq)' },
  { locale: 'ar_JO', language: 'Arabic (Jordan)' },
  { locale: 'ar_KW', language: 'Arabic (Kuwait)' },
  { locale: 'ar_LB', language: 'Arabic (Lebanon)' },
  { locale: 'ar_LY', language: 'Arabic (Libya)' },
  { locale: 'ar_MA', language: 'Arabic (Morocco)' },
  { locale: 'ar_OM', language: 'Arabic (Oman)' },
  { locale: 'ar_QA', language: 'Arabic (Qatar)' },
  { locale: 'ar_SA', language: 'Arabic (Saudi Arabia)' },
  { locale: 'ar_SD', language: 'Arabic (Sudan)' },
  { locale: 'ar_SY', language: 'Arabic (Syria)' },
  { locale: 'ar_TN', language: 'Arabic (Tunisia)' },
  { locale: 'ar_YE', language: 'Arabic (Yemen)' },
  { locale: 'as_IN', language: 'Assamese (India)' },
  { locale: 'asa_TZ', language: 'Asu (Tanzania)' },
  { locale: 'az_Cyrl_AZ', language: 'Azerbaijani (Cyrillic, Azerbaijan)' },
  { locale: 'az_Cyrl', language: 'Azerbaijani (Cyrillic)' },
  { locale: 'az_Latn_AZ', language: 'Azerbaijani (Latin, Azerbaijan)' },
  { locale: 'az_Latn', language: 'Azerbaijani (Latin)' },
  { locale: 'be_BY', language: 'Belarusian (Belarus)' },
  { locale: 'bem_ZM', language: 'Bemba (Zambia)' },
  { locale: 'bez_TZ', language: 'Bena (Tanzania)' },
  { locale: 'bg_BG', language: 'Bulgarian (Bulgaria)' },
  { locale: 'bm_ML', language: 'Bambara (Mali)' },
  { locale: 'bn_BD', language: 'Bengali (Bangladesh)' },
  { locale: 'bn_IN', language: 'Bengali (India)' },
  { locale: 'bo_CN', language: 'Tibetan (China)' },
  { locale: 'bo_IN', language: 'Tibetan (India)' },
  { locale: 'bs_BA', language: 'Bosnian (Bosnia and Herzegovina)' },
  { locale: 'ca_ES', language: 'Catalan (Spain)' },
  { locale: 'cgg_UG', language: 'Chiga (Uganda)' },
  { locale: 'chr_US', language: 'Cherokee (United States)' },
  { locale: 'cs_CZ', language: 'Czech (Czech Republic)' },
  { locale: 'cy_GB', language: 'Welsh (United Kingdom)' },
  { locale: 'da_DK', language: 'Danish (Denmark)' },
  { locale: 'dav_KE', language: 'Taita (Kenya)' },
  { locale: 'de_AT', language: 'German (Austria)' },
  { locale: 'de_BE', language: 'German (Belgium)' },
  { locale: 'de_CH', language: 'German (Switzerland)' },
  { locale: 'de_DE', language: 'German (Germany)' },
  { locale: 'de_LI', language: 'German (Liechtenstein)' },
  { locale: 'de_LU', language: 'German (Luxembourg)' },
  { locale: 'ebu_KE', language: 'Embu (Kenya)' },
  { locale: 'ee_GH', language: 'Ewe (Ghana)' },
  { locale: 'ee_TG', language: 'Ewe (Togo)' },
  { locale: 'el_CY', language: 'Greek (Cyprus)' },
  { locale: 'el_GR', language: 'Greek (Greece)' },
  { locale: 'en_AS', language: 'English (American Samoa)' },
  { locale: 'en_AU', language: 'English (Australia)' },
  { locale: 'en_BE', language: 'English (Belgium)' },
  { locale: 'en_BW', language: 'English (Botswana)' },
  { locale: 'en_BZ', language: 'English (Belize)' },
  { locale: 'en_CA', language: 'English (Canada)' },
  { locale: 'en_GB', language: 'English (United Kingdom)' },
  { locale: 'en_GU', language: 'English (Guam)' },
  { locale: 'en_HK', language: 'English (Hong Kong SAR China)' },
  { locale: 'en_IE', language: 'English (Ireland)' },
  { locale: 'en_IL', language: 'English (Israel)' },
  { locale: 'en_IN', language: 'English (India)' },
  { locale: 'en_JM', language: 'English (Jamaica)' },
  { locale: 'en_MH', language: 'English (Marshall Islands)' },
  { locale: 'en_MP', language: 'English (Northern Mariana Islands)' },
  { locale: 'en_MT', language: 'English (Malta)' },
  { locale: 'en_MU', language: 'English (Mauritius)' },
  { locale: 'en_NA', language: 'English (Namibia)' },
  { locale: 'en_NZ', language: 'English (New Zealand)' },
  { locale: 'en_PH', language: 'English (Philippines)' },
  { locale: 'en_PK', language: 'English (Pakistan)' },
  { locale: 'en_SG', language: 'English (Singapore)' },
  { locale: 'en_TT', language: 'English (Trinidad and Tobago)' },
  { locale: 'en_UM', language: 'English (U.S. Minor Outlying Islands)' },
  { locale: 'en_US', language: 'English (United States)' },
  { locale: 'en_VI', language: 'English (U.S. Virgin Islands)' },
  { locale: 'en_ZA', language: 'English (South Africa)' },
  { locale: 'en_ZW', language: 'English (Zimbabwe)' },
  { locale: 'es_419', language: 'Spanish (Latin America)' },
  { locale: 'es_AR', language: 'Spanish (Argentina)' },
  { locale: 'es_BO', language: 'Spanish (Bolivia)' },
  { locale: 'es_CL', language: 'Spanish (Chile)' },
  { locale: 'es_CO', language: 'Spanish (Colombia)' },
  { locale: 'es_CR', language: 'Spanish (Costa Rica)' },
  { locale: 'es_DO', language: 'Spanish (Dominican Republic)' },
  { locale: 'es_EC', language: 'Spanish (Ecuador)' },
  { locale: 'es_ES', language: 'Spanish (Spain)' },
  { locale: 'es_GQ', language: 'Spanish (Equatorial Guinea)' },
  { locale: 'es_GT', language: 'Spanish (Guatemala)' },
  { locale: 'es_HN', language: 'Spanish (Honduras)' },
  { locale: 'es_MX', language: 'Spanish (Mexico)' },
  { locale: 'es_NI', language: 'Spanish (Nicaragua)' },
  { locale: 'es_PA', language: 'Spanish (Panama)' },
  { locale: 'es_PE', language: 'Spanish (Peru)' },
  { locale: 'es_PR', language: 'Spanish (Puerto Rico)' },
  { locale: 'es_PY', language: 'Spanish (Paraguay)' },
  { locale: 'es_SV', language: 'Spanish (El Salvador)' },
  { locale: 'es_US', language: 'Spanish (United States)' },
  { locale: 'es_UY', language: 'Spanish (Uruguay)' },
  { locale: 'es_VE', language: 'Spanish (Venezuela)' },
  { locale: 'et_EE', language: 'Estonian (Estonia)' },
  { locale: 'eu_ES', language: 'Basque (Spain)' },
  { locale: 'fa_AF', language: 'Persian (Afghanistan)' },
  { locale: 'fa_IR', language: 'Persian (Iran)' },
  { locale: 'ff_SN', language: 'Fulah (Senegal)' },
  { locale: 'fi_FI', language: 'Finnish (Finland)' },
  { locale: 'fil_PH', language: 'Filipino (Philippines)' },
  { locale: 'fo_FO', language: 'Faroese (Faroe Islands)' },
  { locale: 'fr_BE', language: 'French (Belgium)' },
  { locale: 'fr_BF', language: 'French (Burkina Faso)' },
  { locale: 'fr_BI', language: 'French (Burundi)' },
  { locale: 'fr_BJ', language: 'French (Benin)' },
  { locale: 'fr_BL', language: 'French (Saint Barthélemy)' },
  { locale: 'fr_CA', language: 'French (Canada)' },
  { locale: 'fr_CD', language: 'French (Congo - Kinshasa)' },
  { locale: 'fr_CF', language: 'French (Central African Republic)' },
  { locale: 'fr_CG', language: 'French (Congo - Brazzaville)' },
  { locale: 'fr_CH', language: 'French (Switzerland)' },
  { locale: 'fr_CI', language: 'French (Côte d’Ivoire)' },
  { locale: 'fr_CM', language: 'French (Cameroon)' },
  { locale: 'fr_DJ', language: 'French (Djibouti)' },
  { locale: 'fr_FR', language: 'French (France)' },
  { locale: 'fr_GA', language: 'French (Gabon)' },
  { locale: 'fr_GN', language: 'French (Guinea)' },
  { locale: 'fr_GP', language: 'French (Guadeloupe)' },
  { locale: 'fr_GQ', language: 'French (Equatorial Guinea)' },
  { locale: 'fr_KM', language: 'French (Comoros)' },
  { locale: 'fr_LU', language: 'French (Luxembourg)' },
  { locale: 'fr_MC', language: 'French (Monaco)' },
  { locale: 'fr_MF', language: 'French (Saint Martin)' },
  { locale: 'fr_MG', language: 'French (Madagascar)' },
  { locale: 'fr_ML', language: 'French (Mali)' },
  { locale: 'fr_MQ', language: 'French (Martinique)' },
  { locale: 'fr_NE', language: 'French (Niger)' },
  { locale: 'fr_RE', language: 'French (Réunion)' },
  { locale: 'fr_RW', language: 'French (Rwanda)' },
  { locale: 'fr_SN', language: 'French (Senegal)' },
  { locale: 'fr_TD', language: 'French (Chad)' },
  { locale: 'fr_TG', language: 'French (Togo)' },
  { locale: 'ga_IE', language: 'Irish (Ireland)' },
  { locale: 'gl_ES', language: 'Galician (Spain)' },
  { locale: 'gsw_CH', language: 'Swiss German (Switzerland)' },
  { locale: 'gu_IN', language: 'Gujarati (India)' },
  { locale: 'guz_KE', language: 'Gusii (Kenya)' },
  { locale: 'gv_GB', language: 'Manx (United Kingdom)' },
  { locale: 'ha_Latn_GH', language: 'Hausa (Latin, Ghana)' },
  { locale: 'ha_Latn_NE', language: 'Hausa (Latin, Niger)' },
  { locale: 'ha_Latn_NG', language: 'Hausa (Latin, Nigeria)' },
  { locale: 'ha_Latn', language: 'Hausa (Latin)' },
  { locale: 'haw_US', language: 'Hawaiian (United States)' },
  { locale: 'he_IL', language: 'Hebrew (Israel)' },
  { locale: 'hi_IN', language: 'Hindi (India)' },
  { locale: 'hr_HR', language: 'Croatian (Croatia)' },
  { locale: 'hu_HU', language: 'Hungarian (Hungary)' },
  { locale: 'hy_AM', language: 'Armenian (Armenia)' },
  { locale: 'id_ID', language: 'Indonesian (Indonesia)' },
  { locale: 'ig_NG', language: 'Igbo (Nigeria)' },
  { locale: 'ii_CN', language: 'Sichuan Yi (China)' },
  { locale: 'is_IS', language: 'Icelandic (Iceland)' },
  { locale: 'it_CH', language: 'Italian (Switzerland)' },
  { locale: 'it_IT', language: 'Italian (Italy)' },
  { locale: 'ja_JP', language: 'Japanese (Japan)' },
  { locale: 'jmc_TZ', language: 'Machame (Tanzania)' },
  { locale: 'ka_GE', language: 'Georgian (Georgia)' },
  { locale: 'kab_DZ', language: 'Kabyle (Algeria)' },
  { locale: 'kam_KE', language: 'Kamba (Kenya)' },
  { locale: 'kde_TZ', language: 'Makonde (Tanzania)' },
  { locale: 'kea_CV', language: 'Kabuverdianu (Cape Verde)' },
  { locale: 'khq_ML', language: 'Koyra Chiini (Mali)' },
  { locale: 'ki_KE', language: 'Kikuyu (Kenya)' },
  { locale: 'kk_Cyrl_KZ', language: 'Kazakh (Cyrillic, Kazakhstan)' },
  { locale: 'kk_Cyrl', language: 'Kazakh (Cyrillic)' },
  { locale: 'kl_GL', language: 'Kalaallisut (Greenland)' },
  { locale: 'kln_KE', language: 'Kalenjin (Kenya)' },
  { locale: 'km_KH', language: 'Khmer (Cambodia)' },
  { locale: 'kn_IN', language: 'Kannada (India)' },
  { locale: 'ko_KR', language: 'Korean (South Korea)' },
  { locale: 'kok_IN', language: 'Konkani (India)' },
  { locale: 'kw_GB', language: 'Cornish (United Kingdom)' },
  { locale: 'lag_TZ', language: 'Langi (Tanzania)' },
  { locale: 'lg_UG', language: 'Ganda (Uganda)' },
  { locale: 'lt_LT', language: 'Lithuanian (Lithuania)' },
  { locale: 'luo_KE', language: 'Luo (Kenya)' },
  { locale: 'luy_KE', language: 'Luyia (Kenya)' },
  { locale: 'lv_LV', language: 'Latvian (Latvia)' },
  { locale: 'mas_KE', language: 'Masai (Kenya)' },
  { locale: 'mas_TZ', language: 'Masai (Tanzania)' },
  { locale: 'mer_KE', language: 'Meru (Kenya)' },
  { locale: 'mfe_MU', language: 'Morisyen (Mauritius)' },
  { locale: 'mg_MG', language: 'Malagasy (Madagascar)' },
  { locale: 'mk_MK', language: 'Macedonian (Macedonia)' },
  { locale: 'ml_IN', language: 'Malayalam (India)' },
  { locale: 'mr_IN', language: 'Marathi (India)' },
  { locale: 'ms_BN', language: 'Malay (Brunei)' },
  { locale: 'ms_MY', language: 'Malay (Malaysia)' },
  { locale: 'mt_MT', language: 'Maltese (Malta)' },
  { locale: 'my_MM', language: 'Burmese (Myanmar [Burma])' },
  { locale: 'naq_NA', language: 'Nama (Namibia)' },
  { locale: 'nb_NO', language: 'Norwegian Bokmål (Norway)' },
  { locale: 'nd_ZW', language: 'North Ndebele (Zimbabwe)' },
  { locale: 'ne_IN', language: 'Nepali (India)' },
  { locale: 'ne_NP', language: 'Nepali (Nepal)' },
  { locale: 'nl_BE', language: 'Dutch (Belgium)' },
  { locale: 'nl_NL', language: 'Dutch (Netherlands)' },
  { locale: 'nn_NO', language: 'Norwegian Nynorsk (Norway)' },
  { locale: 'nr_ZA', language: 'South Ndebele' },
  { locale: 'nso_ZA', language: 'Sesotho sa Leboa' },
  { locale: 'nyn_UG', language: 'Nyankole (Uganda)' },
  { locale: 'om_ET', language: 'Oromo (Ethiopia)' },
  { locale: 'om_KE', language: 'Oromo (Kenya)' },
  { locale: 'or_IN', language: 'Oriya (India)' },
  { locale: 'pa_Arab_PK', language: 'Punjabi (Arabic, Pakistan)' },
  { locale: 'pa_Arab', language: 'Punjabi (Arabic)' },
  { locale: 'pa_Guru_IN', language: 'Punjabi (Gurmukhi, India)' },
  { locale: 'pa_Guru', language: 'Punjabi (Gurmukhi)' },
  { locale: 'pl_PL', language: 'Polish (Poland)' },
  { locale: 'ps_AF', language: 'Pashto (Afghanistan)' },
  { locale: 'pt_BR', language: 'Portuguese (Brazil)' },
  { locale: 'pt_GW', language: 'Portuguese (Guinea-Bissau)' },
  { locale: 'pt_MZ', language: 'Portuguese (Mozambique)' },
  { locale: 'pt_PT', language: 'Portuguese (Portugal)' },
  { locale: 'rm_CH', language: 'Romansh (Switzerland)' },
  { locale: 'ro_MD', language: 'Romanian (Moldova)' },
  { locale: 'ro_RO', language: 'Romanian (Romania)' },
  { locale: 'rof_TZ', language: 'Rombo (Tanzania)' },
  { locale: 'ru_MD', language: 'Russian (Moldova)' },
  { locale: 'ru_RU', language: 'Russian (Russia)' },
  { locale: 'ru_UA', language: 'Russian (Ukraine)' },
  { locale: 'rw_RW', language: 'Kinyarwanda (Rwanda)' },
  { locale: 'rwk_TZ', language: 'Rwa (Tanzania)' },
  { locale: 'saq_KE', language: 'Samburu (Kenya)' },
  { locale: 'seh_MZ', language: 'Sena (Mozambique)' },
  { locale: 'ses_ML', language: 'Koyraboro Senni (Mali)' },
  { locale: 'sg_CF', language: 'Sango (Central African Republic)' },
  { locale: 'shi_Latn_MA', language: 'Tachelhit (Latin, Morocco)' },
  { locale: 'shi_Latn', language: 'Tachelhit (Latin)' },
  { locale: 'shi_Tfng_MA', language: 'Tachelhit (Tifinagh, Morocco)' },
  { locale: 'shi_Tfng', language: 'Tachelhit (Tifinagh)' },
  { locale: 'si_LK', language: 'Sinhala (Sri Lanka)' },
  { locale: 'sk_SK', language: 'Slovak (Slovakia)' },
  { locale: 'sl_SI', language: 'Slovenian (Slovenia)' },
  { locale: 'sn_ZW', language: 'Shona (Zimbabwe)' },
  { locale: 'so_DJ', language: 'Somali (Djibouti)' },
  { locale: 'so_ET', language: 'Somali (Ethiopia)' },
  { locale: 'so_KE', language: 'Somali (Kenya)' },
  { locale: 'so_SO', language: 'Somali (Somalia)' },
  { locale: 'sq_AL', language: 'Albanian (Albania)' },
  { locale: 'sr_Cyrl_BA', language: 'Serbian (Cyrillic, Bosnia and Herzegovina)' },
  { locale: 'sr_Cyrl_ME', language: 'Serbian (Cyrillic, Montenegro)' },
  { locale: 'sr_Cyrl_RS', language: 'Serbian (Cyrillic, Serbia)' },
  { locale: 'sr_Cyrl', language: 'Serbian (Cyrillic)' },
  { locale: 'sr_Latn_BA', language: 'Serbian (Latin, Bosnia and Herzegovina)' },
  { locale: 'sr_Latn_ME', language: 'Serbian (Latin, Montenegro)' },
  { locale: 'sr_Latn_RS', language: 'Serbian (Latin, Serbia)' },
  { locale: 'sr_Latn', language: 'Serbian (Latin)' },
  { locale: 'ss_ZA', language: 'Swati' },
  { locale: 'st_ZA', language: 'Southern Sotho' },
  { locale: 'sv_FI', language: 'Swedish (Finland)' },
  { locale: 'sv_SE', language: 'Swedish (Sweden)' },
  { locale: 'sw_KE', language: 'Swahili (Kenya)' },
  { locale: 'sw_TZ', language: 'Swahili (Tanzania)' },
  { locale: 'ta_IN', language: 'Tamil (India)' },
  { locale: 'ta_LK', language: 'Tamil (Sri Lanka)' },
  { locale: 'te_IN', language: 'Telugu (India)' },
  { locale: 'teo_KE', language: 'Teso (Kenya)' },
  { locale: 'teo_UG', language: 'Teso (Uganda)' },
  { locale: 'th_TH', language: 'Thai (Thailand)' },
  { locale: 'ti_ER', language: 'Tigrinya (Eritrea)' },
  { locale: 'ti_ET', language: 'Tigrinya (Ethiopia)' },
  { locale: 'tn_ZA', language: 'Tswana' },
  { locale: 'to_TO', language: 'Tonga (Tonga)' },
  { locale: 'tr_TR', language: 'Turkish (Turkey)' },
  { locale: 'ts_ZA', language: 'Tsonga' },
  { locale: 'tzm_Latn_MA', language: 'Central Morocco Tamazight (Latin, Morocco)' },
  { locale: 'tzm_Latn', language: 'Central Morocco Tamazight (Latin)' },
  { locale: 'uk_UA', language: 'Ukrainian (Ukraine)' },
  { locale: 'ur_IN', language: 'Urdu (India)' },
  { locale: 'ur_PK', language: 'Urdu (Pakistan)' },
  { locale: 'uz_Arab_AF', language: 'Uzbek (Arabic, Afghanistan)' },
  { locale: 'uz_Arab', language: 'Uzbek (Arabic)' },
  { locale: 'uz_Cyrl_UZ', language: 'Uzbek (Cyrillic, Uzbekistan)' },
  { locale: 'uz_Cyrl', language: 'Uzbek (Cyrillic)' },
  { locale: 'uz_Latn_UZ', language: 'Uzbek (Latin, Uzbekistan)' },
  { locale: 'uz_Latn', language: 'Uzbek (Latin)' },
  { locale: 've_ZA', language: 'Venda' },
  { locale: 'vi_VN', language: 'Vietnamese (Vietnam)' },
  { locale: 'vun_TZ', language: 'Vunjo (Tanzania)' },
  { locale: 'xh_ZA', language: 'isiXhosa' },
  { locale: 'xog_UG', language: 'Soga (Uganda)' },
  { locale: 'yo_NG', language: 'Yoruba (Nigeria)' },
  { locale: 'yue_Hant_HK', language: 'Cantonese (Traditional, Hong Kong SAR China)' },
  { locale: 'zh_Hans_CN', language: 'Chinese (Simplified Han, China)' },
  { locale: 'zh_Hans_HK', language: 'Chinese (Simplified Han, Hong Kong SAR China)' },
  { locale: 'zh_Hans_MO', language: 'Chinese (Simplified Han, Macau SAR China)' },
  { locale: 'zh_Hans_SG', language: 'Chinese (Simplified Han, Singapore)' },
  { locale: 'zh_Hans', language: 'Chinese (Simplified Han)' },
  { locale: 'zh_Hant_HK', language: 'Chinese (Traditional Han, Hong Kong SAR China)' },
  { locale: 'zh_Hant_MO', language: 'Chinese (Traditional Han, Macau SAR China)' },
  { locale: 'zh_Hant_TW', language: 'Chinese (Traditional Han, Taiwan)' },
  { locale: 'zh_Hant', language: 'Chinese (Traditional Han)' },
  { locale: 'zu_ZA', language: 'Zulu (South Africa)' },
]

export default async db => {
  for (const l of locales) {
    const { language, locale, ...other } = l

    await db
      .collection(collections.Locales.name)
      .findOneAndUpdate(
        { language },
        { $setOnInsert: { language, locale }, $set: { ...other } },
        { upsert: true, returnDocument: 'after' }
      )
  }
}
