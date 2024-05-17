export interface INavLink {
  label: string;
  path?: string;
  children: { label: string; path?: string }[];
}
