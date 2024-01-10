// {"elapsed_time":"0.04","error":"Url is not valid"}

export type ApiError = {
  error: string;
  elapsed_time: string;
}

export type ApiVoidType = {
  data: Data
  credits_remained: number
  estimated_queries: string
  success: boolean
  error?: string
  elapsed_time?: string
} 

export interface Data {
  report: Report
}

export interface Report {
  dns_records: DnsRecords
  domain_blacklist: DomainBlacklist
  file_type: FileType
  geo_location: GeoLocation
  html_forms: HtmlForms
  redirection: Redirection
  response_headers: ResponseHeaders
  risk_score: RiskScore
  security_checks: SecurityChecks
  server_details: ServerDetails
  site_category: SiteCategory
  url_parts: UrlParts
  web_page: WebPage
}

export interface DnsRecords {
  ns: Ns
  mx: Mx
}

export interface Ns {
  records: Record[]
}

export interface Record {
  target: string
  ip: string
  country_code: string
  country_name: string
  isp: string
}

export interface Mx {
  records: Record2[]
}

export interface Record2 {
  target: string
  ip: string
  country_code: string
  country_name: string
  isp: string
}

export interface DomainBlacklist {
  engines: Engine[]
  detections: number
}

export interface Engine {
  name: string
  reference: string
  detected: boolean
}

export interface FileType {
  signature: string
  extension: string
  headers: string
}

export interface GeoLocation {
  countries: string[]
}

export interface HtmlForms {
  number_of_total_forms: number
  number_of_total_input_fields: number
  two_text_inputs_in_a_form: boolean
  credit_card_field_present: boolean
  password_field_present: boolean
  email_field_present: boolean
}

export interface Redirection {
  found: boolean
  external: boolean
  url: any
}

export interface ResponseHeaders {
  code: number
  status: string
  server: string
  "content-type": string
  "content-length": string
  "x-amz-rid": string
  "content-encoding": string
  "strict-transport-security": string
  "permissions-policy": string
  vary: string
  "akamai-cache-status": string
  date: string
}

export interface RiskScore {
  result: number
}

export interface SecurityChecks {
  is_host_an_ipv4: boolean
  is_uncommon_host_length: boolean
  is_uncommon_dash_char_count: boolean
  is_uncommon_dot_char_count: boolean
  is_suspicious_url_pattern: boolean
  is_suspicious_file_extension: boolean
  is_robots_noindex: boolean
  is_suspended_page: boolean
  is_most_abused_tld: boolean
  is_uncommon_clickable_url: boolean
  is_phishing_heuristic: boolean
  is_possible_emotet: boolean
  is_redirect_to_search_engine: boolean
  is_redirect_to_wikipedia: boolean
  is_http_status_error: boolean
  is_http_server_error: boolean
  is_http_client_error: boolean
  is_suspicious_content: boolean
  is_url_accessible: boolean
  is_empty_page_title: boolean
  is_empty_page_content: boolean
  is_domain_ipv4_assigned: boolean
  is_domain_ipv4_private: boolean
  is_domain_ipv4_loopback: boolean
  is_domain_ipv4_reserved: boolean
  is_domain_ipv4_valid: boolean
  is_domain_blacklisted: boolean
  is_suspicious_domain: boolean
  is_sinkholed_domain: boolean
  is_defaced_heuristic: boolean
  is_masked_file: boolean
  is_risky_geo_location: boolean
  is_china_country: boolean
  is_nigeria_country: boolean
  is_non_standard_port: boolean
  is_email_address_on_url_query: boolean
  is_directory_listing: boolean
  is_exe_on_directory_listing: boolean
  is_zip_on_directory_listing: boolean
  is_php_on_directory_listing: boolean
  is_doc_on_directory_listing: boolean
  is_pdf_on_directory_listing: boolean
  is_apk_on_directory_listing: boolean
  is_linux_elf_file: boolean
  is_linux_elf_file_on_free_dynamic_dns: boolean
  is_linux_elf_file_on_free_hosting: boolean
  is_linux_elf_file_on_ipv4: boolean
  is_masked_linux_elf_file: boolean
  is_masked_windows_exe_file: boolean
  is_ms_office_file: boolean
  is_windows_exe_file_on_free_dynamic_dns: boolean
  is_windows_exe_file_on_free_hosting: boolean
  is_windows_exe_file_on_ipv4: boolean
  is_windows_exe_file: boolean
  is_android_apk_file_on_free_dynamic_dns: boolean
  is_android_apk_file_on_free_hosting: boolean
  is_android_apk_file_on_ipv4: boolean
  is_android_apk_file: boolean
  is_external_redirect: boolean
  is_risky_category: boolean
  is_domain_recent: string
  is_domain_very_recent: string
  is_credit_card_field: boolean
  is_password_field: boolean
  is_valid_https: boolean
}

export interface ServerDetails {
  ip: string
  hostname: string
  continent_code: string
  continent_name: string
  country_code: string
  country_name: string
  region_name: string
  city_name: string
  latitude: number
  longitude: number
  isp: string
  asn: string
}

export interface SiteCategory {
  is_torrent: boolean
  is_vpn_provider: boolean
  is_free_hosting: boolean
  is_anonymizer: boolean
  is_url_shortener: boolean
  is_free_dynamic_dns: boolean
  is_code_sandbox: boolean
  is_form_builder: boolean
  is_free_file_sharing: boolean
  is_pastebin: boolean
}

export interface UrlParts {
  scheme: string
  host: string
  host_nowww: string
  port: any
  path: any
  query: any
}

export interface WebPage {
  title: string
  description: string
  keywords: string
}
