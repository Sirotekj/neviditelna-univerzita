export type DnsRecord = { name: string; ip_address: string }
export type Nsset = { handle: string; registar: string; dns: DnsRecord[] }
export type Keyset = { handle: string; registar: string; dns_keys: string[] }
export type Publish = {
  organization: boolean
  name: boolean
}
export type Contact = { handle: string; organization: string; name: string; publish: Publish }
export type Event = { timestamp: string; registrar_handle: string }
export type StateFlag = {
  name: string
  active: boolean
  description: string
}
export type DomainType = {
  fqdn: string
  nsset: Nsset
  keyset: Keyset
  owner: Contact
  sponsoring_registrar: string
  administrative_contacts: Contact[]
  expires_at: string
  events: {
    registered: Event
    transferred: Event
    updated: Event
    unregistered: Event | null
  }
  state_flags: {
    flags: StateFlag[]
    groups: string[][]
  }
}
