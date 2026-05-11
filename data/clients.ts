export type ProductTag = 'IFRS 16' | 'IFRS 9' | 'Treasury' | 'Onboarding' | 'Portal'

export interface Client {
  id: string
  name: string
  href: string
  product: string
  productTag: ProductTag
}

export const clients: Client[] = [
  {
    id: 'asg',
    name: 'ASG',
    href: 'https://asg.contracthive.ai/',
    product: 'ContractHive',
    productTag: 'IFRS 16',
  },
  {
    id: 'demo',
    name: 'Demo',
    href: 'https://optimization.contracthive.ai/',
    product: 'ContractHive',
    productTag: 'IFRS 16',
  },
  {
    id: 'addresscafe',
    name: 'AddressCafe',
    href: 'https://addresscafe.contracthive.ai/',
    product: 'ContractHive',
    productTag: 'IFRS 16',
  },
  {
    id: 'creditassessment',
    name: 'CreditAssessment',
    href: 'https://creditassessment.contracthive.ai/',
    product: 'Estimator 9',
    productTag: 'IFRS 9',
  },
  {
    id: 'halotel',
    name: 'Halotel',
    href: 'https://bts.contracthive.ai/',
    product: 'ContractHive',
    productTag: 'IFRS 16',
  },
  {
    id: 'flydubai',
    name: 'FlyDubai',
    href: 'https://flydubai.contracthive.ai/login',
    product: 'ContractHive',
    productTag: 'IFRS 16',
  },
  {
    id: 'kpmg',
    name: 'KPMG',
    href: 'https://kpmg.contracthive.ai/login',
    product: 'ContractHive',
    productTag: 'IFRS 16',
  },
  {
    id: 'ricc',
    name: 'RICC',
    href: 'https://ricc.contracthive.ai/',
    product: 'ContractHive',
    productTag: 'IFRS 16',
  },
  {
    id: 'trident',
    name: 'Trident',
    href: 'https://trident.contracthive.ai/',
    product: 'ContractHive',
    productTag: 'IFRS 16',
  },
  {
    id: 'wetico',
    name: 'Wetico',
    href: 'https://wetico.contracthive.ai/',
    product: 'ContractHive',
    productTag: 'IFRS 16',
  },
  {
    id: 'safariportal',
    name: 'SafariPortal',
    href: 'https://safariportal.fineit.io/',
    product: 'Safari Portal',
    productTag: 'Portal',
  },
  {
    id: 'hivestart',
    name: 'HiveStart',
    href: 'https://customer-onboarding.contracthive.ai/',
    product: 'Client Onboarding',
    productTag: 'Onboarding',
  },
  {
    id: 'nexthive-cash',
    name: 'NextHive Cash Forecasting',
    href: 'https://cash-forcasting.fineit.io/',
    product: 'NextHive',
    productTag: 'Treasury',
  },
]
