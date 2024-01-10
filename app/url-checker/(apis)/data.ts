export const apiData = {
  data: {
    report: {
      dns_records: {
        ns: {
          records: []
        },
        mx: {
          records: []
        }
      },
      domain_blacklist: {
        engines: [
          {
            name: 'ThreatLog',
            reference: 'https://www.threatlog.com/',
            detected: false
          },
          {
            name: 'OpenPhish',
            reference: 'https://openphish.com/',
            detected: false
          },
          {
            name: 'PhishTank',
            reference: 'https://www.phishtank.com/',
            detected: false
          },
          {
            name: 'Phishing.Database',
            reference: 'https://github.com/mitchellkrogza/Phishing.Database',
            detected: false
          },
          {
            name: 'PhishStats',
            reference: 'https://phishstats.info/',
            detected: false
          },
          {
            name: 'URLhaus',
            reference: 'https://urlhaus.abuse.ch/',
            detected: false
          },
          {
            name: 'RPiList Not Serious',
            reference: 'https://github.com/RPiList/specials',
            detected: false
          },
          {
            name: 'AntiSocial Blacklist',
            reference: 'https://theantisocialengineer.com/',
            detected: false
          },
          {
            name: 'PhishFeed',
            reference: 'https://phishfeed.com/',
            detected: false
          },
          {
            name: 'NABP Not Recommended Sites',
            reference: 'https://safe.pharmacy/buy-safely/',
            detected: false
          },
          {
            name: 'Spam404',
            reference: 'https://www.spam404.com/',
            detected: false
          },
          {
            name: 'CRDF',
            reference: 'https://threatcenter.crdf.fr/check.html',
            detected: false
          },
          {
            name: 'Artists Against 419',
            reference: 'http://wiki.aa419.org/index.php/Main_Page',
            detected: false
          },
          {
            name: 'CERT Polska',
            reference: 'https://www.cert.pl/',
            detected: false
          },
          {
            name: 'PetScams',
            reference: 'https://petscams.com/',
            detected: false
          },
          {
            name: 'Suspicious Hosting IP',
            reference: 'https://www.novirusthanks.org/',
            detected: false
          },
          {
            name: 'Phishunt',
            reference: 'https://phishunt.io/',
            detected: false
          },
          {
            name: 'CoinBlockerLists',
            reference: 'https://gitlab.com/ZeroDot1/CoinBlockerLists/',
            detected: false
          },
          {
            name: 'MetaMask EthPhishing',
            reference: 'https://github.com/MetaMask/eth-phishing-detect/',
            detected: false
          },
          {
            name: 'EtherScamDB',
            reference: 'https://etherscamdb.info/',
            detected: false
          },
          {
            name: 'EtherAddressLookup',
            reference: 'https://github.com/409H/EtherAddressLookup/',
            detected: false
          },
          {
            name: 'ViriBack C2 Tracker',
            reference: 'http://tracker.viriback.com/',
            detected: false
          },
          {
            name: 'Bambenek Consulting',
            reference: 'http://www.bambenekconsulting.com/',
            detected: false
          },
          {
            name: 'Badbitcoin',
            reference: 'https://badbitcoin.org/',
            detected: false
          },
          {
            name: 'SecureReload Phishing List',
            reference: 'https://securereload.tech/',
            detected: false
          },
          {
            name: 'Fake Website Buster',
            reference: 'https://fakewebsitebuster.com/',
            detected: false
          },
          {
            name: 'TweetFeed',
            reference: 'https://github.com/0xDanielLopez/TweetFeed',
            detected: false
          },
          {
            name: 'CryptoScamDB',
            reference: 'https://cryptoscamdb.org/',
            detected: false
          },
          {
            name: 'StopGunScams',
            reference: 'https://stopgunscams.com/',
            detected: false
          },
          {
            name: 'ThreatFox',
            reference: 'https://threatfox.abuse.ch/',
            detected: false
          },
          {
            name: 'PhishFort',
            reference: 'https://www.phishfort.com/',
            detected: false
          }
        ],
        detections: 0
      },
      file_type: {
        signature: '',
        extension: '',
        headers: ''
      },
      geo_location: {
        countries: []
      },
      html_forms: {
        number_of_total_forms: 0,
        number_of_total_input_fields: 0,
        two_text_inputs_in_a_form: false,
        credit_card_field_present: false,
        password_field_present: false,
        email_field_present: false
      },
      redirection: {
        found: false,
        external: false,
        url: '',
        redirects: []
      },
      response_headers: [],
      risk_score: {
        result: 100
      },
      security_checks: {
        is_host_an_ipv4: false,
        is_uncommon_host_length: false,
        is_uncommon_dash_char_count: false,
        is_uncommon_dot_char_count: false,
        is_suspicious_url_pattern: false,
        is_suspicious_file_extension: false,
        is_robots_noindex: false,
        is_suspended_page: false,
        is_most_abused_tld: true,
        is_uncommon_clickable_url: false,
        is_phishing_heuristic: false,
        is_possible_emotet: false,
        is_redirect_to_search_engine: false,
        is_redirect_to_wikipedia: false,
        is_http_status_error: true,
        is_http_server_error: true,
        is_http_client_error: false,
        is_suspicious_content: false,
        is_url_accessible: false,
        is_empty_page_title: false,
        is_empty_page_content: true,
        is_domain_ipv4_assigned: false,
        is_domain_ipv4_private: false,
        is_domain_ipv4_loopback: false,
        is_domain_ipv4_reserved: false,
        is_domain_ipv4_valid: false,
        is_domain_blacklisted: false,
        is_suspicious_domain: true,
        is_sinkholed_domain: false,
        is_defaced_heuristic: false,
        is_masked_file: false,
        is_risky_geo_location: false,
        is_china_country: false,
        is_nigeria_country: false,
        is_non_standard_port: false,
        is_email_address_on_url_query: false,
        is_directory_listing: false,
        is_exe_on_directory_listing: false,
        is_zip_on_directory_listing: false,
        is_php_on_directory_listing: false,
        is_doc_on_directory_listing: false,
        is_pdf_on_directory_listing: false,
        is_apk_on_directory_listing: false,
        is_linux_elf_file: false,
        is_linux_elf_file_on_free_dynamic_dns: false,
        is_linux_elf_file_on_free_hosting: false,
        is_linux_elf_file_on_ipv4: false,
        is_masked_linux_elf_file: false,
        is_masked_windows_exe_file: false,
        is_ms_office_file: false,
        is_windows_exe_file_on_free_dynamic_dns: false,
        is_windows_exe_file_on_free_hosting: false,
        is_windows_exe_file_on_ipv4: false,
        is_windows_exe_file: false,
        is_android_apk_file_on_free_dynamic_dns: false,
        is_android_apk_file_on_free_hosting: false,
        is_android_apk_file_on_ipv4: false,
        is_android_apk_file: false,
        is_external_redirect: false,
        is_risky_category: false,
        is_domain_recent: 'yes',
        is_domain_very_recent: 'no',
        is_credit_card_field: false,
        is_password_field: false,
        is_valid_https: false
      },
      server_details: {
        ip: '',
        hostname: '',
        continent_code: null,
        continent_name: null,
        country_code: null,
        country_name: null,
        region_name: null,
        city_name: null,
        latitude: null,
        longitude: null,
        isp: null,
        asn: ''
      },
      site_category: {
        is_torrent: false,
        is_vpn_provider: false,
        is_free_hosting: false,
        is_anonymizer: false,
        is_url_shortener: false,
        is_free_dynamic_dns: false,
        is_code_sandbox: false,
        is_form_builder: false,
        is_free_file_sharing: false,
        is_pastebin: false
      },
      url_parts: {
        scheme: 'https',
        host: 'www.splmsonline.top',
        host_nowww: 'splmsonline.top',
        port: null,
        path: null,
        query: null
      },
      web_page: {
        title: '',
        description: '',
        keywords: ''
      }
    }
  },
  credits_remained: 1018,
  estimated_queries: '2,036',
  elapsed_time: '0.65',
  success: true
}
