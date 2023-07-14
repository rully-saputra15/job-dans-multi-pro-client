export interface LoginPayload {
    username: string;
    password: string;
}

export interface Job {
    id: string;
    type: string;
    title:string;
    url:string;
    created_at: string;
    company: string;
    company_url:string;
    location:string;
    description:string;
    how_to_apply:string;
    company_logo:string;
}