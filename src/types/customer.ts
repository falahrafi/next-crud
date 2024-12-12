export interface Customer {
    id: number;
    company: string;
    last_name: string;
    first_name: string;
    email_address: string;
    job_title: string;
    business_phone: string;
    home_phone: string | null;
    mobile_phone: string | null;
    fax_number: string | null;
    address: string;
    city: string;
    state_province: string;
    zip_postal_code: string;
    country_region: string;
    web_page: string | null;
    notes: string | null;
    attachments: string | null;
  }
  